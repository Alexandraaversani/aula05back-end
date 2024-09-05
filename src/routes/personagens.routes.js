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
app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )

})