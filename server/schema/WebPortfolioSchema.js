var mongoose = require("mongoose");

var WebPortfolioSchema = mongoose.Schema({
  ProjectImageURL: String,
  ProjectTitle: String,
  ProjectText: String,
  ProjectLink: String,
  ProjectGithub: String
});

module.exports = WebPortfolioSchema;
