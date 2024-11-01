import React from 'react';
import './../input.css';

function NewArrivals() {
    return (
        <div className="relative overflow-hidden py-10 new-arrivals"> 
            <div className="flex justify-center">
                <div className="relative">
                    <h2 className="text-5xl ">
                        <span className="slide-animation text-black-500">
                            <a href="/collections/new-arrivals-1">STREETWEAR BRAND LIMITED</a>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default NewArrivals;
