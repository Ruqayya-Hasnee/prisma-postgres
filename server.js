import express from "express";
import "dotenv/config"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.send("hi everyone...")
})

// * Routes
import routes from "./routes/index.js"
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})