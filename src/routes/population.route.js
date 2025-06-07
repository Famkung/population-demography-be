import express from 'express'
import { getDataController } from '../controller/population.controller.js'

const route = express.Router()
route.get('/get_date/:year', getDataController)

export default route

