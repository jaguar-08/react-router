import React from 'react';
import Card from './Card';

const Cyber = ({ data }) => {
    const cyberData = data.filter((item) => item.head ==='Cybersecurity')
    return (
        <div>
            <h1>Cyber Security Courses</h1>
            {cyberData.map((item, index) => {
                return (
                    <>
                        <Card item={ item}  index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default Cyber;