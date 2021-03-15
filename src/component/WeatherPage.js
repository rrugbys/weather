import environment from './../createRelayEnvironmentWeather'
import {QueryRenderer, graphql } from 'react-relay';
import React from 'react';

const WeatherPageQuery = graphql`
query WeatherPageQuery($name: String!) {
    getCityByName(name: $name) {
        id
        name
    }
}
`
function WeatherPage(props) {
    return(
        <QueryRenderer
            environment={environment}
            query={WeatherPageQuery}
            render={RenderApp}
            variables={{ name: props.name }}
        />
    )

    

    function RenderApp({error, props: relayProps}) {
        if(error) {
            return <div>Error in loading data</div>
        } else if(relayProps) {
            return (
            <div>SUCCESS</div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default WeatherPage;