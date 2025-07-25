import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowData() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!info) return <div>Loading...</div>;

  return (
    <div>
      <h2>Data for ID: {id}</h2>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
}

export default ShowData;
