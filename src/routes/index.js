import express from 'express'
import Population from './population.route.js'

const route = express.Router()
route.use('/population', Population)

export default route