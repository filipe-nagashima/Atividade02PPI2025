import Curso from './Models/curso.js'

/*const curso = new Curso(
    "Curso de Marketing Digital", 
    "20/09/2025", 
    "4 meses", 
    "750,00", 
    "Curso completo que ensina estratégias para aumentar a presença online de empresas e profissionais. Aborda redes sociais, criação de anúncios pagos, SEO, marketing de conteúdo e análise de métricas.", 
    "80 horas", 
    "Mariana Costa", 
    "Especialista em Marketing Digital e Gestão de Tráfego", 
    "Intermediário", 
    20)
const professor = new Professor(
    "Carlos Silva", 
    "5 anos de experiência em Marketing Digital"
);

console.log(curso.toString());
console.log(professor.toString());*/

/*
//TESTE PARA GRAVAR
const curso = new Curso(
    3,
    "Curso de Marketing Digital", 
    "20/09/2025", 
    "4 meses", 
    "750,00", 
    "Curso completo que ensina estratégias para aumentar a presença online de empresas e profissionais. Aborda redes sociais, criação de anúncios pagos, SEO, marketing de conteúdo e análise de métricas.", 
    "80 horas", 
    "Mariana Costa", 
    "Especialista em Marketing Digital e Gestão de Tráfego", 
    "Intermediário", 
    20
);

await curso.gravar()

console.log('Curso gravado com sucesso!')
console.log('O curso recebeu o seguinte código: ' + curso.get_cod)*/



//TESTE PARA ALTERAR
/*const curso = new Curso(
    3,
    "Curso de Marketing Digital - Atualizado", 
    "20/09/2025", 
    "4 meses", 
    "550,00", 
    "Curso completo que ensina estratégias para aumentar a presença online de empresas e profissionais. Aborda redes sociais, criação de anúncios pagos, SEO, marketing de conteúdo e análise de métricas.", 
    "80 horas", 
    "Mariana Costa", 
    "Especialista em Marketing Digital e Gestão de Tráfego", 
    "Intermediário", 
    20
);
await curso.alterar(curso)
console.log('Curso alterado com sucesso!')
*/

/*
//TESTE PARA EXCLUIR
const curso = new Curso()
curso.set_cod = 2
await curso.excluir(curso)
console.log('Curso excluído com sucesso!')
*/

/*
//TESTE PARA CONSULTAR
const curso = new Curso()
const listaCursos = await curso.consultar()
for(const curso of listaCursos){
    console.log(curso.toString())
}
console.log('Cursos consultados com sucesso!')*/