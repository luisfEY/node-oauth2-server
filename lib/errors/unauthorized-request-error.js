'use strict';

/**
 * Module dependencies.
 */

const OAuthError = require('./oauth-error');
const util = require('util');

/**
 * Constructor.
 *
 * "If the request lacks any authentication information (e.g., the client
 * was unaware that authentication is necessary or attempted using an
 * unsupported authentication method), the resource server SHOULD NOT
 * include an error code or other error information."
 *
 * @see https://tools.ietf.org/html/rfc6750#section-3.1
 */

function UnauthorizedRequestError(message, properties) {
  properties = Object.assign({
    code: 401,
    name: 'unauthorized_request'
  }, properties);

  OAuthError.call(this, message, properties);
}

/**
 * Inherit prototype.
 */

util.inherits(UnauthorizedRequestError, OAuthError);

/**
 * Export constructor.
 */

module.exports = UnauthorizedRequestError;
