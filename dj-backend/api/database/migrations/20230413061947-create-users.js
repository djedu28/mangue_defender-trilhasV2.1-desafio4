'use strict';
/*
MOOK = {
    up:(queryInterface, Sequelize) => true,
    down: (queryInterface, Sequelize) => true,
*/

/* quando copiar do model
substituir
allowNull: true,     <==     require: false,
allowNull: false,    <==     require: true,

Sequelize <== DataTypes */


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {

            // id do usuário
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            // para login
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                select: false,
            },

            // informações pessoais
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nascimento: {
                //aaaa-mm-dd
                type: Sequelize.STRING,
                allowNull: true,
            },
            // informações de contato
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                //colocar-pra-letra-minuscula
            },
            whatsapp: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            /* --- Referências --- */

            /* --- uso interno ---*/
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                select: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                select: false,
            }
        });
    },

    down: (queryInterface, /* Sequelize */) => {
        return queryInterface.dropTable('users');
    }
};
