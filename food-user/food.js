const db = require('../db/mysql') 

function insertfood(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO food SET ?;`
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
    
}

function listfood(req, res) {
    let selectQuery = `SELECT * FROM food`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
    
}

function updatefood(req, res) {
    let updateQuery = `UPDATE food SET ? WHERE id = ?`
    let data = [req.body, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deletefood(req, res) {
    let deleteQuery = `DELETE FROM food WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertfood,
    listfood,
    updatefood,
    deletefood
}