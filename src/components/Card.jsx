import React from 'react';
// import './styles/card.css'

const Card = ({ item, index }) => {
    return (
        <div>
            <div class="card" id='cards'>
                <img src={item.image } class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"><b>Course :</b> { item.head}</h5>
                    <p class="card-text"><b>Content :</b>{ item.content}</p>
                    <p class="card-text"><small class="text-body-secondary">{item.date} { item.month}</small></p>
                    </div>
            </div>
        </div>


    );
};

export default Card;