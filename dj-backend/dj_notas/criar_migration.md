# Como fazer uma migração utilizando o Sequelize

O Sequelize é uma biblioteca ORM para Node.js que permite a manipulação de bancos de dados relacionais de forma simplificada. Uma das funcionalidades mais importantes do Sequelize é a possibilidade de criar e aplicar migrações de forma simples e organizada. Neste tutorial, vamos aprender como criar e aplicar migrações utilizando o Sequelize.

## Criando uma migração

Para criar uma migração com o `Sequelize`, utilizamos o comando `sequelize migration:generate`. Esse comando cria um arquivo na pasta `api/database/migrations`, com um nome que indica a data e hora da criação da migração e um nome escolhido por você.

``` bash
yarn sequelize migration:generate --name create-user

```

## Editando a migração

Ao executar o comando acima, um arquivo será gerado na pasta `api/database/migrations`. Esse arquivo contém um modelo padrão para a criação da migração. No exemplo abaixo, vamos criar uma tabela de usuários com os campos `id`, `nome`, `email` e `senha`:

```javascript
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            senha: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
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

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('user');
    }
};

```

A função `up` é responsável por realizar a migração, ou seja, criar a tabela de usuários. A função `down`, por sua vez, é responsável por desfazer a migração, ou seja, excluir a tabela de usuários.

## Executando a migração

Para aplicar a migração no banco de dados, utilizamos o comando `sequelize db:migrate`. Esse comando executa todas as migrações que ainda não foram aplicadas no banco de dados.

``` bash
yarn sequelize db:migrate

```

## Desfazendo uma migração

Para desfazer a última migração aplicada no banco de dados, utilizamos o comando `sequelize db:migrate:undo`.

``` bash
yarn sequelize db:migrate:undo
```

## Verificando o status das migrações

Para verificar o status das migrações, ou seja, quais migrações já foram aplicadas e quais ainda não foram, utilizamos o comando `sequelize db:migrate:status`.

``` bash
yarn sequelize db:migrate:status
```

## Conclusão

As migrações são uma forma organizada e segura de manipular a estrutura do banco de dados. Utilizando o Sequelize, a criação e execução de migrações se torna mais simples e eficiente. Com os comandos e dicas apresentados neste guia, você poderá criar e executar migrações de forma tranquila e segura em seus projetos utilizando o Sequelize.

É importante lembrar que a criação de migrações deve ser feita com cuidado, já que qualquer alteração pode impactar em outros trechos do código que dependam da estrutura do banco de dados. Portanto, é fundamental testar as migrações em um ambiente de desenvolvimento antes de aplicá-las em produção.

Além disso, é recomendável seguir algumas práticas de padronização na criação de migrações, como utilizar nomes descritivos para os arquivos e seguir uma ordem cronológica na numeração dos mesmos. Com essas boas práticas, fica mais fácil manter um histórico claro e organizado das alterações realizadas no banco de dados.

## RESUMO
>
> ### 1. Cria uma nova migração
>
> ``` bash
> yarn sequelize migration:generate
> ```
>
> ### 2. Modifique o arquivo gerado dentro da pasta `api\database\migrations`
>
> ...
>
> ### 3. Executa as migrações
>
> ``` bash
> yarn sequelize db:migrate
> ```
>
> ### 4. Verificar o status das migrações
>
> ``` bash
> yarn sequelize db:migrate:status
> ```
>
> ### <!> Desfazer a última migração > executada
>
> ``` bash
> yarn sequelize db:migrate:undo
> ```
>
## Sugestões de padronização

- Nomear a migração em inglês,
- Utilizar nome com o padrão camelCase ou **kebab-case**, defina um dos padrões para o projeto;
- O nome da migração deve descrever o que está sendo feito naquela alteração do banco de dados;
- Sempre incluir os métodos up e down na migração, para garantir que as alterações possam ser executadas e revertidas;
- Seguir um padrão de nomenclatura para os campos, tabelas e relacionamentos, utilizando o mesmo padrão em todas as migrações;
- Utilizar a convenção de nomenclatura do Sequelize para as tabelas (plural, snake_case);
- Utilizar as migrations para realizar todas as alterações na estrutura do banco de dados, evitando a necessidade de intervenções manuais.
