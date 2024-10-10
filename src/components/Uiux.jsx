import React from 'react';
import Card from './Card';

const Uiux = ({ data }) => {
    const uiuxData = data.filter((item) => item.head ==='UI/UX Design')
    return (
        <div>
            <h1>UI UX Design Courses</h1>
            {uiuxData.map((item, index) => {
                return (
                    <>
                    <Card item={item} index={index}  />
                    </>
                )
            })}
        </div>
    );
};

export default Uiux;