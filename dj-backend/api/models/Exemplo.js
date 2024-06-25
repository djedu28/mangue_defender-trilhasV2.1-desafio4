const { Model, DataTypes } = require('sequelize');

/* quando copiar da migration
subistituir
allowNull: true,     ==>     require: false,
allowNull: false,    ==>     require: true,

Sequelize ==> DataTypes */

class Exemplo extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, { sequelize })

        // Antes de salvar no banco de dados
        /*
         * this.addHook('beforeSave', async client => {
         *    ...
         *    console.log('-->',client)
         * })
         */

        // Depois de salvar no banco de dados
        /*
         * this.addHook('afterFind', async client => {
         *    ...
         *    console.log('-->',client)
         * })
         */
    }
    static associate(/*models*/) {
        /* --- Refetencias --- */

    }
}

module.exports = Exemplo;
