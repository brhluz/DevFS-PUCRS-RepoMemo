//01a_callback.js
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'textoQualquer.txt')

const onRead = function onRead (err, buf) {
    if(err)
        console.log("houve um erro", err.message)
    else
        console.log(buf.toString())
}

fs.readFile( filePath, onRead )