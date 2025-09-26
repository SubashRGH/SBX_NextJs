import React from 'react'
import { MarketOverview } from "react-ts-tradingview-widgets";

const data = [
  {
    "title": "Forex",
    "symbols": [
      {
        "s": "FX:EURUSD"
      },
      {
        "s": "FX:GBPUSD"
      },
      {
        "s": "FX:USDJPY"
      },
      {
        "s": "FX:USDCHF"
      },
      {
        "s": "FX:AUDUSD"
      },
      {
        "s": "FX:USDCAD"
      }
    ],
    "originalTitle": "Forex"
  },
  {
    "title": "Indices",
    "symbols": [
      {
        "s": "FOREXCOM:SPXUSD",
        "d": "S&P 500"
      },
      {
        "s": "FOREXCOM:NSXUSD",
        "d": "Nasdaq 100"
      },
      {
        "s": "FOREXCOM:DJI",
        "d": "Dow 30"
      },
      {
        "s": "INDEX:NKY",
        "d": "Nikkei 225"
      },
      {
        "s": "INDEX:DEU30",
        "d": "DAX Index"
      },
      {
        "s": "FOREXCOM:UKXGBP",
        "d": "UK 100"
      }
    ],
    "originalTitle": "Indices"
  },
  {
    "title": "Commodities",
    "symbols": [
      {
        "s": "CME_MINI:ES1!",
        "d": "S&P 500"
      },
      {
        "s": "CME:6E1!",
        "d": "Euro"
      },
      {
        "s": "COMEX:GC1!",
        "d": "Gold"
      },
      {
        "s": "NYMEX:CL1!",
        "d": "Crude Oil"
      },
      {
        "s": "NYMEX:NG1!",
        "d": "Natural Gas"
      },
      {
        "s": "CBOT:ZC1!",
        "d": "Corn"
      }
    ],
    "originalTitle": "Commodities"
  }
]

function Overview() {
  return (
    <>
      <MarketOverview colorTheme="light" height={600} width="100%" showFloatingTooltip tabs={data}></MarketOverview>
    </>
  )
}

export default Overview