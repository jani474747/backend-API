const express = require('express');
const router = express.Router();

router.get('/',()=>{
    console.log('get request')
})

module.exports = router