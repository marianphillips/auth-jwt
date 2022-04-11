const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secretOrPrivateKey) {
   return jwt.sign(payload, secretOrPrivateKey)
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secretOrPrivateKey, time) {
    return jwt.sign(payload, secretOrPrivateKey, { expiresIn: time })
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(expectedToken, secretOrPrivateKey) {
    try {
        return jwt.verify(expectedToken, secretOrPrivateKey)
      } catch(err) {
        if(err) return false
      }

}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
