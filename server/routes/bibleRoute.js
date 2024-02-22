const router = require("express").Router();
const Bible = require("../models/Bible");

router.post("/add", async (req, res, next) => {
  try {
    const data = req.body;
    const bible = await Bible.create({ ...data });
    if (bible) {
      res.status(201).json(`version ${data.version.name} has been created`);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const bible = await Bible.find().lean();
    if (bible) {
      res.status(200).json(bible);
    } else {
      res.status(400).json({ message: "server couldn't retrieve bible" });
    }
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBook = await Bible.find().lean();
    const version = newBook[id];
    if (version) {
      console.log(version)
      res.status(200).json(version);
    } else {
      res.status(400).json({ message: "something's wrong" });
    }
  } catch (err) {
    next(err);
  }
});


router.post("/names", async (req, res, next) => {
  try {
    const { version, book } = req.body;
    const bible = await Bible.find().lean();
    const result = {
      version: bible[version].abbr,
      book: bible[version].books[book],
    };
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/chapter", async (req, res, next) => {
  try {
    const { book, chapter, version } = req.body;
    const bible = await Bible.find().lean();

    const chapt = bible[version].books[book].chapters[chapter];
    if (chapt) {
      
      res.status(200).json(chapt);
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (err) {
    next(err);
  }
});
router.post("/chapterList", async (req, res, next) => {
  try {
    const {version, book, chapter} = req.body;
    const bible = await Bible.find().lean()
    const chapters = bible[version].books[book].chapters
    if (chapters) {
      res.status(200).json(chapters)
    } else {
      res.status(404).json({message: "not found"})
    }
  } catch (err) {
    next(err)
  }
})
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || "something's wrong" });
});

module.exports = router;
