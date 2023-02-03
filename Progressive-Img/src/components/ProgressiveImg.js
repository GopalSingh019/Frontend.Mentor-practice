import React, { useEffect, useState } from 'react';



function ProgressiveImg({src,falseImg}) {
    const [imgs,setImgs]=useState(falseImg || src);

    const imgclass=(imgs===falseImg)?'loading':'loaded';

    useEffect(()=>{
        const newimg=new Image();
        newimg.src=src;
        newimg.onload=()=>{
            setImgs(src);
        };
    },[]);

  return (
    <div>
        <img className={imgclass} src={imgs} width='1500' height='950'/>
    </div>
  )
}

export default ProgressiveImg