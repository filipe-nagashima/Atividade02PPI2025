import Curso from "../Models/curso.js"

export default class CursoController 
{

    //HTTP POST
    gravar(requisicao, resposta)
    {
        if(requisicao.method == 'POST' && requisicao.is("application/json"))
        {
            const dados = requisicao.body
            if(dados.nome && dados.dt_ini && dados.duracao && dados.valor && dados.descricao && dados.carga_horaria && dados.instrutor && dados.experiencia && dados.nivel && dados.num_vagas)
            {
                const curso = new Curso(0, dados.nome, dados.dt_ini, dados.duracao, dados.valor, dados.descricao, dados.carga_horaria, dados.instrutor, dados.experiencia, dados.nivel, dados.num_vagas)
                curso.gravar()
                .then(()=>
                    resposta.status(200).json(
                    {
                        status: true,
                        mensagem: "Curso cadastrado com sucesso!"
                    })
                )
                .catch((erro)=>
                    resposta.status(500).json(
                    {
                        status: false,
                        mensagem: "Erro ao cadastrar curso:" + erro.message
                    })
                )
            }
            else
            {
                resposta.status(400).json(
                {
                    status: false,
                    mensagem: "Informe todos os dados do curso(nome, data de início, duração, valor, descrição, carga horária, instrutor, experiência, nível e número de vagas)."
                })
            }
        }
        else
        {
            resposta.status(400).json(
            {
                status: false,
                "mensagem": "Requisição Inválida"
            })
        }
    }
    
    //HTTP PUT
    alterar(requisicao, resposta)
    {
        if((requisicao.method == 'PUT' || requisicao.method == 'PATCH') && requisicao.is("application/json"))
        {
            const dados = requisicao.body
            const cod = requisicao.params.cod

            if(cod && dados.nome && dados.dt_ini && dados.duracao && dados.valor && dados.descricao && dados.carga_horaria && dados.instrutor && dados.experiencia && dados.nivel && dados.num_vagas)
            {
                const curso = new Curso(cod, dados.nome, dados.dt_ini, dados.duracao, dados.valor, dados.descricao, dados.carga_horaria, dados.instrutor, dados.experiencia, dados.nivel, dados.num_vagas)
                curso.alterar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Curso alterado com sucesso!"
                    })
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao alterar curso:" + erro.message
                        })
                    })
            }
            else
            {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do curso(nome, data de início, duração, valor, descrição, carga horária, instrutor, experiência, nível e número de vagas). O código do curso deve ser informado na URL."
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
            
        
    }
        

    //HTTP DELETE
    excluir(requisicao, resposta)
    {
        if(requisicao.method == "DELETE")
        {
            const cod = requisicao.params.cod
            if(cod)
            {
                const curso = new Curso()
                curso.consultarCodigo(cod).then((listaCursos) =>
                {
                    const curso = listaCursos[0]
                    if (curso)
                    {
                        curso.excluir()
                        .then(() => {
                            resposta.status(200).json({
                                status: true,
                                mensagem: "Curso excluído com sucesso!"
                            })
                        })
                        .catch((erro) => {
                                resposta.status(500).json({
                                    status: false,
                                    mensagem: "Erro ao excluir o curso: " + erro.message
                                })
                            })
                    }
                    else
                    {
                        resposta.status(404).json({
                            status: false,
                            mensagem: "Curso não encontrado"
                        })
                    }
                })
                .catch((erro) => 
                {
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar o curso para exclusão: " + erro.message
                    })
                })
            }
            else
            {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe o código do curso"
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
    }

    //HTTP GET
    consultar(requisicao, resposta)
    {
        if(requisicao.method == "GET"){
            const cod = requisicao.params.cod
            const curso = new Curso()
            if(cod)
            {
                curso.consultarCodigo(cod)
                .then((listaCursos)=>{
                    if(listaCursos.length > 0){
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Curso consultado com sucesso!",
                            cursos: listaCursos
                        })
                    }
                    else
                    {
                        resposta.status(404).json({
                            status: false,
                            mensagem: "Curso não encontrado"
                        })
                    }
                })
                .catch((erro)=>{
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar curso: " + erro.message
                    })
                })
            }
            else
            {
                curso.consultar()
                .then((listaCursos)=>{
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Curso consultado com sucesso!",
                        cursos: listaCursos
                    })
                })
                .catch((erro)=>{
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar cursos: " + erro.message
                    })
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
    }
}