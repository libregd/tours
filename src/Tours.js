import React from "react";
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
    return (
        <section className="container">
            <h1 className="center">our tours</h1>

            <div class="row">
                {tours.map((tour) => {
                    // every item need a key (just a standary), Tour.js need 6 paramater
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                })}
            </div>

        </section>
    )
}

export default Tours;