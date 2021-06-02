const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('weeeeeeeee'))
router.post('/rollercoaster', controllers.createRollercoaster)
router.get('/rollercoaster', controllers.getAllRollercoaster)
router.get('/themepark', controllers.getAllThemeparks)
router.delete('/rollercoaster/:id', controllers.deleteRollercoaster)

module.exports = router
