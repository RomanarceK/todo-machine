import React from "react";
import '../../css/index.css'

function Loader() {
    return(
        <div className="modal-bg">
            <div className="lds-ring">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export { Loader }