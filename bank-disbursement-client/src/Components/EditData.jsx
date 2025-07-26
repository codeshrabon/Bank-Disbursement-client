import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';

const EditData = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then(res => {
        setFormData(res.data);
        setOriginalData(res.data);
        console.log(res.data)
      })
      .catch(err => console.error("Failed to fetch data:", err));
  }, [id]);
  /* axios.put(`http://localhost:8080/updateInfo/${id}`, formData)
  .then(res => {
    alert("Updated successfully");
    console.log("Updated data:", res.data);  // here is your updated data returned by backend
  })
  .catch(err => alert("Update failed")); */

   /* useEffect(() => {
    axios.get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.error(err));
  }, [id]); */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.put(`http://localhost:8080/api/disbursement/updateInfo/${id}`, formData)
    .then(res => {
      alert("Updated successfully");
      setFormData(res.data);  // update form data with fresh backend response
      setOriginalData(res.data); // also update original data to reflect changes
    })
    .catch(err => alert("Update failed"));
};


  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      {/* Left Side: Original Data */}
      <div>
        <h3>Previous Data</h3>
        <pre style={{ background: '#f3f3f3', padding: '10px' }}>
          {JSON.stringify(originalData, null, 2)}
        </pre>
      </div>

      {/* Right Side: Edit Form */}
      <div>
        <h3>Edit Data</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label>Account Name:
          <input name="account_name" value={formData.account_name || ""} onChange={handleChange} />
          </label>
          <label>Loan Account Number:
          <input name="loan_account_number" value={formData.loan_account_number || ""} onChange={handleChange} />
          </label>
          <label>Disbursement Date:
          <input type="date" name="disbursement_date" value={formData.disbursement_date || ""} onChange={handleChange} />
          </label>
          <label>Amount:
          <input type="number" name="amount" value={formData.amount || ""} onChange={handleChange} />
          </label>
          <label>Rate of Interest:
          <input type="number" step="0.1" name="rate_of_interest" value={formData.rate_of_interest || ""} onChange={handleChange} />
          </label>
          <label>Tenure:
          <input name="tenure" value={formData.tenure || ""} onChange={handleChange} />
          </label>
          <label>Type of Loan:  
          <input name="type_of_loan" value={formData.type_of_loan || ""} onChange={handleChange} />
          </label>
          <label>Eligible Security Value:
          <input type="number" name="eligible_security_value" value={formData.eligible_security_value || ""} onChange={handleChange} />
          </label>
          <label>Security Coverage:
          <input type="number" step="0.01" name="security_coverage" value={formData.security_coverage || ""} onChange={handleChange} />
          </label>
          <label>Security Details:
          <input name="security_details_as_per_sanction" value={formData.security_details_as_per_sanction || ""} onChange={handleChange} />
          </label>
          <label>Client ID Verified:
          <input type="checkbox" name="client_identification_done_with_varification" checked={formData.client_identification_done_with_varification || false} onChange={handleChange} />
          </label>
          <label>Guarantor ID Verified:
          <input type="checkbox" name="guarantor_identification_done_with_verification" checked={formData.guarantor_identification_done_with_verification || false} onChange={handleChange} />
          </label>
          <label>Fund Utilization Ensured:
          <input type="checkbox" name="fund_utilization_ensured" checked={formData.fund_utilization_ensured || false} onChange={handleChange} />
          </label>
          <label>Signal Borrower Exposure Limit:
          <input type="number" name="signal_borrower_exposure_limit" value={formData.signal_borrower_exposure_limit || ""} onChange={handleChange} />
          </label>
          <label>Compliance with Credit Policy:
          <input type="checkbox" name="compliance_with_credit_policy" checked={formData.compliance_with_credit_policy || false} onChange={handleChange} />
          </label>
          <label>Comment:
          <textarea name="comment" value={formData.comment || ""} onChange={handleChange} />
          </label>
          <button type="submit" style={{ marginTop: '3px' }}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditData;
