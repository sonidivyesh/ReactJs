import React from 'react';
import './Index.css';
import { Button, Input } from 'reactstrap';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sec1'>
            <div className='footer_logo'>
                <h1>ECOM</h1>
            </div>
            <div className='footer_menu'>
                <h3>Quick Links</h3>
                <div className='footer_menu_list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </div>
            </div>
            <div className='subscribe'>
                <h4>Subscribe to our news letter</h4>
                <Input type="text" className='footer_search' placeholder='Enter your email'/>
                <Button className='subscribe_button' color="info">Subscribe</Button>
            </div>
        </div>
        <div className='sec2'>
            <hr />
            <h6>Copyright © 2024, ECOM. ALl RIghts Reserved. Designed by Divyesh Soni</h6>
        </div>
    </div>
  )
}
