import axios from "axios";


 const  fetchEvent  = async (id : number) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/events/${id}`);
    return response.data
  
}
export default fetchEvent;