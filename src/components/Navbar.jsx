
function Navbar() {
  return (
    <>
     <nav className="z-10 w-full flex items-center justify-between max-md:px-3 max-xl:px-15 px-40 py-5">
          <a href="/" className="font-[logo] text-2xl" >
            Shree Ram Bakers
          </a>
          <div className="flex gap-12 text-[1.4rem]  max-sm:hidden font-[heading] ">
            
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/" className="nav-link">
              Shop
            </a>
            <a href="/" className="nav-link">
              Custom Cakes
            </a>
            <a href="/" className="nav-link">
              Cart
            </a>
            <a href="/" className="nav-link">
            <i className="fa-solid fa-bell font-extrabold text-[#FF9898] text-[26px] "></i>
            </a>
          </div>
           <div className="min-sm:hidden font-extrabold text-[#FF9898] text-2xl ">
            <i className="fa-solid fa-bell"></i>
          </div>
        </nav>
          <div className="w-full border-[.1px] border-[#FF9898]"></div>
          </>
  )
}

export default Navbar