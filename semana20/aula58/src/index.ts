import express from 'express'
import cors from 'cors'
import { connection } from './data/connection'
import { signupBusiness } from './business/signupBusiness'



const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function (req, res) {
   res.send(await connection.raw('show tables'))
})

app.post('/user/signup', signupBusiness)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
