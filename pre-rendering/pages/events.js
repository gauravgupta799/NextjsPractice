import React,{useState, useEffect} from 'react';
import {useRouter} from "next/router";

const url = "http://localhost:4000/events";

const EventsList = ({eventList}) => {
    const [events, setEvents] = useState(eventList);
    const [filterValue, setFilterValue] = useState("");
    const router = useRouter();

    useEffect(()=>{
        if(filterValue){
            fetchSportEvents(filterValue)
        }
    },[filterValue])

    const fetchSportEvents= async(value)=>{
        const res = await fetch(`${url}?category=${value}`);
        const data = await res.json();
        setEvents(data);
        router.push(`/events?category=${value}`, undefined, {
            shallow:true
        })
    }
    const filterOptionsArray = ["sports", "music","art", "food","technology", "books"]
   
  return (
    <div style={{margin:"20px"}}>
        <div style={{width:"50%", display:"flex", alignItems: "center" ,justifyContent:'space-between'}}>
          <h1>List of upcoming events</h1>
          {
            filterOptionsArray.map((option,i) =>{
                return(
                    <div key ={i}>
                        <button 
                        onClick={()=>setFilterValue(option)}
                        >
                        {option}
                        </button>
                    </div>
                )
            } )
          }
        </div><br/>
        <hr/> 
        {events.map((event) =>{
            return (
                <div key = {event.id}>
                    <h2>
                        {event.id} {event.title} | {event.category}
                    </h2>
                    <p>{event.description}</p> <hr/>
                </div>
            )
        })}
    </div>
  )
}

export default EventsList

export async function getServerSideProps(context){
    const {query} = context;
    const {category} = query;
    const queryString = category ? "category-sports": "";
    const response = await fetch(`${url}?${queryString}`);
    const data = await response.json();

    return {
        props:{
            eventList:data
        }
    }
}