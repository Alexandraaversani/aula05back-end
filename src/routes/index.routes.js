import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, world!"})

});

routes.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, 2tds2!"})

});

routes.use("/emocoes", emocoesRoutes);

export default routes;