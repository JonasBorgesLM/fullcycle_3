<!-- DEV:      Jonas Borges L Moraes  -->
<!-- Email:    jonasleo92@yahoo.com.br -->
# Desafio

Criar um servidor de produção utilizando node, proxy reverso nginx e banco de dados mysql.

## Sistema

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada na aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
- <h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.