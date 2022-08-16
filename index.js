import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';

//Post route
import postRoutes from './routes/posts.js'

const app=express();

//if /posts take to posts route
app.use("/posts",postRoutes);

//main route /
app.get('/',(req,res)=>{
    res.send('hi')
})

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());


const CONNECTION_URL='mongodb+srv://Micheci:Micheci12!@cluster0.6tapr9t.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify',false);