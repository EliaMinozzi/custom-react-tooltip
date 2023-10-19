import React from 'react';

const InfoIcon = (props) => (

  <svg
    x="0px"
    y="0px"
    id="Livello_1"
    data-name="Livello 1" 
    viewBox="0 0 54 54"
    width={props.width}
    height={props.height}
    fill={props.colorIndex}
    style={{
       width:`${props.width ? `${props.width}px`:'auto'}`,
       height:`${props.height}px`,
    //   color:${props.colorIndex},
    }}
  >
    <g>
      <path d="m26.9,24.6c-1.4,0-2.54,1.14-2.54,2.54v11.95c0,1.4,1.14,2.54,2.54,2.54s2.54-1.14,2.54-2.54v-11.96c0-1.4-1.14-2.54-2.54-2.54Z" />
      <path d="m26.9,14.11c-1.91,0-3.47,1.55-3.47,3.46s1.55,3.47,3.47,3.47,3.47-1.55,3.47-3.47-1.55-3.46-3.47-3.46Z" />
      <path d="m27,5.68c11.76,0,21.32,9.56,21.32,21.32s-9.56,21.32-21.32,21.32S5.68,38.76,5.68,27,15.24,5.68,27,5.68m0-5C12.46.68.68,12.46.68,27s11.78,26.32,26.32,26.32,26.32-11.78,26.32-26.32S41.54.68,27,.68h0Z" />
    </g>
  </svg>

);
export default InfoIcon;
