import React from 'react';
import Card from './Card';

const DataScience = ({ data }) => {
    const datasciData = data.filter((item) => item.head ==='Data Science')
    return (
        <div>
            <h1>Data Science Courses</h1>
            {datasciData.map((item, index) => {
                return (
                    <>
                        <Card item={ item} index={index} />
                    </>
                )
            })}
        </div>
    );
};

export default DataScience;