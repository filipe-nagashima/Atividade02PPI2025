export default class Professor {
    //Atributos da classe Professor
    #nome
    #experiencia

    //Construtor
    constructor(nome = "", experiencia = "") {
        this.#nome = nome;
        this.#experiencia = experiencia;
    }

    //Getters e setters

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get experiencia() {
        return this.#experiencia;
    }

    set experiencia(experiencia) {
        this.#experiencia = experiencia;
    }

    toString() {
        return `
            Nome: ${this.#nome}\n
            Experiência: ${this.#experiencia}\n
        `
    }

    toJSON() {
        return {
            nome: this.#nome,
            experiencia: this.#experiencia
        }
    }
}