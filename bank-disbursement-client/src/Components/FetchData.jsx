import React, {useState, useEffect} from "react";
import axios from 'axios';
function FetchData(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:8080/api/disbursement/getAll');
                console.log(response);

                setData(response.data);
                setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false);

            }
        };

        fetchData();
    }, []);
    if(loading){
        return <div>Loading data...</div>
        {data.length > 0 ? (
            <ol>
                {data.map(item => (
                    <li key={item.id}></li>
                ))}
            </ol>
        ): (

        )}
    }
}


export default FetchData