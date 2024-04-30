const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 3001;
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.json({urlencoded: true}))

const router = require("./router/router")
app.use("/api/v1", router)


app.listen(port, () => {
    console.log("listening on port", port)
})
