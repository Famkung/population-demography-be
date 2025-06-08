import { getCsvCache } from '../service/cache.service.js'
export const getDataController = async (req , res) => {
    try {
        const cache = getCsvCache()
        const year = req.params.year
        const data = cache.filter(item => item.year === year)
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            msg: 'Internal server error'
        })
    }
}