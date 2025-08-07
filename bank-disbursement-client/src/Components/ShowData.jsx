import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShowData() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  

  if (!info) return <div>Loading...</div>;

  const backToHome = () => {
    navigate(-1)
  }

  return (
    <div className="container mt-4 border">
      
      <div className=" container mb-3">
        <div className="d-flex justify-content-between align-items-center p-3">
          <button className=" btn btn-primary" onClick={backToHome}>Back</button>
          <h5 className="mb-0">ID: {id}</h5>
        </div>
        
        
        </div>
      
      <table className="table table-bordered table-striped">
        <tbody>
          {Object.entries(info).map(([key, value]) => (
            <tr key={key}>
              <th>{key.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase())}</th>
              <td>{value !== null ? value.toString() : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
