import React from "react";

const Article = ({ title, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="w-86 h-44 overflow-hidden rounded-lg group-hover:scale-105">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xs font-bold text-blue-500 p-4">{title}</h3>
        </div>
    );
};

export default Article;
