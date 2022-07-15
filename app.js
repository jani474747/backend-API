const express = require('express');
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const BrandName = require('./model')
const app = express();

app.use(express.json())


mongoose.connect('mongodb+srv://janishaida:janishaida@cluster0.zzdm3.mongodb.net/?retryWrites=true&w=majority',
{   useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>
    console.log("Database Connected.....")
).catch(err => console.log(err))
// const con = mongoose.connection
// app.use('/posts',()=>{
//     console.log('this is a middlewear running')
// });

// con.on('open',()=>{
//     console.log('connected....')
// })


 app.get('/',(req,res)=>{
     res.send('we are in home')
 });

 app.get('/posts',(req,res)=>{
     res.send('we are in posts');
 });
 app.post('/addbrands',async (req,res)=>{ 
      const {brandname}  =req.body
    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName.find())

      }catch(err){
        console.log(err.message)
      }
 })

// const alienRouter = require('./routes/aliens')
// app.use('/aliens',alienRouter)

 app.listen(3000,()=>
    console.log('server started')
 );

 
 