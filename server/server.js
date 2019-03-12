let express = require('express');
// let schema = require('./schema');

// let {graphql} = require('graphql');
let bodyParer = require('body-parser');

// schema
let {
graphql,
GraphQLObjectType,
GraphQLSchema,
GraphQLInt,
GraphQLString
} = require('graphql');

let count = 0;
let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                description: 'The count!',
                resolve: function () {
                    return count
                }
            },
            countA: {
                type: GraphQLString,
                description: 'The count!',
                resolve: function () {
                    return count + "A"
                }
            },
            countB: {
                type: GraphQLString,
                description: 'The count!',
                resolve: function () {
                    return count + "B"
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'update the count!',
                resolve: function () {
                    count += 1;
                    return count
                }
            }
        }
    }) 
});





let app = express();
let PORT = 3001;

app.use(bodyParer.text({ type: 'application/graphql' }));

app.post('/firstGraphql', (req, res) => {
    graphql(schema, req.body).then((result) => {
        res.send(JSON.stringify(result, null, 2));
    })
})

// app.post('/firstGraphql', (req, res) => {
//     res.send('hello');
// }) 
let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port  = server.address().port;
    console.log(server);
    console.log('Grapgql is listening at http://%s:%s', host, port)
});