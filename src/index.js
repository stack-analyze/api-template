//commonjs module
require('dotenv').config()
const app = require('./app.js')
require('./database')

//port
const port = process.env.PORT || 3000

//sync function
async function main() {
    await app.listen(port)
    console.log(`Server on port ${port}`)
}

main()