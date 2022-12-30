const express = require("express")

const app = express()
const PORT = process.env.PORT|| 4322

app.use(express.static("public"))

app.use((req,res)=>{
    res.redirect('/')
})
app.listen(PORT,()=>{
    console.log("Server has started listening")
})

