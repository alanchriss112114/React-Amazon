import React, { useContext } from 'react'
import './navbar.css'
import userLogo from '../../images/userLogo.png'
import {useNavigate} from 'react-router-dom'
import {AuthContext,FirebaseContext} from '../../Store/firebaseContext'

function Navbar() {

    const navigate=useNavigate()

    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)

    return (
        <div>
            <div
                className="a-m-us a-aui_72554-c a-aui_accordion_a11y_role_354025-c a-aui_killswitch_csa_logger_372963-t1 a-aui_pci_risk_banner_210084-c a-aui_preload_261698-c a-aui_rel_noreferrer_noopener_309527-c a-aui_template_weblab_cache_333406-c a-aui_tnr_v2_180836-c">
                <div id="a-page">

                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png"
                        className='amazon-logo' alt="" />


                    <a id='nav-top'></a>


                    <a id="skiplink" tabindex="0" className="skip-link">Skip to main content</a>


                    <header id="navbar-main"
                        className="nav-opt-sprite nav-flex nav-locale-us nav-lang-en nav-ssl nav-unrec nav-progressive-attribute">


                        <div id='navbar' cel_widget_id='Navigation-desktop-navbar' role='navigation'
                            className="nav-sprite-v1 celwidget nav-bluebeacon nav-a11y-t1 bold-focus-hover layout2 nav-flex layout3 layout3-alt nav-packard-glow hamburger nav-progressive-attribute">

                            <div id='nav-belt'>
                                <div className='nav-left'>

                                    <div id="nav-logo">
                                        <a href="/" id="nav-logo-sprites" className="nav-logo-link nav-progressive-attribute" aria-label="Amazon">
                                            <span className="nav-sprite nav-logo-base"></span>
                                            <span id="logo-ext" className="nav-sprite nav-logo-ext nav-progressive-content"></span>
                                            <span className="nav-logo-locale">.us</span>
                                        </a>
                                    </div>

                                    <div id="nav-global-location-slot">
                                        <span id="nav-global-location-data-modal-action" className="a-declarative nav-progressive-attribute"
                                            data-a-modal='{&quot;width&quot;:375, &quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;Choose your location&quot;, &quot;ajaxHeaders&quot;:{&quot;anti-csrftoken-a2z&quot;:&quot;gJHN7x+xkf0zmdjWraiZFmCYupmGlL6hOKuy4ikAAAAMAAAAAGGTjaNyYXcAAAAA&quot;}, &quot;name&quot;:&quot;glow-modal&quot;, &quot;url&quot;:&quot;/gp/glow/get-address-selections.html?deviceType&#x3D;desktop&amp;pageType&#x3D;Gateway&amp;storeContext&#x3D;NoStoreName&amp;actionSource&#x3D;desktop-modal&quot;, &quot;footer&quot;:&quot;&lt;span className&#x3D;\&quot;a-declarative\&quot; data-action&#x3D;\&quot;a-popover-close\&quot; data-a-popover-close&#x3D;\&quot;{}\&quot;&gt;&lt;span className&#x3D;\&quot;a-button a-button-primary\&quot;&gt;&lt;span className&#x3D;\&quot;a-button-inner\&quot;&gt;&lt;button name&#x3D;\&quot;glowDoneButton\&quot; className&#x3D;\&quot;a-button-text\&quot; type&#x3D;\&quot;button\&quot;&gt;Done&lt;/button&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&quot;,&quot;header&quot;:&quot;Choose your location&quot;}'
                                            data-action="a-modal">
                                            <a id="nav-global-location-popover-link"
                                                className="nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute" tabindex="0">
                                                <div className="nav-sprite nav-progressive-attribute" id="nav-packard-glow-loc-icon"></div>
                                                <div id="glow-ingress-block">
                                                    <span className="nav-line-1 nav-progressive-content" id="glow-ingress-line1">
                                                        Hello
                                                    </span>
                                                    <span className="nav-line-2 nav-progressive-content" id="glow-ingress-line2">
                                                        Select your address
                                                    </span>
                                                </div>
                                            </a>
                                        </span>
                                        <input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection"
                                            type="hidden" value="add-new" className="nav-progressive-attribute" />
                                        <input data-addnewaddress="add-new" id="ubbShipTo" name="dropdown-selection-ubb" type="hidden"
                                            value="add-new" className="nav-progressive-attribute" />
                                        <input id="glowValidationToken" name="glow-validation-token" type="hidden"
                                            value="gJHN7x+xkf0zmdjWraiZFmCYupmGlL6hOKuy4ikAAAAMAAAAAGGTjaNyYXcAAAAA"
                                            className="nav-progressive-attribute" />
                                    </div>

                                    <div id="nav-global-location-toaster-script-container" className="nav-progressive-content">
                                    </div>

                                </div>
                                <div className='nav-fill'>

                                    <div id="nav-search">
                                        <div id="nav-bar-left"></div>
                                        <form id="nav-search-bar-form" accept-charset="utf-8" action="/s/ref=nb_sb_noss"
                                            className="nav-searchbar nav-progressive-attribute" method="GET" name="site-search" role="search">

                                            <div className="nav-left">
                                                <div id="nav-search-dropdown-card">

                                                    <div className="nav-search-scope nav-sprite">
                                                        <div className="nav-search-facade" data-value="search-alias=aps">
                                                            <span id="nav-search-label-id" className="nav-search-label nav-progressive-content">All</span>
                                                            <i className="nav-icon"></i>
                                                        </div>
                                                        <span id="searchDropdownDescription" className="nav-progressive-attribute">Select
                                                            the department you want to search in</span>
                                                        <select aria-describedby="searchDropdownDescription"
                                                            className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
                                                            data-nav-digest="MBo71g7O8JFCpFuPONu0m0ujMQ8=" data-nav-selected="0" id="searchDropdownBox"
                                                            name="url"  tabindex="0" title="Search in">
                                                            <option selected="selected" value="search-alias=aps">All</option>
                                                            <option value="search-alias=audible">All Departments</option>
                                                            <option value="search-alias=stripbooks">Books</option>

                                                            <option value="search-alias=mobile">Cell Phones & Accessories</option>
                                                            <option value="search-alias=fashion">Clothing, Shoes & Jewelry</option>

                                                            <option value="search-alias=computers">Computers</option>

                                                            <option value="search-alias=electronics">Electronics</option>

                                                            <option value="search-alias=grocery">Grocery & Gourmet Food</option>

                                                            <option value="search-alias=garden">Home & Kitchen</option>

                                                            <option value="search-alias=mi">Musical Instruments</option>

                                                            <option value="search-alias=toys-and-games">Toys & Games</option>

                                                            

                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="nav-fill">
                                                <div className="nav-search-field ">
                                                    <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off"
                                                        placeholder="" className="nav-input nav-progressive-attribute" dir="auto" tabindex="0"
                                                        aria-label="Search" />
                                                </div>
                                                <div id="nav-iss-attach"></div>
                                            </div>
                                            <div className="nav-right">
                                                <div className="nav-search-submit nav-sprite">
                                                    <span id="nav-search-submit-text"
                                                        className="nav-search-submit-text nav-sprite nav-progressive-attribute" aria-label="Go">
                                                        <input id="nav-search-submit-button" type="submit" className="nav-input nav-progressive-attribute"
                                                            value="Go" tabindex="0" />
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='nav-right'>
                                    <div id='nav-tools' className="layoutToolbarPadding">


                                        <a href="" id="icp-nav-flyout" className="nav-a nav-a-2 icp-link-style-2"
                                            aria-label="Choose a language for shopping.">
                                            <span className="icp-nav-link-inner">
                                                <span className="nav-line-1">
                                                </span>
                                                <span className="nav-line-2">
                                                    <span className="icp-nav-flag icp-nav-flag-us"></span>
                                                    <span className="nav-icon nav-arrow"></span>
                                                </span>
                                            </span>
                                        </a>


                                        <a href="" className="nav-a nav-a-2   nav-progressive-attribute" data-nav-ref="nav_ya_signin"
                                            data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-accountList" tabindex="0"
                                            data-csa-c-type="link" data-csa-c-slot-id="nav-link-accountList" data-csa-c-content-id="nav_ya_signin"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="nav-line-1-container"><span id="nav-link-accountList-nav-line-1"
                                                className="nav-line-1 nav-progressive-content">Hello, {user ? user.displayName : 'Sign in'}</span></div>
                                            <span className="nav-line-2">Account & Lists<span className="nav-icon nav-arrow"></span>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            {user &&  <a href="" className="btn dropdown-item" id="drop-sign" onClick={(e)=>{
                                                    e.preventDefault()
                                                    firebase.auth().signOut()
                                                    navigate('/')
                                                }} >Sign Out</a> }
                        
                                            
                                            {!user && <div>
                                            <a href="" className="btn dropdown-item" id="drop-sign" onClick={(e)=>{
                                                e.preventDefault()
                                                navigate('/login')
                                            }} >Sign In</a>
                                            <br />
                                            <p><span className='new-customer' >New customer? <a href="dropdown-item"
                                              className='start-here' onClick={(e)=>{
                                                e.preventDefault()
                                                navigate('/signup')
                                            }} >Start here.</a></span></p>
                                            </div>}
                                        </div>


                                        <a href="" className="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" tabindex="0">
                                            <span className="nav-line-1">Returns</span>
                                            <span className="nav-line-2">& Orders</span>
                                        </a>



                                        <a href="" aria-label=" items in cart" className="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
                                            <div id="nav-cart-count-container">
                                                <span id="nav-cart-count" aria-hidden="true"
                                                    className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content"></span>
                                                <span className="nav-cart-icon nav-sprite"></span>
                                            </div>
                                            <div id="nav-cart-text-container" className=" nav-progressive-attribute">
                                                <span aria-hidden="true" className="nav-line-1">

                                                </span>
                                                <span aria-hidden="true" className="nav-line-2">
                                                    Cart
                                                    <span className="nav-icon nav-arrow"></span>
                                                </span>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>
                            <div id='nav-main' className='nav-sprite'>
                                <div className='nav-left'>


                                    <div className="wrapper">


                                        <nav className="sidebar">


                                            <div className="dismiss">
                                                <i className="fas fa-arrow-left"></i>
                                            </div>

                                            <div className="sidebar-header">
                                                <h4 className="sidebar-user"><img src={userLogo} className='user-logo'
                                                    alt="" /> Hello, {user ? user.displayName : 'Sign in'}</h4>
                                            </div>
                                            <div className="sidebar-section">
                                                <h4 className="sidebar-text">Shop By Department</h4>
                                                <hr />

                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Cell Phones &
                                                        Accessories</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Clothing, Shoes &
                                                        Jewelry</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Electronics</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Computers</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Grocery & Gourmet
                                                        Food</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Home & Kitchen</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Musical Instruments</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Toys & Games</span></a>
                                                </div>
                                                <br />
                                                <div className="sidebar-content">
                                                    <a href="" className='sidebar-content-products'><span className="sidebar-con">Books</span></a>
                                                </div>

                                            </div>


                                        </nav>



                                        <div className="overlay"></div>


                                        <div className="content">




                                            <a id="nav-hamburger-menu" className="open-menu" role="button" aria-label="Open Menu"
                                                data-csa-c-type="widget" data-csa-c-slot-id="HamburgerMenuDesktop"
                                                data-csa-c-interaction-events="click">
                                                <i className="hm-icon nav-sprite"></i>
                                                <span className="hm-icon-label">All</span>
                                            </a>



                                        </div>


                                    </div>






                                </div>
                                <div className='nav-fill'>


                                    <div id="nav-shop">
                                    </div>
                                    <div id='nav-xshop-container'>
                                        <div id='nav-xshop' className="nav-progressive-content">

                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_0"
                                                data-csa-c-content-id="nav_cs_giftfinder_4aad52593b9d4c0892574c42a75a9efd">Electronics</a>

                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_1"
                                                data-csa-c-content-id="nav_cs_bestsellers_8a080d3d7b55497ea1bdd97b7cff8b7b">Smartphones</a>



                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_3"
                                                data-csa-c-content-id="nav_cs_customerservice_02b048349c1346189acd49260ffb561e">Home Appliances</a>

                                            <a href="" className="nav-a  " data-ux-jq-mouseenter="true" id="nav-link-prime" tabindex="0"
                                                data-csa-c-type="link" data-csa-c-slot-id="nav-link-prime"
                                                data-csa-c-content-id="nav_cs_primelink_nonmember_4f162594c63141e596796a3b01e2f9e4"><span>Grocery</span><span
                                                    className="nav-icon nav-arrow"></span></a>




                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_7"
                                                data-csa-c-content-id="nav_cs_books_2ed85a0fb54a4598ba909c22690d166e">Books</a>



                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_10"
                                                data-csa-c-content-id="nav_cs_fashion_7e8935e212054f589ad3339d12b23b84">Fashion</a>




                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_16"
                                                data-csa-c-content-id="nav_cs_shoppertoolkit_8a71064d19824c0189a2111e6fc0a66f">Toys & Games</a>

                                            <a href="" className="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_17"
                                                data-csa-c-content-id="nav_cs_pc_ce64abde4be247adba1f63e430850918">Computers</a>



                                        </div>
                                    </div>

                                </div>
                                <div className='nav-right'>


                                </div>
                            </div>

                            <div id='nav-subnav-toaster'></div>


                            <div id="nav-progressive-subnav">

                            </div>


                        </div>




                    </header>





                </div>
            </div>
        </div>
    )
}

export default Navbar
