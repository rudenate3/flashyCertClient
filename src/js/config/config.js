const developmentUrl = 'http://localhost:3000'
const productionUrl = 'TODO'

const api =
  window.location.hostname === 'localhost' ? developmentUrl : productionUrl

export const Config = {
  api: api
}
