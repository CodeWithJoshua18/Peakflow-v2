function Header() {
  return (
    <header className="flex flex-wrap items-center justify-center gap-4 bg-gray-300">
      <img 
        src="/images/person-time.png" 
        alt="animated logo" 
        className="w-10 h-10 object-contain"
      />
      <h1 className="text-2xl font-bold text-black tracking-wide">
        PeakFlow
      </h1>
    </header>
  )
}

export default Header
