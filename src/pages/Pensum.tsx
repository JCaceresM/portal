import React from 'react';

import { CustomButton } from '../AntDComponents';
import { getSessionInfo } from '../utils/session';

const Pensum  =(): React.ReactElement=>{

 
    const [pdf] = getSessionInfo()?.pdf||[]


  
    return (
      <CustomButton onClick={()=>{
        window.open(`http://127.0.0.1:1337${pdf?.url}`, "_blank");
      }}>
          Abrir Pensum
      </CustomButton>
    );
}

export default Pensum 