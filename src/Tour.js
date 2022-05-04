import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                    <span className="card-title">{name}</span>
                    <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => removeTour(id)} ><i className="material-icons">delete</i></button>
                </div>
                <div className="card-content">
                    <h6>${price}</h6>
                    <p>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <button className="waves-effect waves-teal btn-flat btn-small" onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less' : '  read more'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tour