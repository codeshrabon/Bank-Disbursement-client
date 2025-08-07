import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/disbursement/updateInfo/${id}`, formData)
      .then(() => navigate("/"))
      .catch(() => alert("Update failed"));
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h3 className="text-center mb-4">Edit Data</h3>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "700px" }}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="mb-3 row" key={key}>
            <label className="col-sm-5 col-form-label">
              {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}:
            </label>
            <div className="col-sm-7">
              {typeof value === "boolean" ? (
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={key}
                      checked={value === true}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, [key]: true }))
                      }
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={key}
                      checked={value === false}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, [key]: false }))
                      }
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              ) : key.toLowerCase().includes("date") ? (
                <input
                  type="date"
                  className="form-control"
                  name={key}
                  value={value || ""}
                  onChange={handleChange}
                />
              ) : key.toLowerCase().includes("comment") ? (
                <textarea
                  className="form-control"
                  name={key}
                  value={value || ""}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={typeof value === "number" ? "number" : "text"}
                  className="form-control"
                  name={key}
                  value={value || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button className="btn btn-success" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
