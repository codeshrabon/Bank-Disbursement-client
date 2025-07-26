import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDataForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    account_name: "",
    loan_account_number: "",
    disbursement_date: "",
    amount: "",
    rate_of_interest: "",
    tenure: "",
    type_of_loan: "",
    eligible_security_value: "",
    security_coverage: "",
    security_details_as_per_sanction: "",
    client_identification_done_with_varification: false,
    guarantor_identification_done_with_verification: false,
    fund_utilization_ensured: false,
    signal_borrower_exposure_limit: "",
    compliance_with_credit_policy: false,
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/disbursement/addNewInfo", formData);
      alert("Data added successfully!");
      navigate("/"); // redirect to list or home
    } catch (err) {
      alert("Error adding data.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Add New Disbursement Info</h2>
      
      <label>Account Name:
      <input name="account_name" value={formData.account_name} onChange={handleChange} required />
        </label>
      <label>Loan Account Number:
      <input name="loan_account_number" value={formData.loan_account_number} onChange={handleChange} required />
        </label>
      <label>Disbursement Date:
      <input type="date" name="disbursement_date" value={formData.disbursement_date} onChange={handleChange} required />
        </label>
      <label>Amount:
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>
      <label>Rate of Interest:
      <input type="number" name="rate_of_interest" value={formData.rate_of_interest} onChange={handleChange} required />
        </label>
      <label>Tenure:
      <input name="tenure" value={formData.tenure} onChange={handleChange} required />
        </label>
      <label>Type of Loan:
      <input name="type_of_loan" value={formData.type_of_loan} onChange={handleChange} required />
        </label>
      <label>Eligible Security Value:
      <input type="number" name="eligible_security_value" value={formData.eligible_security_value} onChange={handleChange} />
        </label>
      <label>Security Coverage:
      <input type="number" name="security_coverage" value={formData.security_coverage} onChange={handleChange} />
        </label>
      <label>Security Details:
      <input name="security_details_as_per_sanction" value={formData.security_details_as_per_sanction} onChange={handleChange} />
        </label>
      <label>Client Verification Done:
      <input type="checkbox" name="client_identification_done_with_varification" checked={formData.client_identification_done_with_varification} onChange={handleChange} />
        </label>
      <label>Guarantor Verification Done:
      <input type="checkbox" name="guarantor_identification_done_with_verification" checked={formData.guarantor_identification_done_with_verification} onChange={handleChange} />
        </label>
      <label>Fund Utilization Ensured:
      <input type="checkbox" name="fund_utilization_ensured" checked={formData.fund_utilization_ensured} onChange={handleChange} />
        </label>
      <label>Borrower Exposure Limit:
      <input type="number" name="signal_borrower_exposure_limit" value={formData.signal_borrower_exposure_limit} onChange={handleChange} />
        </label>
      <label>Compliant with Credit Policy:
      <input type="checkbox" name="compliance_with_credit_policy" checked={formData.compliance_with_credit_policy} onChange={handleChange} />
        </label>
      <label>Comment:
      <textarea name="comment" value={formData.comment} onChange={handleChange} />
        </label>
      <br />
      <button type="submit">Add Info</button>
    </form>
  );
}

export default AddDataForm;
