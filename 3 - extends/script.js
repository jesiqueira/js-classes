/*
Subclasse -> É possível criarmos uma subclasse, está irá ter acesso aos métodos da classe á qual ela estendeu através do seu protótipo
*/

class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {

  constructor(rodas, combustivel, capacete){
    super(rodas, combustivel)
    this.capacete = capacete
  }
  acelerar() {
    console.log("Acelerando muito!!");
  }

  empinar() {
    console.log("Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, 'Gasolina', true);
honda.acelerar();
honda.empinar();
