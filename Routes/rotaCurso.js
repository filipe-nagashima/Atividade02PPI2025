import {Router} from "express"
import CursoController from "../Controllers/cursoController.js"

const cursoRouter = Router()

const cursoCtrl = new CursoController()

cursoRouter.get("/", cursoCtrl.consultar)
.get("/:cod", cursoCtrl.consultar)
.post("/", cursoCtrl.gravar)
.put("/:cod", cursoCtrl.alterar)
.delete("/:cod", cursoCtrl.excluir)

export default cursoRouter