import Curso from "../Models/curso.js"
import conectar from "./conexao.js"

export default class cursoDAO{

    async gravar(curso){
        if (curso instanceof Curso){
            const conexao = await conectar()
            const sql = "INSERT INTO curso(curso_cod, curso_nome, curso_dt_ini, curso_duracao, curso_valor, curso_descricao, curso_carga_hora, curso_instrutor, curso_experiencia, curso_nivel, curso_vagas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            const parametros = [
                curso.get_cod,
                curso.get_nome,
                curso.get_dt_ini,
                curso.get_duracao,
                curso.get_valor,
                curso.get_descricao,
                curso.get_carga_horaria,
                curso.get_instrutor,
                curso.get_experiencia,
                curso.get_nivel,
                curso.get_num_vagas
            ]

            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }

    async alterar(curso){
        if (curso instanceof Curso){
            const conexao = await conectar()
            const sql = "UPDATE curso SET curso_nome = ?, curso_dt_ini = ?, curso_duracao = ?, curso_valor = ?, curso_descricao = ?, curso_carga_hora = ?, curso_instrutor = ?, curso_experiencia = ?, curso_nivel = ?, curso_vagas = ? WHERE curso_cod = ?"
            const parametros = [
                curso.get_nome,
                curso.get_dt_ini,
                curso.get_duracao,
                curso.get_valor,
                curso.get_descricao,
                curso.get_carga_horaria,
                curso.get_instrutor,
                curso.get_experiencia,
                curso.get_nivel,
                curso.get_num_vagas,
                curso.get_cod
            ]

            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }

    async excluir(curso){
        if (curso instanceof Curso){
            const conexao = await conectar()
            const sql = "DELETE FROM curso WHERE curso_cod = ?"
            const parametros = [curso.get_cod]

            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }

    async consultar(){
        const conexao = await conectar()
        const sql = "SELECT * FROM curso ORDER BY curso_nome"
        const [registros] = await conexao.query(sql)
        await conexao.release()

        let listaCursos = []
        for (const registro of registros) {

            const curso = new Curso(registro.curso_cod,
                                    registro.curso_nome, 
                                    registro.curso_dt_ini, 
                                    registro.curso_duracao, 
                                    registro.curso_valor, 
                                    registro.curso_descricao, 
                                    registro.curso_carga_hora, 
                                    registro.curso_instrutor,
                                    registro.curso_experiencia,
                                    registro.curso_nivel, 
                                    registro.curso_vagas
                                    )
            listaCursos.push(curso)
        }

        return listaCursos
    }
}