let express = require('express');
var cors = require('cors');
// let schema = require('./schema');

// let {graphql} = require('graphql');
let bodyParser = require('body-parser');

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
app.use(cors());
let PORT = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.text());
app.use(bodyParser.text({ type: 'application/json' }));

// app.use('/graphql', bodyParser.text());
// app.use('/graphql', (req, res, next) => {
//     if(typeof req.body === 'string')
//         req.body = JSON.parse(req.body);

//     next();
// });

app.post('/firstGraphql', (req, res) => {
    console.log('req******************')
    console.log(req.body)
    graphql(schema, req.body).then((result) => {
        res.send(JSON.stringify(result, null, 2));
    })
})

// rest api
app.get('/firstGraphqlDemo', (req, res) => {
    res.send('hello');
}) 
let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port  = server.address().port;
    console.log(server);
    console.log('Grapgql is listening at http://%s:%s', host, port)
});