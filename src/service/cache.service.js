import fs from 'fs'
import csv from 'csv-parser'

let cache = []

export const loadCsvToCache = () => {
  const selectCountry = ['China','India','United States','Russia','Japan','Indonesia','Germany','Brazil','United Kingdom','Italy','Bangladesh','France']
  return new Promise((resolve, reject) => {
    const result = []
    fs.createReadStream('./src/utils/population-and-demography.csv')
      .pipe(csv())
      .on('data', (row) => {
        if(selectCountry.includes(row["Country name"])){
          result.push({
            country: row["Country name"],
            population: row["Population"],
            year: row["Year"]
          })
        }
      })
      .on('end', () => {
        cache = result
        console.log('CSV loaded into cache')
        resolve()
      })
      .on('error', reject)
  });
}

export const getCsvCache = () => {
  return cache 
}
