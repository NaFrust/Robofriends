import React from 'react';

const Card = ({name, email, id}) =>{
    return(
       <>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${id}"?150x150`} alt="Cara de robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    );
}

export default Card;