const mysql = require("mysql2")
const adoptionService = require("./service/RegisterAdoptionService")
const animalService = require("./service/RegisterAnimalService")
const donationService = require("./service/RegisterDonationService")
const volunteerService = require("./service/RegisterVolunteerService")

const app = express()
const port = 8080

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "DoacaoDeAnimais",
})

connection.connect((err) => {
    if (err) {
      console.log("Erro na conexão com a base de dados")
      throw err
    }
    console.log("Conexão com a base de dados bem sucedida!!")
  })