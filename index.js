import express from 'express'
import cors from 'cors'
import cursoRouter from './Routes/rotaCurso.js'

const hostname = '0.0.0.0'
const porta = 4000

const app = express()

//configurar o servidor para a política cors
app.use(cors({
  origin: '*'
}))

app.use(express.json())

app.use("/curso", cursoRouter)

app.listen(porta, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${porta}/`)
})