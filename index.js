const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql");


const port = 3001;
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.json({urlencoded: true}))

const dbConfig = {
    host: "monorail.proxy.rlwy.net",
    user: "root",
    password: "CtXLHRlAfPkULQwnijJPbIPabukIiCfW",
    database: "railway"
}

const db = mysql.createPool(dbConfig);

db.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected successfully");
        connection.release();
    }
});


module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if(err){
                console.error("Database error", err);
                reject(err);
            }
            else{
                console.log("Database Connected");
                sql.query(query, params, (err, results) => {
                    if(err){
                        console.error("Query error", err);
                        reject(err);
                    }
                    else{
                        resolve(results, params);
                    }
                    sql.release();
                })
            }
        })
    })
}


app.listen(port, () => {
    console.log("listening on port", port)
})
