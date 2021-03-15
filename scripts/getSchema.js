var fetch = require('node-fetch')
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