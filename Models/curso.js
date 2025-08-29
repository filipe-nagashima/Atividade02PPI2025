export default class Curso {
    //Atributos da classe Curso

    #nome
    #dt_ini
    #duracao
    #valor
    #descricao
    #carga_horaria
    #instrutor
    #experiencia
    #nivel
    #num_vagas

    //Construtor
    constructor(nome = "", dt_ini = "", duracao = "", valor = "", descricao = "", carga_horaria = "", instrutor = "", experiencia = "", nivel = "", num_vagas = "") {
        this.#nome = nome;
        this.#dt_ini = dt_ini;
        this.#duracao = duracao;
        this.#valor = valor;
        this.#descricao = descricao;
        this.#carga_horaria = carga_horaria;
        this.#instrutor = instrutor;
        this.#experiencia = experiencia;
        this.#nivel = nivel;
        this.#num_vagas = num_vagas;
    }

    // Getters e setters

    get get_nome() {
        return this.#nome;
    }

    set set_nome(nome) {
        this.#nome = nome;
    }

    get get_dt_ini() {
        return this.#dt_ini;
    }

    set set_dt_ini(dt_ini) {
        this.#dt_ini = dt_ini;
    }

    get get_duracao() {
        return this.#duracao;
    }

    set set_duracao(duracao) {
        this.#duracao = duracao;
    }

    get get_valor() {
        return this.#valor;
    }

    set set_valor(valor) {
        this.#valor = valor;
    }

    get get_descricao() {
        return this.#descricao;
    }

    set set_descricao(descricao) {
        this.#descricao = descricao;
    }

    get get_carga_horaria() {
        return this.#carga_horaria;
    }

    set set_carga_horaria(carga_horaria) {
        this.#carga_horaria = carga_horaria;
    }

    get get_instrutor() {
        return this.#instrutor;
    }

    set set_instrutor(instrutor) {
        this.#instrutor = instrutor;
    }

    get get_experiencia() {
        return this.#experiencia;
    }

    set set_experiencia(experiencia) {
        this.#experiencia = experiencia;
    }

    get get_nivel() {
        return this.#nivel;
    }

    set set_nivel(nivel) {
        this.#nivel = nivel;
    }

    get get_num_vagas() {
        return this.#num_vagas;
    }

    set set_num_vagas(num_vagas) {
        this.#num_vagas = num_vagas;
    }

    toString(){
        return `
            Nome: ${this.#nome}\n
            Data de Início: ${this.#dt_ini}\n
            Duração: ${this.#duracao}\n
            Valor: R$${this.#valor}\n
            Descrição: ${this.#descricao}\n
            Carga Horária: ${this.#carga_horaria}\n
            Instrutor: ${this.#instrutor}\n
            Experiência: ${this.#experiencia}\n
            Nível: ${this.#nivel}\n
            Número de Vagas: ${this.#num_vagas}\n
        `
    }

    toJSON() {
        return {
            nome: this.#nome,
            dt_ini: this.#dt_ini,
            duracao: this.#duracao,
            valor: this.#valor,
            descricao: this.#descricao,
            carga_horaria: this.#carga_horaria,
            instrutor: this.#instrutor,
            experiencia: this.#experiencia,
            nivel: this.#nivel,
            num_vagas: this.#num_vagas
        }
    }   
}