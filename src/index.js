const express = require('express');
const connect = require('./configs/db');
const app = express();

const authorCrud = require('./controller/author.crud')
const sectionCrud = require('./controller/section.crud')
const bookCrug = require('./controller/book.crud')

app.use(express.json())

app.use('/section',sectionCrud);
app.use('/author',authorCrud)
app.use('/book',bookCrug)





// -------------------------------------------connection------------------------------

app.listen(8520,async ()=>{
    try{
        console.log("Listening on port 8520")
        await connect();
    }catch(err){
        console.log(err.message)
    }
})