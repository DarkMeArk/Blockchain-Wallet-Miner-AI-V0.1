// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define your routes and middleware here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
