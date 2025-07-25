import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/disbursement/updateInfo/${id}`, formData)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>Account Name:</label>
      <input name="account_name" value={formData.account_name || ""} onChange={handleChange} />
      {/* Add other fields as needed */}
      <button type="submit">Update</button>
    </form>
  );
}

export default EditData;
