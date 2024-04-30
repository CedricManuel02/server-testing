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

const getData = require("./services/getData");

app.get("/test", async (req, res) => {
    const data = await getData()
    res.json({
        data: data,
        message: "test message"
    })
})


app.listen(port, () => {
    console.log("listening on port", port)
})
