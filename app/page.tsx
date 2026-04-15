import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col p-4 gap-2 z-50">
        <div className="mb-8 px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 signature-gradient rounded-xl flex items-center justify-center text-white">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance
              </span>
            </div>
            <div>
              <div className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                Q-GL<br />Accounting
              </div>
              <div className="text-xs font-medium text-slate-500">
                Enterprise Edition
              </div>
            </div>
          </div>
        </div>
        <nav className="flex-grow space-y-6 overflow-y-auto pr-2 pb-4 scrollbar-thin">
          {/* File */}
          <div>
            <div className="px-4 pb-2">
              <p className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-manrope">File</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                <span className="font-manrope text-sm font-semibold">Buat Data Baru</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                <span className="font-manrope text-sm font-semibold">Setup Admin</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">logout</span>
                <span className="font-manrope text-sm font-semibold">Log Off</span>
              </a>
            </div>
          </div>

          {/* Setup */}
          <div>
            <div className="px-4 pb-2">
              <p className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-manrope">Setup</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">domain</span>
                <span className="font-manrope text-sm font-semibold">Data Perusahaan</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">account_tree</span>
                <span className="font-manrope text-sm font-semibold">Chart of Account</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                <span className="font-manrope text-sm font-semibold">Saldo Awal Account</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-manrope text-sm font-semibold">Relasi Acc. - Inventory</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">savings</span>
                <span className="font-manrope text-sm font-semibold">Buku KAS/BANK</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span className="font-manrope text-sm font-semibold">Objek Pajak</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-manrope text-sm font-semibold">Proyek</span>
              </a>
            </div>
          </div>

          {/* Accounting */}
          <div>
            <div className="px-4 pb-2">
              <p className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-manrope">Accounting</p>
            </div>
            
            <div className="px-4 pt-1 pb-1">
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Input</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 rounded-lg shadow-sm font-bold transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">edit_document</span>
                <span className="font-manrope text-sm font-semibold">General Journal</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">confirmation_number</span>
                <span className="font-manrope text-sm font-semibold">Voucher KAS/BANK</span>
              </a>
            </div>

            <div className="px-4 pt-3 pb-1">
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Output</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">account_balance</span>
                <span className="font-manrope text-sm font-semibold">Neraca</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
                <span className="font-manrope text-sm font-semibold">Laba/Rugi</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">rule</span>
                <span className="font-manrope text-sm font-semibold">Trial Balance</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">book</span>
                <span className="font-manrope text-sm font-semibold">General Ledger</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-manrope text-sm font-semibold">Journal Transaksi</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">request_quote</span>
                <span className="font-manrope text-sm font-semibold">Buku KAS/BANK</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">credit_card</span>
                <span className="font-manrope text-sm font-semibold">Kartu Hutang/Piutang</span>
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="px-4 pb-2">
              <p className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-manrope">Tools</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">library_add</span>
                <span className="font-manrope text-sm font-semibold">Buat Buku Tahun Baru</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
                <span className="font-manrope text-sm font-semibold">Hapus Transaksi</span>
              </a>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="px-4 pb-2">
              <p className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-manrope">Help</p>
            </div>
            <div className="space-y-1">
              <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
                <span className="font-manrope text-sm font-semibold">Contact Admin</span>
              </a>
            </div>
          </div>
        </nav>
        <button className="mt-auto mx-2 signature-gradient text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 duration-150">
          <span className="material-symbols-outlined">add</span>
          New Entry
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="pl-64 min-h-screen">
        {/* TopNavBar */}
        <header className="w-full h-16 bg-white dark:bg-slate-900 flex justify-between items-center px-8 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-40">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-blue-700 dark:text-blue-400 font-manrope tracking-tight">
              Q-GL Accounting
            </span>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-slate-400 text-sm">
                search
              </span>
              <input
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                placeholder="Search ledger entries..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 active:scale-95 duration-150 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 active:scale-95 duration-150 transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-slate-100 dark:bg-slate-800 mx-1"></div>
            <button className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
              Quick Action
            </button>
            <div className="flex items-center gap-3 ml-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Profile"
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
              />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
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
                <p className="text-on-surface-variant font-semibold text-sm tracking-wide">
                  TOTAL REVENUE
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
                <p className="text-on-surface-variant font-semibold text-sm tracking-wide">
                  OPERATING EXPENSES
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
                <p className="text-blue-100 font-semibold text-sm tracking-wide">
                  NET INCOME
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
