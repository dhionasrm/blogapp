if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://root:@dmtiwgvd9@cluster0.yluck.mongodb.net/test"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}