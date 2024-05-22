import express from 'express'
import categoriesRoute from './routes/categories.Routes.js'
import productsRoute from './routes/product.Routes.js'

const app = express()

app.use(express.json())
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({ error: 'Algo salió mal!' })
})
const port = process.env.PORT || 3000

app.use('/api', categoriesRoute)
app.use('/api', productsRoute)

app.listen(port)
console.log(`listening on port http://localhost:${port}`)
