//Route handlers for blogs
const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");
const sendErrorMessage = require("../helpers/sendError");
const { timeStamp } = require("console");
const fileName = path.join(__dirname, "../data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));

//checkIfQuery
const checkIfQuery = (req, res, next) => {
  if (!req.query) {
    next();
  }
  let blog = blogs.filter((blog) => {
    return Object.keys(req.query).every((property) => {
      let reg = new RegExp(req.query[property], "i");
      console.log(reg.test(blog[property]));
      return reg.test(blog[property]);
    });
  });
  // let blog = blogs.filter((blog) => {
  //   return Object.keys(req.query).every((property) => {
  //     return blog[property] == req.query[property];
  //   });
  // });
  sendResponse(200, "Sucessful", blog, req, res);
};
//Get All Blogs
const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Sucessful", blogs, req, res);
};
//Check Id
const isIdValid = (req, res, next) => {
  let id = req.params.id;
  let idExists = blogs.some((blog) => {
    return blog.id == id;
  });
  if (!idExists) {
    return sendErrorMessage(
      new AppError(
        400,
        "Unsuccessful",
        "Request Body Invalid Input...Id doesn't exists"
      ),
      req,
      res
    );
  }
  next();
};
//Get Blog by Id
const getBlogById = (req, res, next) => {
  let id = req.params.id;
  let blog = blogs.find((blog) => {
    return blog.id == id;
  });
  sendResponse(200, "Successfull", blog, req, res);
};

//middleware
const verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["blogAuthor", "blogHeader", "blogContent"];
  let result = requiredProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    return sendErrorMessage(
      new AppError(400, "Unsuccessful", "request body Invalid Input"),
      req,
      res
    );
  } else {
    next();
  }
};
//create blog
const createBlog = (req, res, next) => {
  if (!req.file) {
    console.log("No file received");
  }
  // const Url = req.protocol + "://" + req.get("host");
  // const imagePath = "/uploads/" + req.file.filename;
  // imageUrl = Url + imagePath;

  // const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  // const relatedBlog = "/" + req.body.relatedLinks[0];
  // relatedLink = baseUrl + relatedBlog;

  let newBlog = new Blog(
    req.body.blogAuthor,
    req.body.blogHeader,
    req.body.blogContent,
    //imageUrl,
    req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename,
    //relatedLink
    req.protocol +
      "://" +
      req.get("host") +
      req.originalUrl +
      "/" +
      req.body.relatedLinks[0]
  );
  blogs.push(newBlog);
  fs.writeFile(fileName, JSON.stringify(blogs, null, 2), (err) => {
    if (err) {
      res.status(500).json({
        status: "Internal Err",
      });
      return err;
    }
    sendResponse(200, "Sucessfull", [newBlog], req, res);
  });
};
//Delete Blog
const deleteBlogById = (req, res, next) => {
  let id = req.params.id;
  let blogIndex = blogs.findIndex((blog) => blog.id == id);
  blogToBeDeleted = blogs[blogIndex];
  blogs.splice(blogIndex, 1);
  fs.writeFile(fileName, JSON.stringify(blogs, null, 2), (err) => {
    if (err) {
      sendErrorMessage(
        new AppError(
          500,
          "Internal Error",
          "Internal Error Occured..Please try again later"
        ),
        req,
        res
      );
    }
    sendResponse(200, "Sucessfully Deleted", blogToBeDeleted, req, res);
  });
};
module.exports.checkIfQuery = checkIfQuery;
module.exports.getAllBlogs = getAllBlogs;
module.exports.isIdValid = isIdValid;
module.exports.getBlogById = getBlogById;
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.createBlog = createBlog;
module.exports.deleteBlogById = deleteBlogById;
