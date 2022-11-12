const db = require('../db/mysql') 

function insertuser(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO user SET ?;`
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

 function listuser(req, res) {
    let selectQuery = `SELECT * FROM user`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
    
}

function updateuser(req, res) {
    let updateQuery = `UPDATE user SET ? WHERE id = ?`
    let data = [req.body, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deleteuser(req, res) {
    let deleteQuery = `DELETE FROM user WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertuser,
    listuser,
    updateuser,
    deleteuser
}