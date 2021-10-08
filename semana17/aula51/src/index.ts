import app from "./app"
import createUser from './endpoints/createUser'
import { getAddressInfo } from "./endpoints/getAdressInfo"
import { config } from "dotenv"
import { transporter } from "./services/mailTransporter"

config()

app.post('/users/signup', createUser)

getAddressInfo(90230030)
    .then(console.log)
    .catch(console.log)

transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: [
        "lbn_report_lovelace-aaaad37cn7wjenxehl4g4qe34e@labenualunos.slack.com",
        "germanaetges@gmail.com",
        "nyhv.contato@gmail.com"
    ],
    subject: "WE CAN DO IT",
    html: `
    <h3> Você tem um minuto pra ouvir a palavra da programação? </h3>
      <p>Hoje eu utilizei o nodemailer pra mandar esse e-mail através do VSCODE! </p>
      <button>Clique aqui para acabar com o mundo em 10s</button>
   ` ,
    text: `
   Você tem um minuto pra ouvir a palavra da programação?
   Hoje eu utilizei o nodemailer pra mandar esse e-mail através do VSCODE!
   `
})
    .then(console.log)
    .catch(console.log)

