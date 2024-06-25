const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Define o formato do log
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}] ${message}`;
});

// Cria um logger personalizado que escreve os logs em um arquivo
const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        logFormat //format.json()
    ),
    defaultMeta: { service: 'my-app' },
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});

// Substitui a saída padrão (console.log, .debug e .error) pelo logger personalizado
console.log = (message) => {
    logger.info(message);
};
console.debug = (message) => {
    logger.debug(message);
};
console.error = (message) => {
    logger.error(message);
};

// Exemplo de uso
console.log('Logger Ativado'); // O log será gravado no console e no arquivo app.log

module.exports = logger;

/**
 * Uma maneira de implementar logging em seu projeto é usando uma biblioteca como o Winston.
 * Winston é uma biblioteca de registro de eventos com suporte para vários níveis de log,
 * como info, debug e error. Com o Winston, você pode gravar logs em vários formatos,
 * como JSON, CSV e texto simples. Você também pode enviar logs para vários destinos,
 * como um arquivo, console ou serviço de terceiros.
 *
 */
