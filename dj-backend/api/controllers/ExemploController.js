const Exemplo = require('../models/Exemplo');
/*
 * Neste exemplo, temos um controller que realiza operações básicas de CRUD em um modelo chamado ExemploModel.
 *  O método `LISTAR` retorna uma lista de todos os exemplos cadastrados no banco de dados,
 *  O método `GET` retorna um um exemplo existente,
 *  o método `CRIAR` cria um novo exemplo,
 *  o método `ATUALIZAR` atualiza um exemplo existente e
 *  o método `DELETAR` deleta um exemplo existente.
 * Os métodos são definidos como assíncronos, utilizando a palavra - chave async
 *  e o retorno dos métodos utiliza o método json do objeto res, retornando um objeto JavaScript que é
 *  serializado como um JSON.
 */
module.exports = {

    // LISTAR
    /**************************************************************************/
    list: async (req, res) => {
        // lista todos 'Exemplos'
        const exemplos = await Exemplo.findAll({
            //where: ,
            //attributes: ['id', 'nome'],
        });

        return res.json(exemplos);
    },
    getById: async (req, res) => {
        // lista um 'Exemplo' pelo id informado
        const { exemplo_id } = req.params;
        if (!exemplo_id) {
            return res.status(400).json({
                success: false,
                messages: "<exemplo_id> não informado",
                error: '<exemplo_id> not found'
            });
        }
        // busca e verifica se existe
        const exemplo = await Exemplo.findByPk(exemplo_id,{
            //attributes: ['id', 'nome'],
        });
        if (!exemplo) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um exemplo com o identificador informado",
                error: 'Exemplo not found'
            });
        }
        return res.json(exemplo);
    },
    // CRIAR
    /**************************************************************************/
    store: async (req, res) => {
        // Cria um Exemplo
        const {
            nome,
            descricao,
        } = req.body;

        // Verificando se falta algo:
        if (!nome || !descricao) {
            return res.status(400).json({
                success: false,
                messages: 'Falta informações!',
                expected: 'nome, descricao',
            });
        }

        // Criando exemplo no BD
        const exemplo = await Exemplo.create({ nome, descricao });
        return res.json({
            success: true,
            messages: "'Exemplo' criado com sucesso!",
            exemplo,
        });

    },
    // ATUALIZAR
    /**************************************************************************/
    update: async (req, res, next) => {
        const {
            exemplo_id, nome, descricao
        } = req.body

        if (!exemplo_id) {
            return res.status(400).json({
                success: false,
                message: "O identificador do exemplo não foi informado. " +
                "Por favor, forneça um valor válido para o campo 'exemplo_id'.",
                error: "<exemplo_id> não informado."
            });
        }

        //  busca e verificar se existe
        const exemplo = await Exemplo.findByPk(exemplo_id);
        if (!exemplo) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um exemplo com o identificador informado",
                error: 'Exemplo not found'
            });
        }
        // atualizando Exemplo com os valores informados
        return exemplo.update({ nome, descricao }).then(exemplo => {
            return res.json({
                success: true,
                messages: "'Exemplo' atualizado com sucesso!",
                exemplo,
            })
        }).catch(erro => {
            console.error(erro);
            next(erro);
            return res.status(500).json({
                success: false,
                messages: "Falha desconhecida ao atualizar 'Exemplo', verifique se foi atualizado",
                //error: erro //<<
            });
        });
    },
    // DELETAR
    /**************************************************************************/
    delete: async (req, res) => {
        const {
            exemplo_id
        } = req.params

        const exemplo = await Exemplo.findByPk(exemplo_id);
        if (!exemplo) {
            return res.status(404).json({
                success: false,
                messages: "Não foi encontrada um exemplo com o identificador informado",
                error: 'Exemplo not found'
            });
        }
        try {
            // destruindo 'Exemplo' no banco de dados
            res.json({
                success: true,
                messages: "'Exemplo' excluído com sucesso",
                retorno: exemplo.destroy()
            })

        } catch (erro) {
            // Falha ao destruir registro no banco de dados
            console.log("#-# Erro desconhecido ao tentar deletar 'Exemplo'")
            console.error(erro);
            res.status(400).json({
                success: false,
                messages: "Erro desconhecido ao tentar deletar 'Exemplo'",
                info: { exemplo }
            })
        }
        return res;
    },
};
