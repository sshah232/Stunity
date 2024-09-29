const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Initialize express app
const app = express();

const pool = new Pool({
    user: 'postgres',               // Your PostgreSQL username
    host: 'localhost',              // Hostname (localhost if running locally)
    database: 'storage',            // Name of your database
    password: 'postgres',           // Your PostgreSQL password
    port: 5432,                     // Default PostgreSQL port
});

const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS login (
            username VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
  
    await pool.query(query);
};

// Middleware to parse JSON data from requests
app.use(bodyParser.json()); 

// Define a POST route for handling form submissions from the frontend
app.post('/register', async (req, res) => {
    const { name, password } = req.body;

    try {
        // Insert user data into the PostgreSQL database
        const result = await pool.query(
            'INSERT INTO login (username, password) VALUES ($1, $2)',
            [name, password]
        );

        console.log('Registered User:', name);
        
        // Respond to the frontend
        res.json({
            message: 'Registered user successfully',
            data: { name },
        });
        
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'User already registered, please login' });
    }
});

app.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT password FROM login WHERE username = $1',
            [name]
        );

        if (result.rows.length > 0 && password === result.rows[0]['password']) {
            res.json({
                message: 'User login successful',
                data: { name },
            });
        } else {
            res.status(401).json({
                message: 'Incorrect Password or User does not exist'
            });
        }

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'User does not exist' });
    }
});

// Start the backend server
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
    await createTable();
});
