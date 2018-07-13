const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");
const mongoose = require("mongoose");
const WebPortfolioSchema = require("./schema/WebPortfolioSchema");
const bodyParser = require("body-parser");
const transporter = require("./nodemailer/nodemailer");
const sslRedirect = require("heroku-ssl-redirect");
const sitemap = require("express-sitemap");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//DB Config
const db = require("./config/keys").mongoURI;

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

app.prepare().then(() => {
  const server = express();
  // Connect to Mongo DB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected!"))
    .catch(error => console.log(error));

  const WebPortfolioItem = mongoose.model(
    "WebPortfolioItem",
    WebPortfolioSchema
  );

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(sslRedirect());

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  server.get("/", (req, res) => {
    renderAndCache(req, res, "/");
  });

  server.get("/api/webportfolio", (req, res) => {
    WebPortfolioItem.find({}, (err, items) => {
      if (err) {
        console.log(err);
      } else res.send(items);
    });
  });

  server.post("/api/contact", (req, res) => {
    var mailOptions = {
      from: "andylu.nodemailer@gmail.com",
      to: "yilunglu.andy@gmail.com",
      subject: `${req.body.name} - Contacted Through Portfolio`,
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${
        req.body.phoneNumber
      }\nMessage: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        res.json({ Error: err });
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
      return res.json({
        message: emailMessage
      });
    });
    return res.end();
  });

  // Sitemap Generate
  let map = sitemap({ generate: server });

  server
    .get("/sitemap.xml", (req, res) => {
      map.XMLtoWeb(res);
    })
    .get("/robots.txt", (req, res) => {
      map.TXTtoWeb(res);
    });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server is running on ${port}`);
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */

function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  //If we have a page in the cache, lets serve it
  if (ssrCache.has(key)) {
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }

  try {
    //If not lets render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
