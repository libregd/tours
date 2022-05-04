import React, { useState } from "react";
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  // remove selected item , reset the tour items
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

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
        <h4>
          no tours left
        </h4>
        <div className="mt-3 sm:mt-0 sm:ml-3" onClick={() => fetchTours()}>
          <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            refresh
          </a>
        </div>
      </main>
    )
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
