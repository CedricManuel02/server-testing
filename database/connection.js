const mysql = require("mysql2");
require("dotenv").config();

const dbConfig = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

const db = mysql.createPool(dbConfig);

// Remove the top-level connection callback

module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if (err) {
                console.error("Database error", err);
                reject(err);
            } else {
                console.log("Database Connected");
                sql.query(query, params, (err, results) => {
                    if (err) {
                        console.error("Query error", err);
                        reject(err);
                    } else {
                        resolve(results);
                    }
                    sql.release();
                });
            }
        });
    });
};
