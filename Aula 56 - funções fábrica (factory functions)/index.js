// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome,
        peso,
        altura,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        //Getter
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },

        fala(assunto) {
            return `${this.nomeCompleto} ${assunto}`;
        },

        medidas() {
            return `${this.nome} está pesando ${this.peso}kg e tem ${this.altura}m de altura`
        }
    };
}

const pessoa = criaPessoa('Renato', 'Balbinotti', 95, 1.85);

console.log(pessoa.nomeCompleto);
console.log(pessoa.fala('está falando sobre funções fábrica'));
console.log(pessoa.medidas())
console.log(pessoa.imc);
console.log();

pessoa.nomeCompleto = 'Renato dos Santos';
console.log(pessoa.nomeCompleto);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);