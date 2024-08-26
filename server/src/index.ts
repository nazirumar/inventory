// src/index.js
import { Request, Response, NextFunction } from 'express';
import dashboardRoutes from './routers/dashboardRoutes'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// Routes
app.use('/dashboard', dashboardRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});