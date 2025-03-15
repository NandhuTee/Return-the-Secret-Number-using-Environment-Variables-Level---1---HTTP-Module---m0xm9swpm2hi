const app = require('./app');
const dotenv = require('dotenv');

//dotenv.config();

//app.listen(3000, () => console.log('Server running......'));




const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

