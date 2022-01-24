import jwt from 'jsonwebtoken'

export class JwtService {
  /**
   *
   * @param {object} payload
   * @param {string} secretKey
   * @param {{expiresIn : "12h"}} options 12h
   * @returns {string}
   */
  static generate(payload = {}, secretKey, options = {}) {
    options.expiresIn = options.expiresIn || '12h'
    const token = jwt.sign(payload, secretKey, options)
    return token
  }

  /**
   *
   * @param {string} token
   * @param {string} secretKey
   * @returns {*}
   */
  static verify(token, secretKey) {
    let verify
    try {
      verify = jwt.verify(token, secretKey)
      return verify
    } catch (error) {
      return false
    }
  }
}
