import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const personagens = [
    {
        id: 100,
        nome: "Totoro",
        vivo: true
    },

    {
        id: 101,
        nome: "Rapunzel",
        vivo: "true"
    },

    {
        id: 102,
        nome: "Blue",
        vivo: "true"
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, world!"})

})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, world!"})

})

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )

})

app.listen(serverPort, () => {
    console.log(`💖 Server started on http://localhost:${serverPort}`)
})