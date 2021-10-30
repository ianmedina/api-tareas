const app = require('./src/config/app')
const conn = require('./src/database')

const port = process.env.PORT || 3030

conn()

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})