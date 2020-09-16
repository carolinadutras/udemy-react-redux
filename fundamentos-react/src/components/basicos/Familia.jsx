import React ,{cloneElement}from "react";
import FamiliaMembro from "./FamiliaMembro";
export default (props) => {
    console.log(typeof props.children.map)
  return (
    <div>
        
        {props.children.map((child, i)=> {
            return cloneElement(child, {...props, key: i })
        })}


        {/* {cloneElement(props.children, props)} */}
        {/* {Array(10).fill(7)} */}
        {/* {30*10} */}
      {/* <FamiliaMembro nome='Angela' sobrenome=
      {props.sobrenome}/>
      <FamiliaMembro nome='Carol' {...props}/>
      <FamiliaMembro nome= 'Duda' sobrenome='Chiosi'/> */}
    </div>
  );
};
