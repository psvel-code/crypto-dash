"use client"

import { useState, useMemo } from "react"
import Header from "@/components/Header"
import OrderBook from "@/components/OrderBook"
import TradingChart from "@/components/TradingChart"
import TradingPanel from "@/components/TradingPanel"
import MarketSearch from "@/components/MarketSearch"
import MarketList from "@/components/MarketList"
import TradeHistory from "@/components/TradeHistory"
import TopMovers from "@/components/TopMovers"
import OrderHistory from "@/components/OrderHistory"

// Static data
const cryptoData = [
  { symbol: "BTC/USDT", price: 67012.0, change: -0.5, volume: "27,306.67", high: "67,777.00", low: "66,474.55" },
  { symbol: "ETH/USDT", price: 3245.67, change: 2.34, volume: "45,123.89", high: "3,289.45", low: "3,156.78" },
  { symbol: "BNB/USDT", price: 601.8, change: -1.23, volume: "12,456.34", high: "615.67", low: "598.23" },
  { symbol: "ADA/USDT", price: 0.4567, change: 5.67, volume: "89,234.56", high: "0.4789", low: "0.4234" },
  { symbol: "SOL/USDT", price: 145.23, change: 3.45, volume: "23,567.89", high: "149.67", low: "141.23" },
  { symbol: "DOT/USDT", price: 7.89, change: -2.34, volume: "34,567.12", high: "8.12", low: "7.67" },
  { symbol: "MATIC/USDT", price: 0.8934, change: 4.56, volume: "56,789.23", high: "0.9234", low: "0.8567" },
  { symbol: "LINK/USDT", price: 14.56, change: 1.23, volume: "19,876.54", high: "14.89", low: "14.12" },
  { symbol: "XRP/USDT", price: 0.6234, change: -3.21, volume: "78,234.12", high: "0.6456", low: "0.6012" },
  { symbol: "AVAX/USDT", price: 38.45, change: 6.78, volume: "15,678.90", high: "39.12", low: "36.78" },
]

export default function CryptoTradingDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPair, setSelectedPair] = useState("BTC/USDT")

  // Filter crypto data based on search term
  const filteredCryptoData = useMemo(() => {
    return cryptoData.filter((crypto) => crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])

  const selectedCrypto = cryptoData.find((crypto) => crypto.symbol === selectedPair) || cryptoData[0]

  return (
    <div className="dashboard-container">
      <Header />

      {/* Main Content */}
      <div className="main-content">
        <OrderBook selectedCrypto={selectedCrypto} />

        {/* Center Content */}
        <div className="center-content">
          <TradingChart />
          <TradingPanel selectedCrypto={selectedCrypto} />
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="sidebar-content">
            <MarketSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <MarketList
              filteredCryptoData={filteredCryptoData}
              selectedPair={selectedPair}
              setSelectedPair={setSelectedPair}
            />
            <TradeHistory />
            <TopMovers />
          </div>
        </div>
      </div>

      <OrderHistory />
    </div>
  )
}
