import styled from 'styled-components';
import React, {useState} from 'react'
import CountryList from './component/CountryList'
import CountryPage from './component/CountryPage'
import WeatherPage from './component/WeatherPage';

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
    font-size: 22px;
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
`;

function App() {
  const [firstScreen, setFirstScreen] = useState(true);
  const [weatherPage, setWeatherPage] = useState(false);
  const [code, setCode] = useState(null);
  const clikLineItem = (e, item) => {
    setCode(item.code)
    setFirstScreen(false)
  }
  const goBack = () => {
    console.log('a')
    setCode(null)
    setFirstScreen(true)
  }
  const clickState = (state) => {
    console.log(state)
    setWeatherPage(true)
  }
  return (
    <StyledParent>
      {
        firstScreen ? <CountryList clikLineItem={clikLineItem}/> : 
          (weatherPage ? <WeatherPage /> : <CountryPage code={code} goBack={goBack} clickState={clickState} />)
      }
    </StyledParent>
    
  );

}



export default App;
