const connection = require("../database/connection")

module.exports = async () => {
    try {
        const query = "SELECT tbl_own.own_id, tbl_user.user_name AS CustomerName, tbl_item.item_name AS ItemName FROM tbl_own INNER JOIN tbl_user ON tbl_own.user_id = tbl_user.user_id INNER JOIN tbl_item ON tbl_own.item_id = tbl_item.item_id WHERE own_id = ?"
        const [data] = await connection(query, 1);
        return data;
    } catch (err) {
        console.error("Error:", err);
        return [];
    }
}
