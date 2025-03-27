// Import Express framework
import express from 'express';

// Create Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
