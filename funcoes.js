const estudante = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com',
  telefones: ['551198745632', '551198745633'],
  media: 7.5,
  estaAprovada: function(mediaBase) {
    return this.media >= mediaBase ? true : false
  }
};

console.log(estudante.estaAprovada(7));