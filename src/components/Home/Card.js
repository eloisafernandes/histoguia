import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="bg-[#f8f8f8] p-4 w-full h-auto rounded-[25px] shadow-md">
            {children}
        </div>
    );
};

export default Card;
