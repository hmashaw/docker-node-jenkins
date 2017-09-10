/**
 * 
 */

const mongoose = require('mongoose')

// Don't run any tests until mongo successfully connected
before(done => {
    mongoose.connect('mongodb://localhost/hvagNinja_test', {useMongoClient: true})
    
    mongoose.connection
        .once('open', () => { done() } )
        .on('error', (error) => console.warn('Warning', error))
})


beforeEach(done => {
    // Interesting ES6 construct
    const { ninjas } = mongoose.connection.collections

    ninjas.drop()
        // Index will be dropped so needs to be recreated
        .then(() => { ninjas.createIndex({ 'geometry.coordinates': '2dsphere' }) })

        .then(() => done())

        // The first time the test is run, there is no collection to drop
        /**
         * REVISIT: Idea was catch here with done followed by test execution.
         * However - Get "TypeError: Cannot read property 'drop' of undefined"
         * Makes sense! ninjas not defined so no call to drop
         */
        .catch(() => done())
        
        // Ready to run the next text
})


