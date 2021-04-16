import React from 'react'
import HouseImageCSS from './HouseImages.module.css'

const HouseImages = props => {
    return(
        <div className={HouseImageCSS.container}>
            <img src={props.listedHouseURL} width="100%" />
            <div className={HouseImageCSS.gender}>
                {props.gender}
            </div>
            <div className={HouseImageCSS.seen}>
                {props.IsSeen}
            </div>
        </div>
    );
}

export default HouseImages;
