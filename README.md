# Desafio replicar layout

### O projeto esta publicado na URL para acesso rapido:
```
  https://desafio-cards-impar.netlify.app/
```
#
### Desafio:
- Desafio de replicar um layout proposto.
- Foi desenvolvido primeiramente pensando em 'mobile first', para que pudesse ficar responsivo quando fosse acessado pelo celular.
- Consumindo a api do [pokemon].
- Possibilidade de criar novos cards, sendo exibido junto com os cards do pokemon, podendo adicionar um titulo e uma imagem.
- Cada card criado sera salvo no local storage no browser, quando carregado novamente o navegador sera exibido outra imagem, um icone padrão como mostrado no layout base.
- Ainda não é possível editar/excluir o card criado.
- É possível deletar todos os cards criados nas configurações do browser.
  - Caso queira deletar os cards salvos, segue os passos:
    - Apertar F12
    - Ir na aba com a opção "Application"
    - No menu de canto esquerdo, selecionar "Local storage", e abrir na seta ao lado
    - Selecionar o site: https://desafio-cards-impar.netlify.app
    - Deletar a key [@chaves]

#
## Rodar localmente:

### Como instalar
- Clonar o repositório:
```
  https://github.com/FELIPEMENEGUELI/desafio-cards.git
```

- Acesse a pasta do projeto pelo cmd:
```
  cd desafio-cards
```

- Realizar a instalação das dependências:
```
  npm install ou npm i
```

- Executar o projeto:
```
  npm run dev
```