import React from 'react';
import { Container } from 'reactstrap';

import './style.css';

const navLinks = [
  {
    display: 'Home',
    url: '#',
  },
  {
    display: 'About',
    url: '#',
  },
  {
    display: 'Menu',
    url: '#',
  },
  {
    display: 'Recipe',
    url: '#',
  },
  {
    display: 'Contact',
    url: '#',
  },
];

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='navigation'>
          <div className='logo'>
            <h2 >
              <span>
                <i class='ri-restaurant-2-line'></i>
              </span>
              Chef Food
            </h2>
          </div>
          <div className='nav_menu'>
            <div className="nav_list_wrapper d-flex align-items-center gap-1">
              <ul className='nav_list'>
                {navLinks.map((link, index) => (
                  <li className='nav_item' key={index}>
                    <a href={link.url}>{link.display}</a>
                  </li>
                ))}
              </ul>
              <div className='menu_right'>
                <div className='custom_search'>
                  <input type='text' placeholder='search here....' />
                  <span>
                    <i class='ri-search-2-line'></i>
                  </span>
                </div>
              </div>

            </div>


          </div>

          <div className='menu_mobile'>
            <span></span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
