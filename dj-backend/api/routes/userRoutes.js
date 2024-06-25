/** Aviso!
 * Não é seguro utilizar estas rotas em produção sem limitar o acesso
 */

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Definir rotas
router.get('/', UserController.list); // NÃO É SEGURO, pois esta rota exibe os dados de todos os usuarios
router.get('/:id', UserController.getById); // NÃO É SEGURO, pois esta rota exibe todos os dados de um usuario
router.post('/', UserController.store);
router.put('/:id', UserController.update); // NÃO É SEGURO, pois usuario deve ser criado por auth.register, esta rota deve ser usada apenas por ADM
router.delete('/:id', UserController.delete); // NÃO É SEGURO, pois usuario deve ser deletado apenas por ele mesmo ou um ADM

module.exports = router;
