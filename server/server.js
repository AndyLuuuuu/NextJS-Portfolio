const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const WebPortfolioSchema = require("./schema/WebPortfolioSchema");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//DB Config
const db = require("./config/keys").mongoURI;

app.prepare().then(() => {
  const server = express();
  // Connect to MongoDB
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

  const NewWebProject = new WebPortfolioItem({
    ProjectImageURL:
      "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/philosophy-free-seo-friendly-website-templates.jpg",
    ProjectTitle: "Philosophy",
    ProjectText: `An vel quis vide dissentiet, his omnium laoreet comprehensam an. Te vim nonumy efficiendi. Quidam appellantur has id, no mel nostro intellegat.
  `,
    ProjectLink: "https://jose.mulinohouse.co/website-free-template/",
    ProjectGithub: "https://www.github.com"
  });

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.get("/api/webportfolio", (req, res) => {
    WebPortfolioItem.find({}, (err, items) => {
      if (err) {
        console.log(err);
      } else res.send(items);
    });
  });

  server.get("/api/webportfolio/new", (req, res) => {
    NewWebProject.save(function(err, NewWebProject) {
      if (err) return console.log(err);
      console.log(NewWebProject);
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server is running on ${port}`);
  });
});
