import React, {useState} from 'react'
import HomeM from './Home.module.css'
import { FiChevronRight , FiChevronLeft,  } from 'react-icons/fi'
function Home() {
    const [openImg , setOpenImg] = useState(false)
    return (

        <div className={HomeM.header}>
            <div className={HomeM.home__header}>
                <button className={HomeM.btn1} onClick={() => setOpenImg(openImg)}><FiChevronLeft/></button>   
                <button className={HomeM.btn2}><FiChevronRight/></button>
                <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
                </div>
         <div className={HomeM.oneSection}>
             <div className={HomeM.AmazonBasic}>
                 <h3>Amazon Basic</h3>
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" alt="" />
                 <p><a href="#">See more </a></p>
             </div>
             <div className={HomeM.AmazonBasic2}>
                 <h3>Easy returns</h3>
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" />
                 <p><a href="#">Learn more </a></p>
             </div>
             <div className={HomeM.AmazonBasic3}>
                 <h3>Get fit at home</h3>
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg" alt="" />
                 <p><a href="#">Explore now </a></p>
             </div>
         </div>
         <div className="twoSection">
             <div className="oculus">
                 <h3>Oculus</h3>
                 <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg" alt="" />
                 <p><a href="#">Shop now</a></p>
             </div>
         </div>
         

        </div>
    )
}

export default Home
