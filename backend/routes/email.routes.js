var express = require('express');
var router = express.Router();
const { sendContactRequest } = require('../Controllers/email.controller');

router.get('/send/contactrequest', sendContactRequest )

module.exports = router;