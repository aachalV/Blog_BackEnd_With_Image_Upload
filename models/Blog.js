const uniqid = require("uniqid");

class Blog {
  constructor(blogAuthor, blogHeader, blogContent, blogBannerImg) {
    this.id = uniqid();
    this.blogAuthor = blogAuthor;
    this.blogHeader = blogHeader;
    this.blogContent = blogContent;
    this.blogBannerImg = blogBannerImg;
  }
}
module.exports = Blog;
