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

const router = require("../server/router/router")
app.use("/api/v1", router)

app.listen(port, "0.0.0.0", () => {
    console.log("listening on port", port)
})
