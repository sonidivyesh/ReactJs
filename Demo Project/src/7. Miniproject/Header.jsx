import React from 'react';
import './Index.css';
import { Input } from 'reactstrap';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <div className='header'>
        <div className='header_logo'>
            <h1>ECOM</h1>
        </div>
        <div className='main_menu'>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact Us</li>
        </div>
        <div className='header_searchbar'>
            <Input type="text" className='search_input' placeholder='Search anything'/>
            <div className='header_search_icon'>
                <Search size={20} />
            </div>
        </div>
    </div>
  )
}
