const express = require("express")
const router = express.Router()


const getAllData = require("../services/getData")

router.get("/test", async (req, res) => {
    const data = await getAllData()
    res.json({
        data: data,
        message: "test message"
    })
})



module.exports = router
