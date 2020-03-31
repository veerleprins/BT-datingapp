const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
require("dotenv").config();

// Database calling
// let yourSelf = 99999;
let db = null;
let usersCollection = null;

let url = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_URL + process.env.DB_END;
mongo.MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
        throw err;
    } else if (client) {
        console.log('Connected to database');
    }
    db = client.db(process.env.DB_NAME);
    usersCollection = db.collection("users");
});

// Routing
router.get('/', home) // Jordy
router.get('/register', register); // Rowan
router.post('/register', registerPosting) // Rowan
router.post('/login', login) // Rowan
router.get('/profile', profile) // Rowan
router.get('/currentUser', showUser) // Jordy
router.post('/match', match) // Jordy
router.get('/matchlist', matchList) // Jordy
router.get('/filter', filter) // Veerle
router.post('/', postFilter); // Veerle
router.get('/*', error) // Veerle

async function home(req, res, next) {
    try {
        res.render('index.ejs')
    } catch (err) {
        console.log(err)
    }
}

async function register(req, res, next) {
    // Rowan
    try {
        res.render('register.ejs')
    } catch (err) {
        console.log(err)
    }
}

async function registerPosting(req, res, next) {
    // Rowan
    try {} catch (err) {
        console.log(err)
    }
}

async function login(req, res, next) {
    // Rowan
    try {} catch (err) {
        console.log(err)
    }
}

async function profile(req, res, next) {
    // Rowan
    try {} catch (err) {
        console.log(err)
    }
}

async function showUser(req, res, next) {
    try {
        res.render('currentUser.ejs')
    } catch (err) {
        console.log(err)
    }
}

async function match(req, res, next) {
    try {
        res.render('match.ejs')
    } catch (err) {
        console.log(err)
    }
}

async function matchList(req, res, next) {
    try {
        res.render('matchlist.ejs')
    } catch (err) {
        console.log(err)
    }
}

async function filter(req, res, next) {
    // veerle
    try {
        console.log('Test');

    } catch (err) {
        console.log(err)
    }
}

async function postFilter(req, res, next) {
    // veerle
    try {

    } catch (err) {
        console.log(err)
    }
}

async function error(req, res, next) {
    try {
        res.render('404.ejs')
    } catch (err) {
        console.log(err)
    }
}

module.exports = router;

// seen
// firstName
// lastName
// DateOfBirth
// gender
// photo
// movies
// prefGender
// prefMovie
// likesYou
// match