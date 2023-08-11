const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const Questions_Router = require("./Routes/Questions")
const Notes_Router = require("./Routes/Notes")

app.use(cors({
    origin:"*"
}))

app.use(bodyParser.urlencoded({extended:true}))

app.use("/questions",Questions_Router)
app.use("/notes",Notes_Router)

app.use((req, res)=>{
    res.status(404).send("404 error")
})

app.listen(8080, ()=>console.log("*** Server successfully running on PORT 8080 ***"))