
import environment from './../createRelayEnvironment';
import {QueryRenderer, graphql} from 'react-relay';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function CountryPage(props) {
    let query = useQuery();
    const history = useHistory();
    console.log(query.get("code"));
    return(
        <QueryRenderer
            environment={environment}
            query={CountryPageQuery}
            render={RenderApp}
            variables={{ code: query.get("code") }}
        />
    )

    function RenderApp({error, props: relayProps}) {
        if(error) {
            return <div>Error in loading data</div>
        } else if(relayProps) {
            return (
            <React.Fragment>
                <div className="header">
                    <div className="back-btn" onClick={() => history.goBack()}>Back</div>
                    <div className="country">
                        <div className="back-btn-mobile" onClick={() => history.goBack()}>◀</div>
                        {relayProps.country.name} ({relayProps.country.code})
                    </div>
                    <div className="country-capital">Capital : {relayProps.country.capital}</div>
                </div>
                <ul>
                    {
                        relayProps.country.states.map(item => 
                            <li key={item.name} >
                                <Link to={`/weather?stateName=${item.name}`}>{item.name}</Link>
                            </li>
                            )
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