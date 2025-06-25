"use client"

import { User, Bell, Settings, ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-icon">
              <span style={{ color: "#111827", fontWeight: 900, fontSize: "1.25rem" }}>G</span>
            </div>
            <span className="logo-text">roww</span>
          </div>
          <nav className="nav-container">
            {[
              { name: "Trade", hasDropdown: true },
              { name: "Markets", hasDropdown: false },
              { name: "Earn", hasDropdown: true },
              { name: "Blog", hasDropdown: true },
              { name: "Invite & Earn", hasDropdown: false },
              { name: "Reward Hub", hasDropdown: false },
              { name: "List your crypto", hasDropdown: false },
            ].map((item) => (
              <button key={item.name} className="nav-item">
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <button className="deposit-btn">Deposit</button>
          <button className="nav-item">Assets</button>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[User, Bell, Settings].map((Icon, index) => (
              <button key={index} className="header-icon-btn">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
