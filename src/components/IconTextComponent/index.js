import React from 'react'

const Deposit = props => {
    return (
        <div>
            <span>
                <img src={props.src} width='auto' height='19' />
                {props.info}
            </span>
            
        </div>
    );
}

export default Deposit;