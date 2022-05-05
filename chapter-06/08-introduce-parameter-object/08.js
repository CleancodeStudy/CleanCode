const readingsOutsideRange = (station, min, max) => station.readings.filter(r => r.temp < min || r.temp > max)

export { readingsOutsideRange }
