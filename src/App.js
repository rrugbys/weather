import styled from 'styled-components';
import React from 'react'
import CountryList from './component/CountryList'
import CountryPage from './component/CountryPage'
import WeatherPage from './component/WeatherPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const StyledParent = styled.div`
  width:100%;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    padding: 10px;
    line-height: 40px;
    background: #f3f3f3;
    border-bottom: 1px solid #999;
    cursor: pointer;
  }
  .header{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: #FFF;
  }
  .country{
    padding: 10px;
    font-size: 18px;
    text-align: center;
  }
  .country-capital {
    text-align:center;
    padding-bottom: 10px;
  }
  .back-btn{
    cursor: pointer;
    position: absolute;
    top:20px;
    left: 40px;
    line-height: 35px;
    padding: 0 10px;
    border: 1px solid;
  }
  .card{
    width: 80%;
    margin: 30px auto;
    background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    padding: 20px;
    border-radius: 5px;
  }
  .cord-card{
    height: 400px;
  }
  .line {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
  }
  .temp-card{
    display: flex;
    justify-content: space-between;
  }
  .line:last-child {
    border-bottom: 0;
  }
  .actual-temp {
      flex: 1;
  }
  .actual-temp > label {
    font-size: 16px;
    text-transform: capitalize;
  }
  .line-wrapper {
      flex: 1;
  }
  .actual-temp .value{
    height: 120px;
    display: flex;
  }
  .actual-temp .value img{
    height: 60px;
    padding: 30px 0;
  }
  .actual-temp .value span {
    font-size: 50px;
    line-height: 120px;
    display: flex;
  }
  .actual-temp .value span span{
    color: #888;
    font-size: 30px;
    line-height: 130px
  }
  .card > .header {
    font-size: 18px;
    margin: 10px 0;
  }
  .back-btn-mobile{
    display: none;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 30px;
    margin-top: -4px;
  }

  @media (max-width: 500px) {
    .back-btn{
      display: none;
    }
    .back-btn-mobile{
      display: flex;
    }
    .country{
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }

`;

function App() {
  
  
  return (
    <StyledParent>
      <Router>
        <Switch>
          <Route path="/weather">
            <WeatherPage />
          </Route>
          <Route path="/country">
            <CountryPage />
          </Route>
          <Route path="/">
            <CountryList />
          </Route>
        </Switch>
      </Router>
      {/* {
        firstScreen ? <CountryList clikLineItem={clikLineItem}/> : 
          (weatherPage ? <WeatherPage name={state} goBackWeather={goBackWeather}/> : <CountryPage code={code} goBack={goBack} clickState={clickState} />)
      } */}
    </StyledParent>
    
  );

}



export default App;
