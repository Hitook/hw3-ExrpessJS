var express = require('express');
var router = express.Router(); 
process.env.PGPORT = 5432 
const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:potatoes@database-hw3.c7ndfrbojbla.us-east-2.rds.amazonaws.com'

const pool = new Pool({
  connectionString,
})


//  const client = new Client({
//    connectionString,
// })
//  client.connect()

module.exports = pool;
