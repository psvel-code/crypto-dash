"use client"

import { Search, Filter } from "lucide-react"

interface MarketSearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function MarketSearch({ searchTerm, setSearchTerm }: MarketSearchProps) {
  const currencies = ["USDT", "FBUSD", "USDC", "TUSD", "BNB", "BTC"]

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          placeholder="Search cryptocurrencies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search size={20} className="search-icon" />
        <Filter size={20} className="filter-icon" />
      </div>

      <div className="currency-tabs">
        {currencies.map((currency, index) => (
          <button
            key={currency}
            className={`currency-tab ${currency === "USDT" ? "active" : "inactive"}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  )
}
