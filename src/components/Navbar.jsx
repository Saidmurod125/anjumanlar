import  { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import DarkMode from './DarkMode';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  const navItems = [
    { link: 'Bosh sahifa', path: '/' },
    { link: 'Arxiv', path: '/about' },
    { link: 'Taqvim', path: '/' },
    { link: 'Aloqa', path: '/' },
    { link: 'Yangiliklar', path: '/' },
  ];

  return (
   <div className='relative shadow-sm bg-g ray-400 w-32full h-[65px] z-12 bg-opacity-80'>
    <nav className='fixed top-0 left-0 right-0 p-4 mx-auto bg-white dark:text-white md:px-14 max-w-screen-2xl dark:bg-gray-900'>
    <div className='container flex items-center justify-between mx-auto font-medium top-12 '>
    <div className='flex items-center gap-12 space-x-14'>
        <a
          href="/"
          className="flex items-center space-x-3 text-2xl font-semibold text-primary"
        >
          <img className="inline-block w-22" src='https://anjumanlar.uz/logo.svg' alt="" />
          
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
      <DarkMode/>
        <NavLink to="/login" className='flex items-center gap-4 duration-300 rounded ittransition-all'>
        <i className="fa-solid fa-user"></i>
         <span>Kirish</span>
        </NavLink>
      </div>
      <div className='md:hidden'>
    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
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
            <li className='list-none '  key={link}>
              <a href={path} className="block hover:text-gray-300">
                {link}
              </a>
            </li>
          ))  
    }
    </div>
   </div>
  );
}

export default Navbar;
