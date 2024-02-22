const Bible = require("../models/Bible");

async function getVersions(req, res, next) {
  try {
    const versions = await Bible.find().select("abbr name _id").lean();
    if (versions) {
      res.status(200).json(versions);
    } else {
      res.stats(400).json("couldn't get versions");
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getVersions,
};
