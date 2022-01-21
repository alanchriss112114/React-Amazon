import React, { useState } from 'react'
import './header.css'



function Header() {


    
    return (
        <div>
            <div className="containerheader">
                <img className='logo' src="https://press.aboutamazon.com/sites/g/files/knoqqb37121/themes/site/nir_pid2497/styleguide/media/logo.svg" alt="" />
                <div className='adminTextDiv'>
                    <p className='adminText'>Admin Panel</p>
                </div>
                <div className='panelTextDiv'>
                    <a className='productsText'><span className='panelText'>Products</span></a>
                    <a className='usersText'><span className='panelText'>Users</span></a>
                    <a className='ordersText'><span className='panelText'>Orders</span></a>
                    <div className="dropdown show">
                        <a className="adminTextLink dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className='panelText'>Admin</span>
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="btn signOutButton">Sign Out</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
