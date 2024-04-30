const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.json({urlencoded: true}))


app.get("/", async (req, res) => {
    console.log("test");
})


app.listen(port, () => {
    console.log("listening on port", port)
})
