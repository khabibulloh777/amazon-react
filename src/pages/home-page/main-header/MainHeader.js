import React, { useState } from 'react';
import classes from './MainHeader.module.css';
import logoAmazon from '../../../assets/amazon_logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { SELECT_DATA } from '../../../data/SELECT_DATA';
import { GrCart } from 'react-icons/gr'
function MainHeader() {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <div className={classes.mainheader}>
            <div className={classes.mainheader__logo}>
                <img src={logoAmazon} alt="Amazon logo white" className={classes.mainheader__logoimage}/>
            </div>
            <div className={classes.mainheader__delivery}>
                <IoLocationOutline/>
                <div className={classes.mainheader__deliverycontainer}>
                    <p className={classes.mainheader__deliverytext}>Deliver to</p>
                    <h5 className={classes.mainheader__deliverycountry}>Uzbekistan</h5>
                </div>
            </div>
            <div style={searchActive ? {border: "4px solid var(--amazon-color)"} : {border: "4px solid transparent"}} className={classes.mainheader__searchbar}>
                <div className={classes.mainheader__searchbarContainer}>
                    <select className={classes.mainheader__select} id="mainheader__select">
                        {
                            SELECT_DATA?.map(option => (
                                <option key={option.id} value={option?.optionName}>
                                    {option?.optionName}
                                </option>
                            ))
                        }
                    </select>
                    <input onFocus={() => setSearchActive(true)} onBlur={() => setSearchActive(false)} type="text" placeholder="Search" className={classes.search__input}/>
                    <button className={classes.search__button}><FiSearch/></button>
                </div>
            </div>
            <div className={classes.language}>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" className={classes.language__image}/>
                <RiArrowDropDownFill/>
                <div className={classes.language__options}>
                      
                </div>
            </div>
            <div className={classes.signIn}>
            <span>Hello, Sign In   </span> 
                 <span className={classes.end}>Account & List <FiChevronDown/></span>
        
            </div>
             <div className={classes.orders}>
                 <span>Returns</span>
                 <p></p>
                 <span className={classes.end}>& Orders</span>
             </div>
             <div className={classes.cart}>
               
                 <span className={classes.carte}> 
                    0
                    <GrCart/> 
                 </span>
                 <p className={classes.pNmae}>Cart</p>
             </div>
             
        </div>
    )
}

export default MainHeader