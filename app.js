const express = require('express')
const indexRouter = require('../food-journal/routes/routes')

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
