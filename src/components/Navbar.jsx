import  { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from 'react-icons/fa6';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  const navItems = [
    { link: 'Bosh sahifa', path: 'home' },
    { link: 'Taqvim', path: 'feature' },
    { link: 'Arxiv', path: 'about' },
    { link: 'Aloqa', path: 'pricing' },
    { link: 'Yangiliklar', path: 'pricing' },
  ];

  return (
   <>
    <nav className='fixed top-0 left-0 right-0 p-4 mx-auto bg-white md:px-14 max-w-screen-2xl text-primary'>
    <div className='container flex items-center justify-between mx-auto text-lg font-medium'>
    <div className='flex items-center space-x-12'>
        <a
          href="/"
          className="flex items-center space-x-3 text-2xl font-semibold text-primary"
        >
          <img className="inline-block w-22" src='https://anjumanlar.uz/logo.svg' alt="Logo" />
          
        </a>
        <ul className='hidden space-x-12 md:flex'>
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="block hover:text-gray-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='items-center hidden space-x-12 md:flex'>
        <a href="/" className='items-center hidden lg:flex hover:text-secoundary'><GrLanguage className='mr-2'/>Language</a>
        <button className='px-4 py-2 transition-all duration-300 rounded bg-secoundary hover:bg-indigo-600 hover:text-secoundary'>Sign up</button>
      </div>
      <div className='md:hidden'>
    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">    
  <NavLink
      to="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src={logo}
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Ilmiy Anjumanlar
      </span>
    </NavLink>
   
      <button
        className={`hamburger-button inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isOpen ? 'open' : ''}`
       
      }
        onClick={handleMenuClick}
      >
        <span className="sr-only">Open main menu</span>
         <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
      </button>
      {isOpen && (
       <div className="absolute left-[45%] flex flex-col top-[20%] items-center justify-center mx-auto ">
  {navItems.map(({ link, path }) => (
    <li className="list-none " key={link}>
      <NavLink
        to={path}
        className="block px-3 py-2 text-blue-700 bg-transparent bg-black rounded md:bg-blue-700 md:text-white md:p-3 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-700 shadow_book"
        aria-current="page"
      >
        {link}
      </NavLink>
    </li>
  ))}
</div>
      )}
    

    <div className="hidden w-full md:block md:w-auto" >
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
        }
    </button>
      </div>
    </div>
    </nav>
    <div className={` space-y-4 px-4 pt-24 text-xl  pb-5  bg-secoundary ${isMenuOpen ? " fixed block  top-0  right-0 left-0 " : "hidden"} `}>
    {
        navItems.map(({ link, path }) => (
            <li  key={link}>
              <a href={path} className="block hover:text-gray-300">
                {link}
              </a>
            </li>
          ))  
    }
    </div>
   </>
  );
}

export default Navbar;
