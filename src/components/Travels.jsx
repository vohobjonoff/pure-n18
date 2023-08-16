
import Travel from './Travel';

export default function Travels({ travels, removeItem }) {
    


  return (
      <div>
        
          {travels.map((travel) => {
              return (
                  <Travel key={travel.id} {...travel} removeItem={removeItem}  />
              )
          } )}
    </div>
  )
}
