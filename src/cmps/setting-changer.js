import React from 'react';

const SettingChanger = props => {
    return (
       <div class="setting-cont">
         <div id={props.sname + "-label"} style={props.labelColor}>{props.sname.charAt(0).toUpperCase() + props.sname.slice(1)} Length </div>
         <div class="setting-inner">
           <button id={props.sname + "-decrement"} style={props.visible} type="button" onClick={()=>props.changer(-1)} ><i className="fas fa-minus"></i></button>
           <label id={props.sname + "-length"} style={props.labelColor}> {props.setting}</label>
           <button id={props.sname + "-increment"} style={props.visible} type="button" onClick={()=>props.changer(1)} ><i className="fas fa-plus"></i></button>
         </div>
       </div>
    );
  };

export default SettingChanger;