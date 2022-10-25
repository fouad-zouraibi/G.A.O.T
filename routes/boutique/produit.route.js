var express = require('express');
var router = express.Router();

// Middleware
const authMiddle = require('../../middleware/auth.middleware');
const rolesMiddle = require('../../middleware/roles.middleware');
const {uploadProduit} = require('../../middleware/upload.middleware');

const produitController = require('../../controllers/boutique/produit.controller');

router.use(express.json());
router.use(express.urlencoded({extended: false}));




// ***************** Api Register for produit *****************
router.post('/add',uploadProduit.single('image'),(req, res) => {

  produitController.add(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api update for user *****************
router.put('/update/:id', (req, res) => {
  produitController.update(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api delete for user *****************
router.delete('/delete/:id', (req, res) => {
  produitController.delete(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


// ***************** Api get   by id  *****************
router.get('/get/:id', (req, res) => {
  produitController.get(req.params.id).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api get   by title  *****************
router.get('/getname/:titre', (req, res) => {
  produitController.getByName(req.params.titre).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// ***************** Api list users *****************
router.get('/list/:page?/:limit?', (req, res) => {
  produitController.getList(req).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});


module.exports = router;
