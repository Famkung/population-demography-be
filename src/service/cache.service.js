import fs from 'fs'
import csv from 'csv-parser'

let cache = []

export const loadCsvToCache = () => {
  return new Promise((resolve, reject) => {
    const result = []
    fs.createReadStream('./src/utils/population-and-demography.csv')
      .pipe(csv())
      .on('data', (row) => {
        result.push(row)
      })
      .on('end', () => {
        cache = result
        console.log('CSV loaded into cache');
        resolve()
      })
      .on('error', reject)
  });
}

export const getCsvCache = () => {
  return cache 
}
