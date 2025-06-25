"use client"

import { BarChart3, Activity, TrendingUp } from "lucide-react"

export default function TradingChart() {
  return (
    <div className="trading-chart">
      <div className="chart-background">
        <div className="chart-bg-gradient"></div>
        <div className="chart-bg-overlay"></div>
      </div>

      <div className="chart-content">
        <div className="chart-icon-container">
          <div className="chart-main-icon">
            <BarChart3 size={48} color="white" />
          </div>
          <div className="chart-activity-badge">
            <Activity size={16} style={{ color: "#111827" }} />
          </div>
        </div>
        <h3 className="chart-title">Advanced Trading Chart</h3>
        <p className="chart-description">
          Professional-grade candlestick chart with real-time data, technical indicators, and advanced analysis tools
        </p>
        <div className="chart-badges">
          <div className="chart-badge live">
            <TrendingUp size={16} />
            <span>Live Data</span>
          </div>
          <div className="chart-badge realtime">
            <Activity size={16} />
            <span>Real-time</span>
          </div>
        </div>
      </div>
    </div>
  )
}
