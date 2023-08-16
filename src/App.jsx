/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/Loading";
import Travels from "./components/Travels";
import Modal from "./components/Modal";


// const url = 'https://course-api.com/react-tours-project'
const url = 'https://jsonplaceholder.typicode.com/posts'


const App = () => {

  const [loading, setLoading] = useState(false);
  const [travels, setTravels] = useState([]);
  const [modal, setModal] = useState(false);


  const removeItem = (id) => {
    const newItem = travels.filter((item) => item.id !== id);
    setTravels(newItem)
  }



  const fetchTours = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setLoading(false)
      setTravels(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <Loading />
  }




  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => setModal(!modal)}>
        {modal ? 'close' : 'open'}
      </button>
      {modal ? <Modal modal={modal} setModal={setModal} /> : <Travels travels={travels} removeItem={removeItem} />}
    </div>
  )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
