import environment from './../createRelayEnvironmentWeather'
import {QueryRenderer, graphql } from 'react-relay';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useLocation, useHistory } from 'react-router-dom';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const WeatherPageQuery = graphql`
query WeatherPageQuery($name: String!) {
    getCityByName(name: $name) {
        id
        name
        country
        coord {
			lon
            lat
        }
        weather{ 
            summary{
                icon
                description
                title
            }
            temperature {
                min
                max
                actual
                feelsLike
            }
            wind{
                speed
                deg
            }
            clouds {
                all
                visibility
                humidity
            }
            timestamp
        }
    }
}
`
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function WeatherPage() {
    let query = useQuery();
    const history = useHistory()
    const stateName = query.get("stateName");
    console.log(stateName)
    return(
        <QueryRenderer
            environment={environment}
            query={WeatherPageQuery}
            render={RenderApp}
            variables={ {name: stateName} }
        />
    )

    

    function RenderApp({error, props: relayProps}) {
        const temp = relayProps?.getCityByName?.weather?.temperature
        const wind = relayProps?.getCityByName?.weather?.wind
        const summary = relayProps?.getCityByName?.weather?.summary
        const coords = relayProps?.getCityByName?.coord
        const coordinates = {
            'lat': coords?.lat,
            'lng': coords?.lon
        }
        let maps = null
        let icons = null
        if(summary && summary.icon) {
            icons = (<img alt={summary?.title} src={`http://openweathermap.org/img/w/${summary?.icon}.png`} />);
        }
        if(coords && coords?.lat) {
            maps = (<GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBj5hz0EOV8iJuXFFkLl2qXW85TA-gBuqk" }}
                defaultCenter={coordinates}
                defaultZoom={11}
                >
                <AnyReactComponent
                    lat={coords?.lat}
                    lng={coords?.lon}

                />
                </GoogleMapReact>
            )
        }
        if(error) {
            return <div>Error in loading data</div>
        } else if(relayProps) {
            return (
                <React.Fragment>
                    <div className="header">
                        <div className="back-btn" onClick={() => history.goBack()}>Back</div>
                        <div className="country">
                            <div className="back-btn-mobile" onClick={() => history.goBack()}>◀</div>
                            {relayProps?.getCityByName?.name} ({relayProps?.getCityByName?.country}) 
                        </div>
                    </div>
                    <div className="weather-page">
                        <div className="card temp-card">
                            <div className="actual-temp">
                                <label>Current Weather</label>
                                <div className="value">
                                    {icons}
                                    <span>{Math.round(temp?.feelsLike-273.15)}°<span>c</span></span>
                                </div>
                                <label>{summary?.description}</label>
                            </div>                            
                            <div className="line-wrapper">
                                <div className="line">
                                    <span className="label">Min</span>
                                    <span className="value">{Math.round(temp?.min-273.15)}</span>
                                </div>
                                <div className="line">
                                    <span className="label">Max</span>
                                    <span className="value">{Math.round(temp?.max-273.15)}</span>
                                </div>
                                <div className="line">
                                    <span className="label">Actual</span>
                                    <span className="value">{Math.round(temp?.actual-273.15)}</span>
                                </div>
                                <div className="line">
                                    <span className="label">Feels Like</span>
                                    <span className="value">{Math.round(temp?.feelsLike-273.15)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card wind-card">
                            <label className="header">Wind</label>
                            <div className="line">
                                <span className="label">Speed</span>
                                <span className="value">{wind?.speed}</span>
                            </div>
                            <div className="line">
                                <span className="label">Deg</span>
                                <span className="value">{wind?.deg}</span>
                            </div>
                        </div>
                        <div className="card cord-card">
                            {maps}
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default WeatherPage;