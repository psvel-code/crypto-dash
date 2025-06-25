"use client"

import { useState } from "react"
import { Activity, Clock } from "lucide-react"

const recentTrades = [
  { price: 67012.47, amount: 0.26548, time: "20:55:36", type: "buy" },
  { price: 67011.23, amount: 0.18432, time: "20:55:35", type: "sell" },
  { price: 67013.89, amount: 0.35621, time: "20:55:34", type: "buy" },
  { price: 67010.12, amount: 0.42156, time: "20:55:33", type: "sell" },
  { price: 67014.56, amount: 0.28934, time: "20:55:32", type: "buy" },
  { price: 67009.78, amount: 0.31245, time: "20:55:31", type: "sell" },
  { price: 67015.45, amount: 0.25678, time: "20:55:30", type: "buy" },
]

export default function TradeHistory() {
  const [activeTab, setActiveTab] = useState("market")

  return (
    <div className="trade-history">
      <div className="tab-container">
        {[
          { key: "market", label: "Market Trades", icon: Activity },
          { key: "my", label: "My Trades", icon: Clock },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-button ${activeTab === tab.key ? "active" : "inactive"}`}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "market" && (
        <div className="trades-container">
          <div className="trades-header">
            <span>Price</span>
            <span>Amount</span>
            <span>Time</span>
          </div>
          <div className="trades-list">
            {recentTrades.map((trade, index) => (
              <div key={index} className={`trade-item ${trade.type}`} style={{ animationDelay: `${index * 100}ms` }}>
                <span className={`trade-price ${trade.type}`}>{trade.price.toLocaleString()}</span>
                <span className="trade-amount">{trade.amount}</span>
                <span className="trade-time">{trade.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "my" && (
        <div className="empty-state">
          <div className="empty-icon">
            <Clock size={24} style={{ color: "#9ca3af" }} />
          </div>
          <p className="empty-title">No trades yet</p>
          <p className="empty-description">Your trading history will appear here</p>
        </div>
      )}
    </div>
  )
}
