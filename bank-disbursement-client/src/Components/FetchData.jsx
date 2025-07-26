import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./ActionButtons";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/disbursement/getAll");
        console.log(response);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* adding add button  */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/add')}>➕ Add New Data</button>
      </div>

      {data && data.length > 0 ? (
        <table border="2" cellPadding={10}>
          <thead>
  <tr>
    <th>Account Name</th>
    <th>Amount</th>
    <th>Client Verification</th>
    <th>Comment</th>
    <th>Compliance</th>
    <th>Disbursement Date</th>
    <th>Security Value</th>
    <th>Fund Utilization</th>
    <th>Guarantor Verification</th>
    <th>Loan Account</th>
    <th>Interest Rate</th>
    <th>Security Coverage</th>
    <th>Security Details</th>
    <th>Borrower Limit</th>
    <th>Tenure</th>
    <th>Loan Type</th>
    <th>Action</th>
  </tr>
</thead>

<tbody>
  
  {data.map((item) => (
    
    <tr key={item.id}>
      <td>{item.account_name}</td>
      <td>{item.amount}</td>
      <td>{item.client_identification_done_with_varification}</td>
      <td>{item.comment}</td>
      <td>{item.compliance_with_credit_policy}</td>
      <td>{item.disbursement_date}</td>
      <td>{item.eligible_security_value}</td>
      <td>{item.fund_utilization_ensured}</td>
      <td>{item.guarantor_identification_done_with_verification}</td>
      <td>{item.loan_account_number}</td>
      <td>{item.rate_of_interest}</td>
      <td>{item.security_coverage}</td>
      <td>{item.security_details_as_per_sanction}</td>
      <td>{item.signal_borrower_exposure_limit}</td>
      <td>{item.tenure}</td>
      <td>{item.type_of_loan}</td>
      <td><ActionButtons id={item.id} /></td>
    </tr>
    
    
  ))}
  
</tbody>

        </table>
      ) : (
        <p>No data here</p>
      )}
    </div>
  );
}

export default FetchData;
