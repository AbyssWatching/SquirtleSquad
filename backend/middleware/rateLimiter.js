const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
max: 3,
windowMS: 86000000, //24 Hours
message: 'no more pokeballs come back in 24 hours',
});

module.exports = limiter