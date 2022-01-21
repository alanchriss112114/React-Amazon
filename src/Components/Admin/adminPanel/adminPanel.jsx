import React from 'react'
import './adminPanel.css'
import userLogo from '../../../images/adminUsers.png'
import orderLogo from '../../../images/adminOrders.png'
import productLogo from '../../../images/adminProducts.png'



function adminPanel() {
    return (
        <div>
            <section className='adminPanelSection'>
                <div className="adminPanelContainer adminPanelDepartpemt">
                    <p className='adminPanelContainerText'>Products</p>
                    <img className='adminPanelContainerImage' src={productLogo} alt="" />
                    <button className='btn btn-primary btnProducts'>Manage Products</button>
                </div>
                <div className="adminPanelContainer adminPanelUsers">
                    <p className='adminPanelContainerText'>Users</p>
                    <img className='adminPanelContainerImage' src={userLogo} alt="" />
                    <button className='btn btn-primary btnUsers'>Manage Users</button>
                </div>
                <div className="adminPanelContainer adminPanelOrders">
                    <p className='adminPanelContainerText'>Orders</p>
                    <img className='adminPanelContainerImage' src={orderLogo} alt="" />
                    <button className='btn btn-primary btnOrders'>Manage Orders</button>
                </div>
            </section>
        </div>
    )
}

export default adminPanel
