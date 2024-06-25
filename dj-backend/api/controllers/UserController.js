const User = require('../models/User');

module.exports = {

    // LISTAR
    /**************************************************************************/
    list: async (req, res) => {
        // lista todos 'Users'
        const users = await User.findAll({
            //where: ,
            //attributes: ['id', 'nome'],
        });

        return res.json(users);
    },
    getById: async (req, res) => {
        // lista um 'User' pelo id informado
        const { user_id } = req.params;
        if (!user_id) {
            return res.status(400).json({
                success: false,
                messages: "<user_id> não informado",
                error: '<user_id> not found'
            });
        }
        //  busca e verificar se existe
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um user com o identificador informado",
                error: 'User not found'
            });
        }

        return res.json(user);
    },
    // CRIAR
    /**************************************************************************/
    store: async (req, res) => {
        // Cria um User
        const {
            username,
            password,
            nome,
            nascimento,
            email,
            whatsapp

        } = req.body;

        // Verificando se falta algo:
        if (!nome || !password) {
            return res.status(400).json({
                success: false,
                messages: 'Falta informações!',
                expected: 'nome, password',
            });
        }

        // Criando user no BD
        const user = await User.create({
            username, password, nome, nascimento, email, whatsapp
        });
        return res.json({
            success: true,
            messages: "'User' criado com sucesso!",
            user,
        });

    },
    // ATUALIZAR
    /**************************************************************************/
    update: async (req, res, next) => {
        const {
            user_id, username, password, nome, nascimento, email, whatsapp
        } = req.body

        if (!user_id) {
            return res.status(400).json({
                success: false,
                message: "O identificador do user não foi informado. " +
                    "Por favor, forneça um valor válido para o campo 'user_id'.",
                error: "<user_id> não informado."
            });
        }

        //  busca e verificar se existe
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um user com o identificador informado",
                error: 'User not found'
            });
        }
        // atualizando User com os valores informados
        return user.update({
            username, password, nome, nascimento, email, whatsapp
        }).then(user => {
            return res.json({
                success: true,
                messages: "'User' atualizado com sucesso!",
                user,
            })
        }).catch(erro => {
            console.error(erro);
            next(erro);
            return res.status(500).json({
                success: false,
                messages: "Falha desconhecida ao atualizar 'User', verifique se foi atualizado",
                //error: erro //<<
            });
        });
    },
    // DELETAR
    /**************************************************************************/
    delete: async (req, res) => {
        const {
            user_id
        } = req.params

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um user com o identificador informado",
                error: 'User not found'
            });
        }
        try {
            // destruindo 'User' no banco de dados
            res.json({
                success: true,
                messages: "'User' excluído com sucesso",
                retorno: user.destroy()
            })

        } catch (erro) {
            // Falha ao destruir registro no banco de dados
            console.log("#-# Erro desconhecido ao tentar deletar 'User'")
            console.error(erro);
            res.status(400).json({
                success: false,
                messages: "Erro desconhecido ao tentar deletar 'User'",
                info: { user }
            })
        }
        return res;
    },
};
