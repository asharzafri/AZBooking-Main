let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
mongoose.connect("localhost:27017/blog");
const cors = require("cors");

router.use(cors());
let Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    name: String,
    slug: String,
    category: String,
    image: String,
    price: Number,
    rating: Number,
    stock: Number,
    description: String,
  },
  { collection: "products" }
);
let productModel = mongoose.model("productInfo", blogSchema);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get-data", function (req, res, next) {
  productModel
    .find()
    .lean()
    .exec()

    .then(function (doc) {
      res.json(doc);
    });
});
router.post("/insert-product", function (req, res, next) {
  var loc = {
    name: req.body.name,
    slug: req.body.slug,
    category: req.body.category,
    image: req.body.image,
    price: req.body.price,
    rating: req.body.rating,
    stock: req.body.stock,
    description: req.body.description,
  };
  console.log(loc);

  var data = new productModel(loc);

  data.save();

  res.json(loc);
  res.redirect("/");
});
router.post("/get-data/:_id", function (req, res) {
  var id = req.body._id;
  productModel.findByIdAndRemove(
    { id }.exec(),

    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted User : ", docs);
      }
    }
  );
  res.redirect("/");
});

module.exports = router;
