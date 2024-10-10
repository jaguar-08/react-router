import React from 'react';
import Card from './Card';

const Fullstack = ({ data }) => {
    const fullStackData = data.filter((item)=>item.head === 'Full Stack Development')
    return (
        <div>

            <h1>These are the Full Stack Development Courses</h1>
            {fullStackData.map((item, index) => {
                return (
                    <>
                        
                            

                        <Card item={item} index={ index} />
                    
                    </>
                )
            })}
        </div>
    );
};

export default Fullstack;