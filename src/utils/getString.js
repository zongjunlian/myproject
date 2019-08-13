const qs = require('qs')
const getString = (params) => {
  return qs.stringify(params)
}
export { getString }
