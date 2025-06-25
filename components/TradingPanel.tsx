"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, Zap } from "lucide-react"

interface TradingPanelProps {
  selectedCrypto: {
    symbol: string
    price: number
  }
}

export default function TradingPanel({ selectedCrypto }: TradingPanelProps) {
  const [buyAmount, setBuyAmount] = useState("0.001")
  const [sellAmount, setSellAmount] = useState("0.001")

  const percentageButtons = ["25%", "50%", "75%", "100%"]

  return (
    <div className="trading-panel">
      {/* Buy Panel */}
      <div className="trading-card buy">
        <div className="trading-card-bg"></div>
        <div className="trading-card-content">
          <h3 className="trading-header buy">
            <div className="trading-icon buy">
              <TrendingUp size={20} />
            </div>
            Buy {selectedCrypto.symbol.split("/")[0]}
          </h3>

          <div className="trading-form">
            <div className="form-group">
              <label className="form-label">Available Balance</label>
              <div className="form-value">0.00000000 USDT</div>
            </div>

            <div className="form-group">
              <label className="form-label">Price (USDT)</label>
              <div className="form-input-container">
                <input className="form-input" value={selectedCrypto.price.toLocaleString()} readOnly />
                <Zap size={20} className="input-icon" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Amount (BTC)</label>
              <input
                className="form-input"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                placeholder="0.00000000"
              />
            </div>

            <div className="percentage-buttons">
              {percentageButtons.map((percent) => (
                <button key={percent} className="percentage-btn">
                  {percent}
                </button>
              ))}
            </div>

            <button className="trading-submit-btn buy">Buy {selectedCrypto.symbol.split("/")[0]}</button>
          </div>
        </div>
      </div>

      {/* Sell Panel */}
      <div className="trading-card sell">
        <div className="trading-card-bg"></div>
        <div className="trading-card-content">
          <h3 className="trading-header sell">
            <div className="trading-icon sell">
              <TrendingDown size={20} />
            </div>
            Sell {selectedCrypto.symbol.split("/")[0]}
          </h3>

          <div className="trading-form">
            <div className="form-group">
              <label className="form-label">Available Balance</label>
              <div className="form-value">0.00000000 BTC</div>
            </div>

            <div className="form-group">
              <label className="form-label">Price (USDT)</label>
              <div className="form-input-container">
                <input className="form-input sell" value={selectedCrypto.price.toLocaleString()} readOnly />
                <Zap size={20} className="input-icon sell" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Amount (BTC)</label>
              <input
                className="form-input sell"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
                placeholder="0.00000000"
              />
            </div>

            <div className="percentage-buttons">
              {percentageButtons.map((percent) => (
                <button key={percent} className="percentage-btn sell">
                  {percent}
                </button>
              ))}
            </div>

            <button className="trading-submit-btn sell">Sell {selectedCrypto.symbol.split("/")[0]}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
