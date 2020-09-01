const express = require('express');
const bodyParser = require('body-parser');
const dbProfessors = require('./professors');
const dbReviews = require('./reviews');
const app = express();
const port = 3000;