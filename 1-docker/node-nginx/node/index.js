const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect(async function(err) {
    if (err) throw err;
    
    const sql = `INSERT INTO people(name) values('Jonas')`
    connection.query(sql)

    const sqlPeople = `SELECT name FROM people`
    connection.query(sqlPeople, function (err, result) {
        if (err) throw err;

        const peoplesHTML = result.map((people) => {
            return `<tr><td>${people.name}</td></tr></br>`;
        });
        
        app.get('/', (req, res) => {
            res.send(`<h1>Full Cycle</h1><table>${peoplesHTML.join('')}</table>`)
        })
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})