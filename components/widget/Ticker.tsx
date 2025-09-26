import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

export interface TickerTapeSymbol {
  proName: string;
  title: string;
}

const defaultSymbols: TickerTapeSymbol[] = [

  {
    proName: "FX_IDC:EURUSD",
    title: "EUR/USD"
  },
  {
    proName: "FX:GBPUSD",
    title: "GBP/USD"
  },
  {
    proName: "FX_IDC:USDINR",
    title: "USD/INR"
  },

  {
    proName: "FX:USDJPY",
    title: "USD/JPY"
  },

  {
    proName: "OANDA:EURUSD",
    title: "EUR/USD"
  },

  {
    proName: "OANDA:GBPJPY",
    title: "GBP/JPY"
  },

  {
    proName: "OANDA:USDJPY",
    title: "USD/JPY"
  },

  {
    proName: "FX:NZDUSD",
    title: "NZD/USD"
  },

  {
    proName: "FX:EURJPY",
    title: "EUR/JPY"
  },

  {
    proName: "OANDA:NZDUSD",
    title: "NZD/USD"
  },


];
function Ticker() {
  return (
    <>
      <TickerTape colorTheme="light" displayMode="compact" symbols={defaultSymbols}></TickerTape>
    </>
  )
}

export default Ticker