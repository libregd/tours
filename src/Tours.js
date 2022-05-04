import React from "react";
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="text-xl">our tours</div>

            <div class="row">
                {tours.map((tour) =>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                })}
            </div>

        </section>
    )
}

export default Tours;