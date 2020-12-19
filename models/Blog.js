const uniqid = require("uniqid");

class Blog {
  constructor(
    blogAuthor,
    blogHeader,
    blogContent,
    blogBannerImg,
    relatedLinks
  ) {
    this.id = uniqid();
    this.blogAuthor = blogAuthor;
    this.blogHeader = blogHeader;
    this.blogContent = blogContent;
    this.blogBannerImg = blogBannerImg;
    this.relatedLinks = relatedLinks;
  }
}
module.exports = Blog;
