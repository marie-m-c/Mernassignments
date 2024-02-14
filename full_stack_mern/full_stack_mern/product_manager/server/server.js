const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('dotenv').config();
require('./config/mongoose.config');

const port = process.env.PORT;

require('./routes/user.routes')(app);
require('./routes/product.routes')(app);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
