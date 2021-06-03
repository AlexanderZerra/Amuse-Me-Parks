const { Rollercoaster, Themepark } = require('../models/index')

const getAllRollercoaster = async (req, res) => {
  try {
    const rollercoasters = await Rollercoaster.find()
    return res.status(200).json({ rollercoasters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllThemeparks = async (req, res) => {
  try {
    const themeparks = await Themepark.find()
    return res.status(200).json({ themeparks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createRollercoaster = async (req, res) => {
  try {
    const rollercoaster = await new Rollercoaster(req.body)
    await rollercoaster.save()
    return res.status(201).json({
      rollercoaster
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createThemePark = async (req, res) => {
  try {
    const themePark = await new Themepark(req.body)
    await themePark.save()
    return res.status(201).json({
      themePark
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteRollercoaster = async (request, response) => {
  try {
    const { id } = request.params
    const deleted = await Rollercoaster.findByIdAndDelete(id)
    if (deleted) {
      return response.status(200).send('DELETED')
    }
    throw new Error('Coaster not found')
  } catch (error) {
    return response.status(500).send(error.message)
  }
}

module.exports = {
  getAllRollercoaster,
  getAllThemeparks,
  createRollercoaster,
  deleteRollercoaster,
  createThemePark
}
