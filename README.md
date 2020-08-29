<p align="center"><img src="https://painel.avdesign.com.br/img/logo/login-title.png"></p>

# Products/Cart - Laravel/Vue.js
### Instalação do Laravel
````
$ cd laravel-products-cart
$ cd back-end
$ cp .env.example .env
$ php artisan key:generate
````
Adicione suas credenciais de banco de dados no arquivo `.env` e execute o camando: 
````
$ php artisan migrate
````
Iniciar o servidor de desenvolvimento em: `http://localhost:8000`
````
$ php artisan serve
````
Se você está executando a API do Laravel em um caminho de URL diferente da `http://127.0.0.1:8000`, então você precisa atualizar o caminho do URL no `src/apis/Api.js` do Vue.js app.

# Install Front-end Vue.js
```
$ cd front-end
$ npm install
$ npm run serve
```
Copilar para prudução
```
$ npm run build
```
Verificar erros no código
```
$ npm run lint
```