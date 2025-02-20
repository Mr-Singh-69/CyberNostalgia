const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 CyberNostalgia is running at http://localhost:${PORT}`);
});
