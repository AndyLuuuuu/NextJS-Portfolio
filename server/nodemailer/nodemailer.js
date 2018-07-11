const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "andylu.nodemailer@gmail.com",
    clientId:
      "839148377771-fapb63ukdlen5fu19qemgmgraevhr9s9.apps.googleusercontent.com",
    clientSecret: "6ZRAhuhBDIAo2SLddT4X9Ft-",
    refreshToken: "1/cKmS0je0thIxY3eA5lSAGGHhSi5HD61F8qSDoCoS8yw",
    accessToken:
      "ya29.Glv0BYocDfGK3uvwtk3w8fdiQ1fhzww68yrGoEb6-TMvOWW-wx-aZXdtZxOEpinWLre-1cCBrx5KnQ3v6ZkV1jdPwB_pNYNT-gb10FKRA0KIsSGXcz0L5-GnPst0",
    expires: 1484314697598
  }
});

module.exports = transporter;
