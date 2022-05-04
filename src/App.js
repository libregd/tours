import React, { useState, useEffect } from "react";
import Loading from './Loading'
import Tours from './Tours'

//const urlA = 'https://course-api.com/react-tours-project'
//const urlB = 'https://github.com/libregd/warehouse/blob/main/john-smilga/tour.json?raw=true'
const url = 'https://raw.githubusercontent.com/libregd/warehouse/main/john-smilga/tour.json'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  // remove selected item , reset the tour items
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }
  // good fetch example ,use try catch to keep good running for moudle flow.
  const fetchTours = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const tours = await resp.json()
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  /* useeffect init the fetchAPI first, the 2nd pramater is [] 
   empty array that means website render first time, I will run the 1st pramater */
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <h4 className="center header">
          no tours left
        </h4>
        <div className="center" onClick={() => fetchTours()}>
          <button className="waves-effect waves-light btn">
            refresh
          </button>
        </div>
      </main>
    )
  }

  // everything is ok, return the turely data
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
