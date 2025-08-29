import Curso from './Models/curso.js';
import Professor from './Models/professor.js';

const curso = new Curso(
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
console.log(professor.toString());