"use client"

import { TrendingUp, TrendingDown, Flame } from "lucide-react"

const topMovers = [
  { symbol: "AVAX/USDT", price: "38.45", change: 6.78, type: "New 24hr High" },
  { symbol: "ADA/USDT", price: "0.4567", change: 5.67, type: "New 7day High" },
  { symbol: "MATIC/USDT", price: "0.8934", change: 4.56, type: "New 24hr High" },
  { symbol: "DOT/USDT", price: "7.89", change: -2.34, type: "New 24hr Low" },
  { symbol: "XRP/USDT", price: "0.6234", change: -3.21, type: "New 7day Low" },
]

export default function TopMovers() {
  return (
    <div className="top-movers">
      <div className="top-movers-header">
        <h3 className="top-movers-title">
          <Flame size={20} className="flame-icon" />
          Top Movers
        </h3>
        <div className="movers-filters">
          {["All", "New High", "New Low"].map((filter, index) => (
            <button key={filter} className={`filter-button ${filter === "All" ? "active" : "inactive"}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="movers-list">
        {topMovers.map((mover, index) => (
          <div key={index} className="mover-item" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="mover-left">
              <div className="mover-symbol">{mover.symbol}</div>
              <div className="mover-type">
                {mover.change >= 0 ? (
                  <TrendingUp size={12} style={{ color: "#4ade80" }} />
                ) : (
                  <TrendingDown size={12} style={{ color: "#f87171" }} />
                )}
                <span>{mover.type}</span>
              </div>
            </div>
            <div className="mover-right">
              <div className="mover-price">{mover.price}</div>
              <div className={`mover-change ${mover.change >= 0 ? "positive" : "negative"}`}>
                {mover.change >= 0 ? "+" : ""}
                {mover.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
