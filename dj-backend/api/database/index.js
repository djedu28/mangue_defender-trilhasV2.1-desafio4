/** // Arquivo principal de inicialização do banco de dados e seus modelos
 * Esse é um exemplo do código que pode ser utilizado no arquivo principal de inicialização
 *  do banco de dados e seus modelos. Ele carrega as configurações do banco de dados a partir
 *  do arquivo config/database.js, cria uma nova instância do connection e importa e inicializa
 *  os modelos necessários. Depois, as associações entre os modelos são feitas e a conexão é
 *  exportada para ser utilizada em outros módulos da aplicação.
 */

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// Cria uma nova instância do Sequelize com as configurações do arquivo config/database.js (nomeada de connection, para evitar confusão)
const connection = new Sequelize(dbConfig);

// Importa os modelos
const User = require('../models/User');
const Exemplo = require('../models/Exemplo');

// Inicializa os modelos
User.init(connection);
Exemplo.init(connection);

// Associa os modelos as relações
User.associate(connection.models);
Exemplo.associate(connection.models);

// teste de conexão
(async () => {
    try {
        await connection.authenticate();
        console.log('Conexão com o BD estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
})();

// Exporta a conexão
module.exports = connection;


// NOTAS!
// Lembre - de adicionar os modelos que você criar seguindo o "Exemplo":
// 1 - Importar a instancia do Modelo da pasa Models;
// 2 - Inicializar o Modelo com o método init();
// 3 - Além disso, você precisará adicionar as associações de cada modelo no método associate().

