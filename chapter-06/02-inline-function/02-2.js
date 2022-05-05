const gatherCustomerData = (out, aCustomer) => {
  out.push(['name', aCustomer.name])
  out.push(['location', aCustomer.location])
}

const reportLines = aCustomer => {
  const lines = []
  
  gatherCustomerData(lines, aCustomer)
  return lines
}

export { reportLines }
