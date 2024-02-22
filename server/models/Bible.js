const mongoose = require("mongoose");

const bibleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  abbr: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  books: [
    {
      name: {
        type: String,
        required: true,
      },
      abbr: {
        type: String,
        required: true,
      },
      chapters: [
        {
          number: {
            type: String,
            
          },
          text: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});
module.exports = mongoose.model("Bible", bibleSchema);
