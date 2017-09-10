/**
 * 
 */

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

// Note - routes is a function
const routes = require('./routes/routes')

const app = express()

/**
 * mongoose's default promise library) is deprecated, plug in your own 
 * promise library instead: http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise


/**
 * If we are running tests, don't connect here.  Connection to test db
 * will be made from test_helper
 */
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/hvagNinja', {useMongoClient: true})
}


/**
 * body-parser will add a .body {property} to the incoming request
 * .json - for incoming requests, assume JSON and parse into an {object}
 * application/json
 * 
 * Must be before/above the call to routes
 */
app.use(bodyParser.json())

routes(app)

/**
 * set up middleware to act as error handler
 * @param {object} err Defined if previous middleware (routes) threw an error
 * @param {object} req The incoming request
 * @param {object} res The outgoing response
 * @param {function} next The next middleware in the chain
 */
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message })
})

module.exports = app

