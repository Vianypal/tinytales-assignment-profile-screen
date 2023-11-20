import React from 'react';
import './Tab1.css';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
const Tab = ({ data }) => {
  return (
    <div className="box" id={data.id} >
      <div className="box1">
        <h2>{data.head}</h2>
        <RecommendRoundedIcon style={{color:'#dde106'}} />
      </div>
      {data["content-type"] === "paragraph" &&
        <>
         
            {data.content.map(para => (
              <div className='para'><p>{para}</p></div>
            ))}
          
          <div className="bot">
          <p style={{marginLeft:"0px"}}><span style={{color:"aqua"}}>{data.base1}</span>{data.base2}</p>
            <p>{data.base3}</p>
          </div>
        </>
      }

      {
        data["content-type"] === "List" && (
          <div className='para'>
            <p>{data["List-heading"]}</p>
            <ul>
            {data.content.map((item, index) => (
              <li key={index}>{"- "}{item}</li>
            ))}
            </ul>
            <div className="bot">
            <p style={{marginLeft:"1px"}}><span style={{color:"aqua"}}>{data.base1}</span>{data.base2}</p>
            <p>{data.base3}</p>
          </div>
          </div>
        )
      }

    </div>
  );
}

export default Tab;