const { Pool, Client } = require('pg')
const connectionString = 'psql postgres://postgres:potatoes@database-hw3.c7ndfrbojbla.us-east-2.rds.amazonaws.com'
const pool = new Pool({
  connectionString,
})

const client = new Client({
  connectionString,
})

client.connect()


const version =  client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

client.query('Select * from person', (err, res) => {
  console.log(res.rows[0])
})

const query = {
  text: 'INSERT INTO users(name, email) VALUES($1, $2)',
  values: ['brianc', 'brian.m.carlson@gmail.com'],
}
client.query(query, (err, res) => {
  console.log(res.rows[0])
})

