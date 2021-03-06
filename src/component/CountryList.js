import environment from './../createRelayEnvironment';
import {QueryRenderer, graphql} from 'react-relay';
const CountryListQuery = graphql`
query CountryListQuery {
    countries {
        name
        code
        capital
    }
}
`

function CountryList(props) {
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
                    relayProps.countries.map(item => <li onClick={(e) => props.clikLineItem(e, item)} key={item.name} >{item.name} ({item.code})</li>)
                }
            </ul>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default CountryList