const cliente = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com'
};

console.log(cliente);
console.log(`o nome do cliente é ${cliente.nome}`);

function exibeInfoCliente(objCliente, infoCliente) {
  return objCliente[infoCliente];
}

console.log(exibeInfoCliente(cliente, 'nome'));
console.log(exibeInfoCliente(cliente, 'email'));

console.log('dados cliente');
console.log(cliente['nome']);
console.log(cliente['email']);

// propriedade não existe no objeto?
console.log(cliente.pet);
console.log(cliente['pet']);