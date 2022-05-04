import React from "react";

const Loading = () => {
    return (
        <div className="container">
            <h1>&nbsp;</h1>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            <h1 className="header center  teal-text lighten-3">Loading.....</h1>
        </div>
    );
}
export default Loading;