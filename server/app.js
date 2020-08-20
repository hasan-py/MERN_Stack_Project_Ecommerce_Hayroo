const express = require('express');
const app = express();

// Import Router
const authRouter = require('./routes/auth');
const brandRouter = require('./routes/brands');
const categoryRouter = require('./routes/categories');
const attributeRouter = require('./routes/attributes');
const subCategoryRouter = require('./routes/subCategories');

// Import Auth middleware
const { loginCheck } = require('./middleware/auth')

// Database Connection
require('./config/db');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', authRouter)
app.use('/', brandRouter)
app.use('/', categoryRouter)
app.use('/', attributeRouter)
app.use('/', subCategoryRouter)

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
})