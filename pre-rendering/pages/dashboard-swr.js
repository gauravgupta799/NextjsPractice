import useSwr from 'swr';

const DashboardSwr = () => {

    const fetcher = async()=>{
        const response  = await fetch("http://localhost:4000/dashboard")
        const data = await response.json();
        return data;
    }
    const {data, error } = useSwr("dashboard", fetcher);

    if(error) return <h2>An error has occured.</h2>
    if(!data) return <h2>Loading....</h2>
  return (
    <div>
        <h1>Fetching data by using SWR package</h1>
        <h2>Posts: {data.posts}</h2>
        <h2>Likes: {data.likes}</h2>
        <h2>Followers: {data.followers}</h2>
        <h2>Following: {data.following}</h2>  
    </div>
  )
}

export default DashboardSwr