import environment from './../createRelayEnvironment';
import {QueryRenderer, graphql} from 'react-relay';
import { Link } from 'react-router-dom';
const CountryListQuery = graphql`
query CountryListQuery {
    countries {
        name
        code
        capital
    }
}
`

function CountryList() {
    return(
        <QueryRenderer
            environment={environment}
            query={CountryListQuery}
            render={RenderApp}
        />
    )

    function RenderApp({error, props: relayProps}) {
        if(error) {
            return <div>Error in loading data</div>
        } else if(relayProps) {
            return (
            <ul>
                {
                    relayProps.countries.map(item => 
                        <li key={item.name} >
                            <Link to={`/country?code=${item.code}`}>{item.name} ({item.code})</Link>
                        </li>
                    )
                }
            </ul>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default CountryList