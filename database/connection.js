const mysql = require("mysql");


const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "chatgpt"
}

const db = mysql.createPool(dbConfig);

module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if(err){
                console.error("Database error", err);
                reject(err);
            }
            else{
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