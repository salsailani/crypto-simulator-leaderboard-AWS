import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';

function Chart(props) {
    return(
    <div>
    <TradingViewWidget
      symbol={props.ticker}
      theme={Themes.LIGHT}
      locale="en"
      style={BarStyles.LINE}
    />
    </div>
    )
  }
  

  export default Chart