const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json()); 
// Enables Cross-Origin Resource Sharing (CORS) for frontend access
app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Welcome to AlumSync!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});