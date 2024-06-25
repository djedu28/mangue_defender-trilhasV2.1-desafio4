// exemploRoutes.js
/* Nesse arquivo, estamos definindo as rotas para lidar com exemplos
 * e as associando às funções correspondentes no `ExemploController.js`.
 * Aqui, usamos os métodos HTTP `GET`, `POST`, `PUT` e `DELETE` para as rotas
 * relacionadas a exemplos.Cada rota recebe uma função de manipulador que é
 * executada quando a rota é acessada.
 */

const express = require('express');
const router = express.Router();
const ExemploController = require('../controllers/ExemploController');

// Definir rotas
router.get('/', ExemploController.list);
router.get('/:exemplo_id', ExemploController.getById);
router.post('/', ExemploController.store);
router.put('/:exemplo_id', ExemploController.update);
router.delete('/:exemplo_id', ExemploController.delete);

module.exports = router;
