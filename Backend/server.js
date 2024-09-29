const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ensure cors is imported
const { Pool } = require('pg');

// Initialize express app
const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Middleware to parse JSON data from requests

const pool = new Pool({
    user: 'postgres',               // Your PostgreSQL username
    host: 'localhost',              // Hostname (localhost if running locally)
    database: 'storage',            // Name of your database
    password: 'postgres',           // Your PostgreSQL password
    port: 5432,                     // Default PostgreSQL port
});

// Create table if it doesn't exist
const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS login (
            username VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
  
    await pool.query(query);
};

// Define a POST route for handling user registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Insert user data into the PostgreSQL database
        await pool.query(
            'INSERT INTO login (username, password) VALUES ($1, $2)',
            [username, password]
        );

        console.log('Registered User:', username);
        
        // Respond to the frontend
        res.json({
            message: 'Registered user successfully',
            data: { username },
        });
        
    } catch (error) {
        res.json({ message: 'User already registered, please login' });
    }
});

// Define a POST route for handling user login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT password FROM login WHERE username = $1',
            [username]
        );

        // Check if user exists
        if (result.rows.length === 0) {
            return res.json({ message: 'User does not exist' });
        }

        // Check if the password matches
        if (password === result.rows[0]['password']) {
            res.json({
                message: 'User login successful',
                username: { username },
            });
        } else {
            res.json({
                message: 'Incorrect Password'
            });
        }

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

// Start the backend server
app.listen(8000, async () => {
    console.log('Backend server is running on http://localhost:8000');
    await createTable();
});
