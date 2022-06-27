const express = require('express')
const app = express()
const Converter = require('csv-converter-to-pdf-and-html')
const path = require('path')
const port = 4000

app.listen(port, () => {
    console.log(`server is running in the port ${port}`)
})

const converter = new Converter()

const filePath = path.resolve("./customers.csv") 
const destinationPath = path.resolve("./HTMLandPDF")

converter.HTMLAndPDFConverter(filePath, destinationPath)