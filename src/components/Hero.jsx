import React from "react";
// internal style { camel saikatSamanta }

// npm i ---> yarn add
const Hero = (props) => {
    return (
        <>
            <div style={{ backgroundColor: 'cyan', color: 'black' }} className="hero" >
               {props.data}
                Tress and Plants are very important🌱
            </div>
        </>
    )
}
export default Hero;
//  npm i -g yarn