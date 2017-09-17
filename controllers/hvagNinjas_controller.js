/**
 * 
 */

module.exports = {

    /**
     * handles a GET request to /api
     * @param {object} req The incoming request
     * @param {object} res The outgoing response
     */
    greeting(req, res) {
        res.send({ message: 'Hello World!' })
    }
    
}

