# Erros comuns de retorno de uma API

* `400 Bad Request`: ocorre quando a requisição não pode ser processada devido a erros no formato da requisição.
* `401 Unauthorized`: ocorre quando a autenticação é necessária e falha ou não foi fornecida.
* `402 Payment Required`: reservado para uso futuro.
* `403 Forbidden`: ocorre quando o servidor entende a requisição, mas se recusa a processá-la devido a restrições no lado do cliente.
* `405 Method Not Allowed`: ocorre quando o método HTTP utilizado na requisição não é permitido para o recurso solicitado.
* `406 Not Acceptable`: ocorre quando o servidor não pode produzir uma resposta compatível com o tipo de conteúdo aceito pela requisição do cliente.
* `407 Proxy Authentication Required`: ocorre quando o servidor de proxy requer autenticação do cliente.
* `408 Request Timeout`: ocorre quando o tempo limite para a requisição foi atingido pelo servidor.
* `409 Conflict`: ocorre quando a requisição entra em conflito com o estado atual do servidor.
* `410 Gone`: ocorre quando o servidor não pode mais fornecer o recurso solicitado, que foi permanentemente removido.
* `411 Length Required`: ocorre quando o servidor requer que o tamanho da requisição seja especificado.
* `412 Precondition Failed`: ocorre quando uma ou mais condições prévias definidas na requisição foram avaliadas como falsas.
* `413 Payload Too Large`: ocorre quando o tamanho da requisição excede o limite permitido pelo servidor.
* `414 URI Too Long`: ocorre quando o tamanho da URI solicitada excede o limite permitido pelo servidor.
* `415 Unsupported Media Type`: ocorre quando o tipo de mídia da requisição não é suportado pelo servidor.
* `416 Range Not Satisfiable`: ocorre quando o servidor não pode satisfazer a faixa de bytes solicitada no cabeçalho da requisição.
* `417 Expectation Failed`: ocorre quando o servidor não pode atender às expectativas indicadas nos cabeçalhos da requisição.
* `418 I'm a teapot`: um erro em tom de brincadeira que indica que o servidor se recusa a preparar café porque é um bule de chá.
* `422 Unprocessable Entity`: ocorre quando a requisição é bem formada, mas não pode ser processada devido a erros semânticos.
* `423 Locked`: ocorre quando o recurso solicitado está bloqueado.
* `424 Failed Dependency`: ocorre quando a requisição falha devido a uma falha em uma requisição relacionada.
* `426 Upgrade Required`: ocorre quando o cliente deve fazer uma atualização para acessar o recurso solicitado.
* `429 Too Many Requests`: ocorre quando o usuário enviou muitas requisições em um determinado período de tempo.
* `500 Internal Server Error`: Erro interno do servidor. Tente novamente mais tarde.

## Detalhando os erros

### Erro HTTP 400 (Bad Request)

O erro HTTP 400 (Bad Request) indica que o servidor não pode ou não processará a solicitação devido a algo que é percebido como um erro do cliente, como sintaxe de solicitação incorreta, parâmetros ausentes ou inválidos, ou outras informações malformadas.

A seguir, estão alguns exemplos comuns de erros HTTP 400:

* Sintaxe de solicitação incorreta: isso pode ocorrer se a sintaxe da solicitação estiver incorreta ou se algum parâmetro estiver faltando ou em formato inválido.
* Tamanho da solicitação muito grande: isso pode acontecer se a solicitação for muito grande para ser processada pelo servidor.
* Recurso inexistente: ocorre quando o servidor não consegue encontrar o recurso solicitado pelo cliente.
* Parâmetros inválidos: isso pode ocorrer se um ou mais parâmetros fornecidos na solicitação forem inválidos ou não suportados.
* Autenticação ou autorização falha: quando a solicitação requer autenticação ou autorização e as informações fornecidas são inválidas ou ausentes.

Lembre-se de que esses são apenas exemplos comuns e que podem haver outros motivos pelos quais um erro HTTP 400 pode ocorrer.

### Erro HTTP 402 (Payment Required)

O erro HTTP 402 é o "Payment Required" e é um código de status de resposta que indica que a solicitação foi bem formada, mas o servidor se recusa a completá-la até que o cliente pague. Na maioria dos casos, o erro 402 é usado como um aviso de que uma assinatura de serviço é necessária antes de continuar a usar o recurso solicitado.

Esse erro geralmente é encontrado em sites que fornecem serviços pagos, como um site de assinatura, onde a conta do usuário está expirada ou os dados do cartão de crédito do usuário são inválidos. Nesses casos, a única solução é atualizar as informações de pagamento ou adquirir uma nova assinatura.

Caso esse erro apareça em um site que você não esperava, pode ser um erro do desenvolvedor ou um problema com o servidor, e nesse caso, a melhor solução é entrar em contato com o suporte técnico do site para obter ajuda.

### Erro HTTP 500 (Internal Server Error)

O erro HTTP 500 é um erro interno do servidor, também conhecido como Internal Server Error. Ele é retornado quando o servidor encontra algum tipo de erro que impede que a requisição seja concluída com sucesso. Esse erro pode ser causado por diversos motivos, como falha no banco de dados, erro de programação, falta de recursos do servidor, entre outros. Quando esse erro ocorre, é importante verificar os logs do servidor para identificar o problema e corrigi-lo o mais rápido possível.
