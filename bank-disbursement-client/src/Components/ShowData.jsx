import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div className="container mt-4 border">
      <h2 className=" container mb-3">
        <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
           Back
        </button>
        </div>
        Details for ID: {id}

      
      </h2>
      
      <table className="table table-bordered table-striped ">
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
