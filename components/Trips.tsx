import { tripsType } from "../utils/dataTypes"

const Trips = ({ trips }: tripsType) => {
  return (
    <div className='text-center m-4 bg-slate-100 rounded-lg'>
      <h1 className='text-5xl text-yellow-500 p-4'>Trips</h1>
      <ul className='text-3xl text-black grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {trips.map(trip => (
          <li key={trip.trip_id} className='bg-slate-200 p-4 m-4'>
            <p>{trip.time}</p>
            <p>{trip.driver_id}</p>
            <p>{trip.start_pos}</p>
            <p>{trip.end_pos}</p>
            <p>{trip.driver_id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Trips