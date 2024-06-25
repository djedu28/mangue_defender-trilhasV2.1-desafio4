const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

/* quando copiar da migration
subistituir
allowNull: true,     ==>     require: false,
allowNull: false,    ==>     require: true,

Sequelize ==> DataTypes */

class User extends Model {
    static init(sequelize) {
        super.init({
            /* ---  para login --- */
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'Nome de usuario já em uso, escolha outro'
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },

            /* --- informações pessoais --- */
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nascimento: {
                type: DataTypes.STRING,
                allowNull: false
            },
            /* --- informações de contato --- */
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: "E-mail já cadastrado"
                },
                validate: {
                    isEmail: {
                        msg: "O campo email precisa ser um e-mail valido"
                    }
                }
            },
            whatsapp: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, { sequelize })

        // Antes de salvar no banco de dados
        this.addHook('beforeSave', async client => {
            // criptografando a senha antes de salvar
            const atualizando = client.changed('password')
            if (atualizando) {
                client.password = await bcrypt.hash(client.password.trim(), 8);
            }
        })
        // Depois de salvar no banco de dados
        // this.addHook('afterFind', async client => {
        //    ...
        //    console.log('-->',client.estado)
        // })
    }
    static associate(/*models*/) {
        /* --- Refetencias --- */

    }
}

module.exports = User;
