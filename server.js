const express=require('express');
const mangoose=require('mongoose');
const bodyParser=require('body-parser');
const items=require('./routes/api/items');

const app=express();
//bodyparser middleware
app.use(bodyParser.json());


//db config
const db=require('./config/keys').mongoURI;
mangoose
.connect(db)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));
//use routes
app.use('/api/items',items);
const port=process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
