"use client"

import { useState } from "react"
import { Clock, CheckCircle, XCircle } from "lucide-react"

const orderHistory = [
  {
    date: "28-05-2024 12:26:44",
    pair: "BTC/USDT",
    price: 67012.0,
    side: "Buy",
    type: "Limit",
    amount: 0.26548,
    total: 17789.65,
    status: "Filled",
  },
  {
    date: "28-05-2024 12:25:12",
    pair: "ETH/USDT",
    price: 3245.67,
    side: "Sell",
    type: "Market",
    amount: 1.5,
    total: 4868.51,
    status: "Filled",
  },
  {
    date: "28-05-2024 12:23:45",
    pair: "BNB/USDT",
    price: 601.8,
    side: "Buy",
    type: "Limit",
    amount: 5.0,
    total: 3009.0,
    status: "Cancelled",
  },
]

export default function OrderHistory() {
  const [orderTab, setOrderTab] = useState("open")

  return (
    <div className="order-history">
      <div className="order-history-tabs">
        {[
          { key: "open", label: "Open Orders (3)", icon: Clock },
          { key: "history", label: "Order History", icon: CheckCircle },
          { key: "cancel", label: "Cancel History", icon: XCircle },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setOrderTab(tab.key)}
            className={`order-tab ${orderTab === tab.key ? "active" : "inactive"}`}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {orderTab === "open" && (
        <div className="order-table-container">
          <table className="order-table">
            <thead>
              <tr>
                {["Date", "Pair", "Price", "Side", "Type", "Amount", "Total", "Status"].map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order, index) => (
                <tr key={index} style={{ animationDelay: `${index * 100}ms` }}>
                  <td className="order-date">{order.date}</td>
                  <td className="order-pair">{order.pair}</td>
                  <td className="order-price">{order.price.toLocaleString()}</td>
                  <td>
                    <span className={`order-side ${order.side.toLowerCase()}`}>{order.side}</span>
                  </td>
                  <td className="order-type">{order.type}</td>
                  <td className="order-amount">{order.amount}</td>
                  <td className="order-total">{order.total.toLocaleString()}</td>
                  <td>
                    <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(orderTab === "history" || orderTab === "cancel") && (
        <div className="order-history-empty">
          <div className="empty-history-icon">
            {orderTab === "history" ? (
              <CheckCircle size={40} style={{ color: "#9ca3af" }} />
            ) : (
              <XCircle size={40} style={{ color: "#9ca3af" }} />
            )}
          </div>
          <p className="empty-history-title">
            {orderTab === "history" ? "No order history available" : "No cancelled orders"}
          </p>
          <p className="empty-history-description">
            {orderTab === "history"
              ? "Your completed orders will appear here"
              : "Your cancelled orders will appear here"}
          </p>
        </div>
      )}
    </div>
  )
}
