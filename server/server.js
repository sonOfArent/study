import express, { json } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(json())

// Routes
app.get('/sets', (req, res) => {
    console.log(req.body)
})


// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('App running in port: ' + PORT)
})