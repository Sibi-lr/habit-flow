function App() {
 return (
   <>
   <nav className="container mx-auto p-6">
    {/* Flex Container for nav items */}
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="z-30">
        <img className="" src="habit-flow-logo.svg" alt="Habit Flow" />
      </div>
      {/* Menu items */}
      <div className="hidden md:flex items-center space-x-10 uppercase tracking-wide text-gray-500">
        <a className="hover:text-red-500" href="">Features</a>
        <a className="hover:text-red-500" href="">FAQ</a>
        <a className="px-8 py-2 text-white bg-red-500 border-2 border-red-500 rounded-lg shadow-md hover:text-red-500 hover:bg-white" href="">Download</a>
      </div>
    </div>
   </nav>
   </>
  )
}

export default App
