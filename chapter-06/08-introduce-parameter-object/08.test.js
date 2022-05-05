import { readingsOutsideRange } from "./08"

describe("08-introduce-parameter-object", () => {
  it("readingsOutsideRange", () => {
    const station = {
      name: 'ZB1',
      readings: [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 53, time: '2016-11-10 09:20' },
        { temp: 58, time: '2016-11-10 09:30' },
        { temp: 53, time: '2016-11-10 09:40' },
        { temp: 51, time: '2016-11-10 09:50' },
      ],
    }

    const operatingPlan = {
      temperatureFloor: 50,
      temperatureCeiling: 56,
    }

    const result = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
    expect(result).toEqual([{ temp: 47, time: '2016-11-10 09:10' }, { temp: 58, time: '2016-11-10 09:30' }])
  })
})