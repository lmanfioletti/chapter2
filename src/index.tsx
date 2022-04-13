import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 700,
          createdAt: new Date('05/04/2022'),
        },
        {
          id: 2,
          title: 'Salario CI&T',
          type: 'deposity',
          category: 'Estágio',
          amount: 1250,
          createdAt: new Date('04/04/2022'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const newTransaction = JSON.parse(request.requestBody);//faz a conversão dos dados para JSON do request.body, que são os dados enviados no api.post
      return schema.create('transaction', newTransaction);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
