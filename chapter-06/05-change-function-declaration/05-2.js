const inNewEngland = aCustomer => {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
}

export { inNewEngland }
