const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const cors = require('cors')

const schema = require('./schema')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(7221, () => {
    console.log('server started, port 7221')
})