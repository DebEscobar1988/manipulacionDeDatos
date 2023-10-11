const express = require('express');
const router = express.Router();
const {add,create,edit,update,destroy,list,recomended,detail, newMovies, deleteMovie} = require('../controllers/moviesController');
/* llega con /movies, que esta dispuesto en el app */

router.get('/', list);
router.get('/new', newMovies);
router.get('/recommended', recomended);
router.get('/detail/:id', detail);


//Rutas exigidas para la creación del CRUD
router.get('/add', add);
router.post('/create', create);
router.get('/edit/:id', edit);
router.put('/update/:id', update);
router.get('/delete/:id', deleteMovie);
router.delete('/delete/:id', destroy);  

module.exports = router;