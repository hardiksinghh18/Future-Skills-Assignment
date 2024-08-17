const mongoose=require('mongoose');
require('dotenv').config();
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mern-blog.c5mouhd.mongodb.net/future-skills-data?retryWrites=true&w=majority&appName=mern-blog`;

mongoose.connect(url)
.then(()=>console.log('Connected to cloud database successfully'))
.catch((err)=>{
    console.log(err)
})
