
//uses express package in file
const express = require('express')


//express app
const app = express()

//ROUTES
app.get('/', (req, res)=>{
    res.json({mssg: "mama we made it"})
})

//listen 4 requests @ port #
app.listen(8000, () => {
    console.log('listening on port 8000')
})