const {buildSchema} = require('graphql')

const schema = buildSchema(`

    type User {
        id: ID
        name: String
    }

`)

module.exports = schema