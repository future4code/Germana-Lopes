import express from 'express'
import cors from 'cors'
import { userRouter } from './controller/routes/UserRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter);


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
