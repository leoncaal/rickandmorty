const { Router } = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
let favs = require('../utils/favs');
const router = Router();

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id', getCharDetail)

router.post('/fav', (req, res) => {
    favs.push({...req.body});
    res.status(200).json(favs);
})

router.get('/fav', (req, res) => {
    res.status(200).json(favs);
})

router.delete('/fav/:id', (req,res) => {
    const {id} = req.params;
    const del = favs.filter(f => f.id !== Number(id));
    favs = del;
    res.status(200).json(favs);
})

module.exports = router;
