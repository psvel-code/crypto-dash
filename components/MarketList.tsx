"use client"

import { Star, TrendingUp, TrendingDown } from "lucide-react"

interface MarketListProps {
  filteredCryptoData: Array<{
    symbol: string
    price: number
    change: number
    volume: string
  }>
  selectedPair: string
  setSelectedPair: (pair: string) => void
}

export default function MarketList({ filteredCryptoData, selectedPair, setSelectedPair }: MarketListProps) {
  return (
    <div className="market-list">
      <div className="market-list-header">
        <span>Pair</span>
        <span>Price</span>
        <span>Change</span>
      </div>
      <div className="market-list-container">
        {filteredCryptoData.map((crypto, index) => (
          <div
            key={index}
            className={`market-item ${selectedPair === crypto.symbol ? "selected" : ""}`}
            onClick={() => setSelectedPair(crypto.symbol)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="market-pair">
              <Star size={16} className="market-star" />
              <span className="market-symbol">{crypto.symbol}</span>
            </div>
            <span className="market-price">{crypto.price.toLocaleString()}</span>
            <div className={`market-change ${crypto.change >= 0 ? "positive" : "negative"}`}>
              {crypto.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>
                {crypto.change >= 0 ? "+" : ""}
                {crypto.change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
