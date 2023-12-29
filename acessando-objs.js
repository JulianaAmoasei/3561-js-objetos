const cliente = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com'
};

console.log(cliente);

console.log(`o nome do cliente é ${cliente.nome}`);

console.log(`os três primeiros números do CPF são ${cliente.cpf.substring(0, 3)}`);