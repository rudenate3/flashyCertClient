export const getFormInputs = (form) => {
  const inputs = form.querySelectorAll('input')
  const data = {}
  inputs.forEach((input) => {
    data[input.id] = input.value
  })
  return data
}