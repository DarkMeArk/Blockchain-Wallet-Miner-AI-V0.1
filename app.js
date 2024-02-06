const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Blockchain Wallet Miner listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World! This is the Blockchain Wallet Miner app.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
