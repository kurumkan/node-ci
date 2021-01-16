const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    await next();
    if(req.method !== 'GET') {
        clearHash(req.user.id);
    }
};
