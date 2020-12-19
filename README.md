# Blog_BackEnd_With_Image_Upload
This application extends the functionality of the blog backend express application by including image upload functionality and related links


  - This is express server application that serves blog data . 
  - This data is stored in a simple json file on the local machine
  - i.e Data store used is Json file
  - HTTP Methods are used for implementing the api endpoints
  > - get()
  > - post()
  > - delete()
## Features
- The application provides end points for the following operations
  1. Get all the blogs
  2. Get a specific blog corresponding to a blog id sent as a route parameter
  3. Add blog information for creating a new blog. The blog body will contain
      - Blog header
      - Blog content
      - Related links
      - Blog banner image
  4. Get blog using Query in url 
  5. Delete a specific blog corresponding to a blogId sent as a route parameter.
  
## Getting started
  1. Clone the repo
  2. Use "npm run start" command to start the server
  3. Test using **Postman**
  
#### The end points shall be tested using Postman using following requests
  
  > - data will be sent back as json objects
  
  1. Get all the blogs using following request
   >Get : (http://localhost:3000/blogList/blogs)

  2. Get a specific blog with a blogId sent as a route parameter following request
   >Get : (http://localhost:3000/blogList/blogs/2)
   >- here "2" is id of the blog
   
  3. To Add New Blog use following request
   >  Post : (http://localhost:3000/blogList/blogs)
   > - Click "Body"
   > - Choose form-data to enter the contents as mentioned ahead
  
  |   KEY             |VAlUE                        |DESCRIPTION                        |
  |----------------|-------------------------------|-----------------------------|
  |blogAuthor|Taniya            |            |
  |blogHeader          |Taniya's Blog Header           |          |
  |blogContent          |Taniya's Blog Content   ||
  |blog-image (Type:File)         |(upload an image here)   ||
  |relatedLinks          |2 (Id of blog present in Json file)||
  
   > - Make sure id entered as relatedLinks value be present in your json file , so that you can navigate to that blog through this link 
   >- Hit send and Check the Json file 
   
  4. To search blog using Query through url use (example) request
   > Get : (http://localhost:3000/blogList/blogs?blogAuthor=Alex&blogHeader=Alex's blog)
   
   > - here "?blogAuthor=Alex&blogHeader=Alex's blog" is a query
   > - this will return blog which has blogAuthor as "Alex" **and** blogHeader as "Alex's blog"
   > - **Regex** is used while implementing 
   > - so even if full name (value of property) is not entered it will still try to match the string and return the result
   > - here if you enter blogAuthor = Ale
   > - it will still return the blog with Author "Alex"
  
  5. To delete a specific blog corresponding to a blogId sent as a route parameter use request
  > Delete : (http://localhost:3000/blogList/blogs/3)
  >- here "3" is id of the blog
  

