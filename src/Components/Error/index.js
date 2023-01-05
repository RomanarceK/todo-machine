import React from "react";

function Error({error}) {
    return(
        <div className="error">
            <img className="error-img" src="./error.png"/>
            <h3>Error!</h3>
            <p>{error}</p>
        </div>
    );
}

export { Error }