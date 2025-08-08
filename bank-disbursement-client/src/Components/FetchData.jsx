import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./ActionButtons";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/disbursement/getAll"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Pagination logic
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      
      <div className="d-flex justify-content-start mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/add")}
        >
          Add New Data +
        </button>
      </div>

      {currentItems.length > 0 ? (
        <div className="container-fluid px-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped-columns text-center align-middle rounded">
              <thead className="table-dark">
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
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.account_name}</td>
                    <td>{item.amount}</td>
                    <td>
                      {item.client_identification_done_with_varification
                        ? "Yes"
                        : "No"}
                    </td>
                    <td>{item.comment}</td>
                    <td>{item.compliance_with_credit_policy}</td>
                    <td>{item.disbursement_date}</td>
                    <td>{item.eligible_security_value}</td>
                    <td>{item.fund_utilization_ensured ? "Yes" : "No"}</td>
                    <td>
                      {item.guarantor_identification_done_with_verification
                        ? "Yes"
                        : "No"}
                    </td>
                    <td>{item.loan_account_number}</td>
                    <td>{item.rate_of_interest}</td>
                    <td>{item.security_coverage}</td>
                    <td>{item.security_details_as_per_sanction}</td>
                    <td>{item.signal_borrower_exposure_limit}</td>
                    <td>{item.tenure}</td>
                    <td>{item.type_of_loan}</td>
                    <td>
                      <ActionButtons id={item.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {[...Array(totalPages).keys()].map((pageNum) => (
                  <button
                    key={pageNum + 1}
                    className={`btn mx-1 ${
                      currentPage === pageNum + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => paginate(pageNum + 1)}
                  >
                    {pageNum + 1}
                  </button>
                ))}

                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No data here</p>
      )}
    </div>
  );
}

export default FetchData;
