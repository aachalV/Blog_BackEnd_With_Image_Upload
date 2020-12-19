const path = require("path");
//Multer setup
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(req);
    cb(null, path.join(__dirname, "..", "public", "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
//Handling the Express Server
var upload = multer({ storage: storage });

module.exports.upload = upload;
