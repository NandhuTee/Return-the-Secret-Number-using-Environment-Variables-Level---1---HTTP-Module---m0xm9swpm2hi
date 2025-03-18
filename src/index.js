const app = require('./app');
const dotenv = require('dotenv');

dotenv.config(); // Ensure environment variables are loaded

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
