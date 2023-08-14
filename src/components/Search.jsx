import React, { useState } from 'react';



export default function Search() {


    const [location, setLocation] = useState('Qatortol');

  


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
                  <input
                      id="location"
                      value={location}
                      placeholder="Location"
                      onChange={(e) => setLocation(e.target.value)}                    
                    />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
