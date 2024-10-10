import React from 'react';
import Card from './Card';

const All = ({ data }) => {
    return (
        <div>
            <div>
                <h1 className='heading'>All Courses are here Go and Check it out</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                {data.map((item, index) => {
                    return (
                        <>
                            <Card item={item} index={index} />

                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default All;