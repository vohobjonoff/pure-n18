import React, { useState } from 'react'

export default function Travel({id,title, body,removeItem}) {
    const [read, setRead] = useState(false);

  return (
      
          <div key={id}>
                      <h2>{title}</h2>

                      <p>{read ? `${body}` : body.slice(0,20)}</p>

                      <button onClick={() => setRead(!read)}>
                        {read ? 'less' : 'more'}
                      </button>
                      <button onClick={() => removeItem(id)}>remove</button>
                  </div>

  )
}
