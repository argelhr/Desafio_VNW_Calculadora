

import { useState } from "react";

function Display(props) {

    return (
        <>
            <div className="display">
                <p>{props.valor}</p>
            </div>
        </>
    );
}

export default Display;