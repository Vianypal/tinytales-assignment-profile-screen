import React from 'react'
import './Profile.css';
import sirphoto from '../../Asset/anuj sir.jpg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Link } from '@mui/material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
 import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
const Profile = () => {
  return (
    <div className='parent'>
      <div className="pic">
        <img src="https://en-media.thebetterindia.com/uploads/2022/08/Untitled-design-2022-08-27T121008.682-1661584220.jpg" alt="" />
      </div>
      <div className="pic2">
        <div className="pic2left"> <img src={sirphoto} alt="" /></div>
        <div className="pic2right">
            <div className="pic2rightup">
            <h2>Anuj gosalia</h2>
            <CheckCircleIcon/>
            <DiamondIcon/>
            </div>
            <div className="pic2rightdow">
                <div className="pic2rightd1">
                    <button>6482</button>
                    <p>Followers</p>
                </div>
                <div className="pic2rightd2">
                    <button>216</button>
                    <p>Following</p>
                </div>
            </div>

           
        </div>
       
        </div>
        <div className="pic3">
            <div className="pic3f1">
                <p className='para1'>
                   Co-founder & CEO at Terribly Tiny Tales <br />
                   
                </p>
                <p className='para2'> http://www.instagram.com/anujhosalia</p>
                
                    
                
            </div>
            <div className="pic3f2">

            </div>
        </div>
        <div className="pic4">
            
             <StarsRoundedIcon style={{color:"red"}}/>
                <p>125</p>
                <ThumbUpAltRoundedIcon style={{color:"yellow"}}/>
                <p>12</p>
               <VisibilitySharpIcon style={{color:"grey"}}/>
                <p>57.8K</p>
               <FavoriteRoundedIcon style={{color:"red"}}/>
                <p>26.0K</p>
            
        </div>
    </div>
  )
}

export default Profile
