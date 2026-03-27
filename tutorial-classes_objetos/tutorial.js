/*
1. OBJETOS EM JAVASCRIPT
*/

const aluno = {
  nome: "Carlos",
  idade: 20,
  curso: "Engenharia"
};

function Aluno(nome, idade, curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.falar = function () {
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`);
    };
}
novoAluno = new Aluno("Hugo", 45, "Farmácia");
novoAluno.falar();

console.log(aluno.nome);        // Ponto
console.log(aluno["nome"]);     // Colchetes

// Crie um objeto professor com as propriedades nome, disciplina, tempoDeExperiencia.

const professor = {
    nome: "Lucas",
    disciplina: "Informática",
    tempoDeExperiencia: "Dois anos"
}

function Professor(nome, disciplina, tempoDeExperiencia){
  this.nome = nome;
  this.disciplina = disciplina;
  this.tempoDeExperiencia = tempoDeExperiencia;
  this.saudacao = function(){
      console.log(
        `Olá, meu nome é ${this.nome}, sou professor de ${this.disciplina}, tenho ${this.tempoDeExperiencia} anos de experiência.` 
      );
      
  }
}
novoProfessor = new Professor("Hyago", "Nutrição", 8);
novoProfessor.saudacao();
/* 
2. ACESSO ÁS PROPRIEDADES
*/

// No seu objeto professor, acesse o valor da disciplina do objeto professor usando os dois métodos 
// e altere os valores de nome e tempo de experiência.

console.log(professor.nome)
console.log(professor.disciplina) // Acessando a propriedade usando notação com ponto;
console.log(professor["disciplina"]) // Usando notação com colchetes;
console.log(professor.tempoDeExperiencia)

professor.nome = "Marcos"; // Alterando o valor de nome;
console.log(professor.nome)
professor.tempoDeExperiencia = "Cinco anos"; // Alterando o valor de tempo de experiência;
console.log(professor.tempoDeExperiencia)

/*
3. PROPRIEDADES DINÂMICAS DOS OBJETOS
*/

// Adicione ao objeto professor a propriedade emSala com valor false e remova a propriedade 
// tempoDeExperiencia. Para visualizá-las com o console.log utilize uma condicional em conjunto 
// com o método hasOwnProperty()

professor.emSala = false; // Adicionando a propriedade emSala: false, ao objeto professor;
delete professor.tempoDeExperiencia; // Removendo a propriedade tempoDeExperiencia;

// O método hasOwnProperty() é um método nativo do JavaScript que verifica se uma propriedade 
// existe diretamente em um objeto. Ele retorna um valor Booleano (true ou false).
if (professor.hasOwnProperty("emSala")) {
    console.log("A propriedade 'emSala' existe!");
}

if (professor.hasOwnProperty("tempoDeExperiencia")) {
    console.log("A propriedade 'tempoDeExperiencia' existe!");
}

/*
4. DEFININDO OBJETOS
*/

const livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  exibirInfo() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
  }
};
function livro(titulo, autor, ano) {
  this.titulo = titulo;
  this.autor = autor;
  this.ano = ano;
  this.exibirInfo = function(){
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
  }
}

// Crie um objeto artigo com titulo, autor, ano e método exibirDados()

const artigo = {
  titulo: "A Hora da Estrela",
  autor: "Clarice Lispector", 
  ano: 1977,
  exibirDados(){
    console.log(`Título: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.ano}`);      
  }
};
artigo.exibirDados();

/*
5. ARRAYS DE OBJETOS
*/

// Crie um array contendo pelo menos 3 artigos diferentes.

const biblioteca = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937 },
  { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 }
];

/*
6. Percorrendo os arrays
*/

// Percorra o array de artigos para imprimir todas as informações

biblioteca.forEach(livro => {
  console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
});

for (let livro of biblioteca){
  console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
}

/*
7. Função construtora
*/
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  };
}

const joao = new Pessoa("João", 35);
joao.falar();

/*
8. Classes
*/

// Crie as classes para Professor, Livro e Artigo.

class Professor {
  constructor(nome, disciplina, tempoDeExperiencia){
    this.nome = nome;
    this.disciplina = disciplina;
    this.tempoDeExperiencia = tempoDeExperiencia;
  }
  saudacao (){
    console.log(
      `Olá, meu nome é ${this.nome}, sou professor de ${this.disciplina}, tenho ${this.tempoDeExperiencia} anos de experiência.` 
    );
  }
}

class Livro {
  constructor(titulo, autor, ano){
    this.titulo= titulo;
    this.autor= autor;
    this.ano= ano;
  }
  exibirInfo() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`);
  }
};

class Artigo {
  constructor(titulo, autor, ano){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
  exibirDados(){
    console.log(`Título: ${this.titulo} \nAutor: ${this.autor} \nAno: ${this.ano}`);      
  }
}

/*
9. Manipular Formulário
*/

// Crie múltiplos formulários para cadastrar professor, aluno, livro e artigo.
