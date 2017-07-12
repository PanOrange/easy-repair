import React from 'react';

export const Avatar = (props) => {
    return (
        <div className="avatar-holder">
            <img className="avatar" src={props.photo} alt=""/>
        </div>
    );
};

export const Rate = (props) => {
    const WIDTH = props.rate * 10 + '%';
    return (
        <div className="rate">
            <div className="rate-number">
                {props.rate} / 10
            </div>
            <ul className="rate-line">
                <li /><li /><li /><li /><li /><li /><li /><li /><li /><li /><li />
                <div className="rate-range" style={{ left: WIDTH }}>
                </div>
            </ul>
        </div>
    );
};