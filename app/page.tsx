"use client";

import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  interface MenuItem {
    label: string;
    icon?: string;
    type?: "error";
  }

  interface MenuSection {
    label: string;
    items: MenuItem[];
  }

  const menuItems: MenuSection[] = [
    {
      label: "File",
      items: [
        { label: "Buat Data Baru", icon: "add_circle" },
        { label: "Setup Admin", icon: "admin_panel_settings" },
        { label: "Log Off", icon: "logout", type: "error" },
      ],
    },
    {
      label: "Setup",
      items: [
        { label: "Data Perusahaan", icon: "domain" },
        { label: "Chart of Account", icon: "account_tree" },
        { label: "Saldo Awal Account", icon: "account_balance_wallet" },
        { label: "Relasi Acc. - Inventory", icon: "inventory_2" },
        { label: "Buku KAS/BANK", icon: "savings" },
        { label: "Objek Pajak", icon: "receipt_long" },
        { label: "Proyek", icon: "assignment" },
      ],
    },
    {
      label: "Accounting",
      items: [
        { label: "Input: General Journal", icon: "edit_document" },
        { label: "Input: Voucher KAS/BANK", icon: "confirmation_number" },
        { label: "divider" },
        { label: "Output: Neraca", icon: "account_balance" },
        { label: "Output: Laba/Rugi", icon: "trending_up" },
        { label: "Output: Trial Balance", icon: "rule" },
        { label: "Output: General Ledger", icon: "book" },
        { label: "Output: Journal Transaksi", icon: "history" },
        { label: "Output: Buku KAS/BANK", icon: "request_quote" },
        { label: "Output: Kartu Hutang/Piutang", icon: "credit_card" },
      ],
    },
    {
      label: "Tools",
      items: [
        { label: "Buat Buku Tahun Baru", icon: "library_add" },
        { label: "Hapus Transaksi", icon: "delete_sweep" },
      ],
    },
    {
      label: "Help",
      items: [{ label: "Contact Admin", icon: "support_agent" }],
    },
  ];

  return (
    <>
      {/* Horizontal Top Navigation Bar */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
        {/* Top Section: Brand & User Actions */}
        <div className="h-16 flex justify-between items-center px-8 border-b border-slate-50/50 dark:border-slate-800/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 signature-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_balance
                </span>
              </div>
              <div className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight font-manrope">
                Q-GL Accounting
              </div>
            </div>
            
            {/* Nav Links integrated into Top Bar */}
            <nav className="flex items-center ml-4">
              {menuItems.map((menu) => (
                <div
                  key={menu.label}
                  className="relative group px-1"
                  onMouseEnter={() => setActiveDropdown(menu.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all">
                    <span>{menu.label}</span>
                    <span className="material-symbols-outlined text-xs">expand_more</span>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-0 pt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden py-2 backdrop-blur-xl ring-1 ring-black/5">
                      {menu.items.map((item, idx) => (
                        item.label === "divider" ? (
                          <div key={idx} className="h-px bg-slate-100 dark:bg-slate-800 my-1 mx-2"></div>
                        ) : (
                          <a
                            key={item.label}
                            href="#"
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                              item.type === "error"
                                ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                            }`}
                          >
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center mr-2">
              <span className="material-symbols-outlined absolute left-3 text-slate-400 text-sm">
                search
              </span>
              <input
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-48 focus:w-64 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="Search..."
                type="text"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 active:scale-95 duration-150 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>
            
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1"></div>
            
            <button className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              Quick Action
            </button>
            
            <div className="flex items-center gap-3 ml-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Profile"
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 shadow-sm object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="min-h-screen">
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface font-manrope">
                Financial Overview
              </h1>
              <p className="text-on-surface-variant font-medium mt-1">
                Fiscal Year 2024 • Q3 Performance
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span className="text-sm font-semibold">Last 30 Days</span>
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </div>
              <button className="bg-surface-container-highest p-2 rounded-lg hover:bg-surface-dim transition-colors">
                <span className="material-symbols-outlined">file_download</span>
              </button>
            </div>
          </div>

          {/* Metric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-secondary-container rounded-xl">
                  <span
                    className="material-symbols-outlined text-on-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    trending_up
                  </span>
                </div>
                <span className="bg-secondary/10 text-secondary px-2.5 py-1 rounded-full text-xs font-bold font-label">
                  +12.5%
                </span>
              </div>
              <div>
                <p className="text-on-surface-variant font-semibold text-sm tracking-wide uppercase">
                  Total Revenue
                </p>
                <h2 className="text-4xl font-extrabold font-headline mt-1 tracking-tight">
                  Rp. 428.940,-
                </h2>
              </div>
            </div>

            {/* Expenses Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] flex flex-col justify-between min-h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-tertiary-container rounded-xl">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    receipt_long
                  </span>
                </div>
                <span className="bg-tertiary/10 text-tertiary px-2.5 py-1 rounded-full text-xs font-bold font-label">
                  +4.2%
                </span>
              </div>
              <div>
                <p className="text-on-surface-variant font-semibold text-sm tracking-wide uppercase">
                  Operating Expenses
                </p>
                <h2 className="text-4xl font-extrabold font-headline mt-1 tracking-tight">
                  Rp. 184.200,-
                </h2>
              </div>
            </div>

            {/* Net Income Card */}
            <div className="signature-gradient p-8 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,80,212,0.15)] flex flex-col justify-between min-h-[180px] text-white">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    payments
                  </span>
                </div>
                <span className="bg-white/20 px-2.5 py-1 rounded-full text-xs font-bold font-label">
                  Stable
                </span>
              </div>
              <div>
                <p className="text-blue-100 font-semibold text-sm tracking-wide uppercase">
                  Net Income
                </p>
                <h2 className="text-4xl font-extrabold font-headline mt-1 tracking-tight">
                  Rp. 244.739,-
                </h2>
              </div>
            </div>
          </div>

          {/* Secondary Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Financial Pulse Chart */}
            <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="p-8 border-b border-surface-container-low flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold font-headline">
                    Financial Pulse
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    Monthly cash flow & expenditure projection
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                      Inflow
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-4">
                    <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                      Outflow
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 h-[360px] relative bg-slate-50/50">
                {/* Simulated Chart Visual */}
                <div className="absolute inset-x-8 bottom-8 top-12 flex items-end justify-between gap-4">
                  {/* Bars */}
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[40%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[60%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      JAN
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[30%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[75%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      FEB
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[50%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[85%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      MAR
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[45%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[70%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      APR
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[55%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[95%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      MAY
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 w-full items-center">
                    <div className="w-full bg-tertiary/20 rounded-t-lg h-[35%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[80%] shadow-lg shadow-primary/10"></div>
                    <span className="text-[10px] font-bold mt-2 text-on-surface-variant">
                      JUN
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
              <div className="p-8 border-b border-surface-container-low flex justify-between items-center">
                <h3 className="text-xl font-bold font-headline">
                  Recent Transactions
                </h3>
                <a
                  className="text-primary text-xs font-bold hover:underline"
                  href="#"
                >
                  View All
                </a>
              </div>
              <div className="flex-grow p-4 space-y-2">
                {/* Transaction Item */}
                <div className="p-4 hover:bg-surface-container-low rounded-xl transition-colors flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">
                    AZ
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-on-surface">
                      Amazon Web Services
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Cloud Infrastructure • 2h ago
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-tertiary">
                      -Rp. 1.420,-
                    </p>
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-tertiary/10 text-tertiary uppercase tracking-tighter">
                      Expense
                    </div>
                  </div>
                </div>

                {/* Transaction Item */}
                <div className="p-4 hover:bg-surface-container-low rounded-xl transition-colors flex items-center gap-4 group border border-transparent">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-secondary font-bold">
                    GS
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-on-surface">
                      Global Solutions Ltd.
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Service Invoice #884 • 5h ago
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-secondary">
                      +Rp. 12.850,-
                    </p>
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary uppercase tracking-tighter">
                      Revenue
                    </div>
                  </div>
                </div>

                {/* Transaction Item */}
                <div className="p-4 hover:bg-surface-container-low rounded-xl transition-colors flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-on-surface-variant font-bold">
                    <span className="material-symbols-outlined text-sm">
                      coffee
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-on-surface">
                      Artisan Roast Co.
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Office Supplies • Today
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-tertiary">-Rp. 45.500,-</p>
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-tertiary/10 text-tertiary uppercase tracking-tighter">
                      Expense
                    </div>
                  </div>
                </div>

                {/* Transaction Item */}
                <div className="p-4 hover:bg-surface-container-low rounded-xl transition-colors flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">
                    ST
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-on-surface">
                      Stripe Payout
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Merchant Account • Yesterday
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-secondary">
                      +Rp. 4.200,-
                    </p>
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary uppercase tracking-tighter">
                      Revenue
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ledger Visual Texture (Bottom) */}
          <div className="bg-surface-container-low rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h4 className="text-2xl font-extrabold font-headline mb-4">
                Master Ledger Integrity
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Our cryptographic precision ledger ensures every entry is
                immutable and audit-ready. Your financial data is synchronized
                across all enterprise nodes in real-time.
              </p>
              <div className="mt-8 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black font-headline text-primary">
                    99.9%
                  </span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                    Audit Accuracy
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-outline-variant/30"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black font-headline text-primary">
                    2.4ms
                  </span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                    Entry Sync
                  </span>
                </div>
              </div>
            </div>
            {/* Abstract Texture Design */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/3 signature-gradient opacity-10"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2">
              <span
                className="material-symbols-outlined text-[120px] text-primary/5 select-none"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
