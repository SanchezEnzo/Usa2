import express from "express"
import 'dotenv/config'

const app = express()

app.get('/', (_req, res) => {
	res.send("<h2>Hello world from back</h2>")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("Server running at http://localhost:" + PORT)
})