const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }), cors());


require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT

 require("./routes/author.routes")(app)


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})