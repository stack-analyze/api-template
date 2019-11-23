const {connection,connect} =require('mongoose')

const URI = process.env.MONGOOSE_URI || 'mongodb://localhost/entrepisedata'

connect(URI, {
    useNewUrlParser: true,
    useCreateIndex:true
})

connection.once('open', () => Console.log('DB is connected'))
