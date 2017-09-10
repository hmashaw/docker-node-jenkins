/**
 * 
 */

const NinjaController = require('../controllers/hvagNinjas_controller')

module.exports = (app) => {

    /**
     * Note - we are not invoking .greeting w/ (), we are just passing the
     * reference to the function.  It will be called when get is requested
     * 
     * .greeting - a function that takes (request, response) and sends a
     * response
     */
    app.get('/api', NinjaController.greeting)

    /*
    app.get('/api/ninja', NinjaController.index)

    app.post('/api/ninja', NinjaController.create)

    app.put('/api/ninja/:id', NinjaController.update)

    app.delete('/api/ninja/:id', NinjaController.delete)
    */

}

