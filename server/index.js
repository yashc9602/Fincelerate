const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');
const profileRouter = require('./routes/profile.route.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

const corsOptions = {
  origin: 'https://fincelerate-1.onrender.com/', // Replace with your frontend URL
  optionsSuccessStatus: 200,
};

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);
app.use('/server', profileRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('DB connection error:', err);
  });

// Start the Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
