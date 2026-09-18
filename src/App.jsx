function App() {
 return (
   <>
   {/* Navbar */}
   <nav className="container mx-auto p-6">
    {/* Flex Container for nav items */}
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="z-30">
        <img className="" src="habit-flow-logo.svg" alt="Habit Flow" />
      </div>
      {/* Menu items */}
      <div className="hidden md:flex items-center space-x-10  tracking-wide text-gray-500">
        <a className="hover:text-red-500" href="">Features</a>
        <a className="hover:text-red-500" href="">FAQ</a>
        <a className="px-8 py-2 text-white bg-red-500 border-2 border-red-500 rounded-lg shadow-md hover:text-red-500 hover:bg-white" href="">Download</a>
      </div>
    </div>
   </nav>
   {/* Hero Section */}
   <section>
    {/* Container for image and content */}
    <div className="container mx-auto flex flex-col-reverse lg:flex-row p-6">
      {/* Content */}
      <div className="flex flex-col space-y-10 lg:w-1/2">
        <h1 className="text-center text-3xl font-semibold lg:text-6xl lg:text-left">Habit Flow Application</h1>
        <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left">Habit Flow helps you create, manage, and track your daily habits, making it easier to stay consistent and achieve your goals.</p>
        {/* Buttons Container */}
        <div className="flex items-center justify-center space-x-4 lg:justify-start">
          <a href="" className="p-4 text-sm font-semibold text-white bg-blue-600 rounded shadow-md border-2 border-blue-600 md:text-base hover:bg-white hover:text-blue-600 ">Get It On Chrome</a>
               <a href="" className="p-4 text-sm font-semibold text-black bg-gray-400 rounded shadow-md border-2 border-gray-400 md:text-base hover:bg-white hover:text-gray-600 ">Get It On Firefox</a>
        </div>
      </div>
      {/* Image */}
      <div className="lg:w-1/2">
        <img src="hero.png" alt="" />
      </div>
    </div>
   </section>
   </>
  )
}

export default App
