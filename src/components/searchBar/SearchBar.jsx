import React from "react";
import MyButton from "../button/MyButton";

const SearchBar = ({...props}) => {

    
    return (
        <div className="search-bar">
            <div>
                <input {...props} type='text' className="search-input" />
            </div>
            <MyButton>Search</MyButton>
        </div>
    );
};

export default SearchBar;