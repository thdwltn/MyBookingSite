import AddInfo from "./component/AddInfo";
import AddAppointment from "./component/AddAppointment";
import Search from "./component/Search";
import { useCallback, useEffect, useState } from "react";
import Header from "./component/Header";
import Aside from "./component/Aside";


function App() {
  const [list,setList] = useState([]);
  const [query,setQuery] = useState('');
  const [sort,setSort] = useState('people');

  const filterLists = list.filter(item => {
    return(
      item.people.toLowerCase().includes(query.toLowerCase())||

      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }).sort((a,b)=>{
      return(
          (sort === 'id' || sort === 'date') ?   a[sort] < b[sort] ? -1 : 1 : a[sort].toLowerCase() < b[sort].toLowerCase() ? -1 : 1 
        )
    });


  const fetchData = useCallback(
    ()=>{
      fetch(`./data.json`)
      .then(response => response.json())
      .then(data => setList(data))
    },[]
  )
  useEffect(
    fetchData,[fetchData]
  )



  return (
    <article>
      <Header />
      <Search 
        query = {query}
        onQueryChange = {(myQuery) => setQuery(myQuery)}
        sort = {sort}
        onSortChange = {(mySort) => setSort(mySort)}
      />
      <div id="under">
        <AddAppointment
        onSendAppointment={
         myAppointment => setList([...list,myAppointment])
          
        }
        lastId = {
          list.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max,0)
        }
        />
        <div id="list">
          <ul>
            {filterLists.map(
              (appointment)=>
              (<AddInfo 
              key={appointment.id}
              appointment={appointment}
              onDeleteAppoint={appointmentId => setList(
                list.filter(
                  appointment => appointment.id !== appointmentId
                )
              )}
              />
            ))}
            
          </ul>
        </div>
      </div>
      <Aside />
    </article>
  );
}

export default App;
