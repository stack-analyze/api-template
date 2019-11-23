const { Router } = require('express')
const router= Router()

const { createData, getData, getDatas ,deleteData } =require('../controllers/data.controller')

router.route('/')
    .post(createData)
    .get(getDatas)

router.route('/:id')
    .get(getData)
    .delete(deleteData)

module.exports= router;