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
        const response = await axios.get(
          "http://localhost:8080/api/disbursement/getAll"
        );
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
    <div className="container" style={{marginLeft:'20px', padding:'10px'}}>
      {/* adding add button  */}
      <div className= "d-flex justify-content-start mb-3 " >
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => navigate("/add")}
        >
          ➕ Add New Data
        </button>
      </div>

      {data && data.length > 0 ? (
        <div className="container text-center">
          <div className="row justify-content-start">
            <table
              className="table table-bordered table-striped-columns"
              border="2"
              cellPadding={10}
              style={{marginRight:'10px',padding:'20px'}}
            >
              <thead class="table-dark">
                <tr className="text-center align-middle">
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
                  <tr className="text-center align-middle" key={item.id}>
                    <td>{item.account_name}</td>
                    <td>{item.amount}</td>
                    <td>{item.client_identification_done_with_varification}</td>
                    <td>{item.comment}</td>
                    <td>{item.compliance_with_credit_policy}</td>
                    <td>{item.disbursement_date}</td>
                    <td>{item.eligible_security_value}</td>
                    <td>{item.fund_utilization_ensured}</td>
                    <td>
                      {item.guarantor_identification_done_with_verification}
                    </td>
                    <td>{item.loan_account_number}</td>
                    <td>{item.rate_of_interest}</td>
                    <td>{item.security_coverage}</td>
                    <td>{item.security_details_as_per_sanction}</td>
                    <td>{item.signal_borrower_exposure_limit}</td>
                    <td>{item.tenure}</td>
                    <td>{item.type_of_loan}</td>
                    <td className="text-center align-middle">
                      <ActionButtons id={item.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No data here</p>
      )}
    </div>
  );
}

export default FetchData;
