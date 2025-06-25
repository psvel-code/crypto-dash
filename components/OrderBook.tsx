"use client"

import { Star, TrendingUp, TrendingDown } from "lucide-react"

interface OrderBookProps {
  selectedCrypto: {
    symbol: string
    price: number
    change: number
  }
}

const orderBookData = [
  { price: 67015.47, amount: 0.26548, total: 0.26548, type: "sell" },
  { price: 67012.23, amount: 0.18432, total: 0.4498, type: "sell" },
  { price: 67009.89, amount: 0.35621, total: 0.80601, type: "sell" },
  { price: 67007.12, amount: 0.42156, total: 1.22757, type: "sell" },
  { price: 67004.56, amount: 0.28934, total: 1.51691, type: "sell" },
  { price: 67001.23, amount: 0.31245, total: 1.82936, type: "buy" },
  { price: 66998.78, amount: 0.25678, total: 2.08614, type: "buy" },
  { price: 66995.45, amount: 0.19823, total: 2.28437, type: "buy" },
  { price: 66992.12, amount: 0.33456, total: 2.61893, type: "buy" },
  { price: 66988.89, amount: 0.27891, total: 2.89784, type: "buy" },
]

export default function OrderBook({ selectedCrypto }: OrderBookProps) {
  return (
    <div className="order-book">
      <div className="order-book-content">
        <div className="crypto-header">
          <div className="crypto-title">
            <Star size={24} style={{ color: "#fbbf24" }} />
            <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f3f4f6" }}>{selectedCrypto.symbol}</span>
          </div>
          <div className="crypto-price">{selectedCrypto.price.toLocaleString()}</div>
          <div className="crypto-change">
            <div className={`change-badge ${selectedCrypto.change >= 0 ? "positive" : "negative"}`}>
              {selectedCrypto.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>
                {selectedCrypto.change >= 0 ? "+" : ""}
                {selectedCrypto.change.toFixed(2)}%
              </span>
            </div>
            <span style={{ color: "#9ca3af", fontSize: "0.875rem", fontWeight: 500 }}>24h Change</span>
          </div>
        </div>

        <div className="order-book-section">
          <h3 className="section-title">
            Order Book
            <div className="live-indicator"></div>
          </h3>
          <div>
            <div className="order-book-header">
              <span>Price (USDT)</span>
              <span>Amount (BTC)</span>
              <span>Total</span>
            </div>
            <div className="order-book-rows">
              {orderBookData.map((order, index) => (
                <div key={index} className={`order-row ${order.type}`}>
                  <span className={order.type === "sell" ? "price-sell" : "price-buy"}>
                    {order.price.toLocaleString()}
                  </span>
                  <span style={{ color: "#d1d5db" }}>{order.amount}</span>
                  <span style={{ color: "#d1d5db" }}>{order.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="current-price-card">
          <div className="current-price">{selectedCrypto.price.toLocaleString()}</div>
          <div className="price-usd">≈ $67,580 USD</div>
        </div>
      </div>
    </div>
  )
}
