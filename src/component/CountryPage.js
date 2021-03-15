
import environment from './../createRelayEnvironment';
import {QueryRenderer, graphql} from 'react-relay';
import React from 'react';

const CountryPageQuery = graphql`
query CountryPageQuery($code: ID!) {
    country(code: $code) {
        name
        code
        capital
        states {
            name
        }
    }
}
`

function CountryPage(props) {
    return(
        <QueryRenderer
            environment={environment}
            query={CountryPageQuery}
            render={RenderApp}
            variables={{ code: props.code }}
        />
    )

    function RenderApp({error, props: relayProps}) {
        if(error) {
            return <div>Error in loading data</div>
        } else if(relayProps) {
            return (
            <React.Fragment>
                <div className="header">
                    <div className="back-btn" onClick={() => props.goBack()}>Back</div>
                    <div className="country">{relayProps.country.name} ({relayProps.country.code})</div>
                    <div className="country-capital">Capital : {relayProps.country.capital}</div>
                </div>
                <ul>
                    {
                        relayProps.country.states.map(item => <li onClick={(e) => props.clickState(item)} key={item.name} >{item.name}</li>)
                    }
                </ul>
            </React.Fragment>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default CountryPage