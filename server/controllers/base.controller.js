/**
 * Get list request
 * @typedef ListRequest
 * @type {Object}
 * @property {ListRequestQuery} query
 */

/**
 * Get list request
 * @typedef ListRequestQuery
 * @type {Object}
 * @property {number} pageNumber - Page to start returning from, default is 1
 * @property {number} pageSize - Limit number of contacts to be returned, default is 10
 */
class BaseController {

  constructor () {
  }

  getLanguage (req) {
    return req.headers.language || 'en'
  }

  getDefaultListParams (req) {
    const language = this.getLanguage(req)
    const pageNumber = parseInt(req.query.pageNumber) || 1
    const pageSize = parseInt(req.query.pageSize) || 10

    return {language, pageNumber, pageSize}
  }

  filterParams (params, whitelist) {
    const filtered = {}
    for (const key in params) {
      if (whitelist.indexOf(key) > -1) {
        filtered[key] = params[key]
      }
    }
    return filtered
  }
}

module.exports = BaseController
