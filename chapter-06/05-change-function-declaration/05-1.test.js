import { Book } from "./05-1"

describe("05-change-function-declaration", () => {
  it("Book", () => {

    const bookcafe = new Book()

    bookcafe.addReservation({ name: 'roy' })
    bookcafe.addReservation({ name: 'jay' })

    console.log(bookcafe.reservation)

    expect(bookcafe.reservation).toEqual([{ name: 'roy' }, { name: 'jay' }])
  })
})