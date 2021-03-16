/*var fetch = require('node-fetch')
var fs = require('fs')
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeSchemas, mergeTypeDefs } = require('@graphql-tools/merge');

const { buildClientSchema, getIntrospectionQuery, printSchema } = require('graphql')
const introspectionQuery = getIntrospectionQuery();
fs.writeFileSync('types/schema1.graphql', '')
fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({query: introspectionQuery})
}).then(response => response.json()).then(res => {
    const schemaString = printSchema(buildClientSchema(res.data));
    fs.writeFileSync('types/schema1.graphql', schemaString)
    //fs.writeFileSync('schema.graphql', schemaString)
    fetchWeather();
})

function fetchWeather() {
    fs.writeFileSync('types/schema2.graphql', '')
    fetch('https://graphql-weather-api.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: introspectionQuery})
    }).then(response => response.json()).then(res => {
        const schemaString = printSchema(buildClientSchema(res.data));
        fs.writeFileSync('types/schema2.graphql', schemaString)
    });
}
*/

var {
    makeRemoteExecutableSchema,
    introspectSchema,
    mergeSchemas,
    stitchSchemas
} = require('graphql-tools');
var { HttpLink } = require('apollo-link-http');
var { ApolloServer } = require('apollo-server');
var fetch = require('node-fetch');
var { print, printSchema } = require('graphql');
var fs = require('fs')
  // graphql API metadata

const executorCountry = async ({ document, variables }) => {
    const query = print(document);
    const fetchResult = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables })
    });
    return fetchResult.json();
};

const executorWeather = async ({ document, variables }) => {
    const query = print(document);
    const fetchResult = await fetch('https://graphql-weather-api.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables })
    });
    return fetchResult.json();
};

const graphqlApis = [
    {    uri: 'https://countries.trevorblades.com/', executor: executorCountry, file: 'schema1' },
    {   uri: 'https://graphql-weather-api.herokuapp.com/', executor: executorWeather, file: 'schema2' }
];

  // create executable schemas from remote GraphQL APIs
const createRemoteExecutableSchemas = async () => {
    let schemas = [];
    for (const api of graphqlApis) {
        const link = new HttpLink({
            uri: api.uri,
            fetch
        });
        const remoteSchema = await introspectSchema(api.executor);
        const remoteExecutableSchema = makeRemoteExecutableSchema({
            schema: remoteSchema,
            link
        });
        //fs.writeFileSync('types/'+api.file+'.graphql', printSchema(remoteExecutableSchema))
        schemas.push(remoteExecutableSchema);
    }
    return schemas;
};


const createNewSchema = async () => {
    const schemas = await createRemoteExecutableSchemas();
    const gatewaySchema = mergeSchemas({
        schemas: [
            ...schemas
        ]
    });
    console.log(gatewaySchema)
    fs.writeFileSync('schema.graphql', printSchema(gatewaySchema))
    return gatewaySchema;
};

const runServer = async () => {
    // Get newly merged schema
    const schema = await createNewSchema();
    // start server with the new schema
    const server = new ApolloServer({
        schema
    });
    server.listen().then(({url}) => {
        console.log(`Running at ${url}`);
    });
};

createNewSchema()