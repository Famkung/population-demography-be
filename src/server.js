import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'
import { loadCsvToCache } from './service/cache.service.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)


const startServer = async () => {
  await loadCsvToCache()
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  })
}

startServer()
