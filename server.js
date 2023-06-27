const express = require('express'),
app = express(),
port = 3011,
server = app.listen(port,()=>{console.log("you think you are so cool", port)})

app.use(express.static('public'))