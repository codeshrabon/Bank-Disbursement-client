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
    comment: "",
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
      await axios.post(
        "http://localhost:8080/api/disbursement/addNewInfo",
        formData
      );
      alert("Data added successfully!");
      navigate("/"); // redirect to list or home
    } catch (err) {
      alert("Error adding data.");
      console.error(err);
    }
  };

  return (
    <div
      className="container mt-4"
      style={{ display: "flex", gap: "20px", padding: "10px" }}
    >
      <h2>Add New Info</h2>
      <div className="row col-md-7 mb-3 align-items-center">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "10px",
            marginLeft: "40px",
            padding: "25px",
          }}
        >
          <div className="row col-md-7 mb-3 align-items-center">
            <div className="col mb-3">
              <label className="form-label">Account Name</label>
              <input
                type="text"
                name="account_name"
                className="form-control"
                value={formData.account_name}
                onChange={handleChange}
                required
              />

              <label className="form-label">Loan Account Number</label>
              <input
                type="text"
                name="loan_account_number"
                className="form-control"
                value={formData.loan_account_number}
                onChange={handleChange}
                required
              />

              <label className="form-label">Disbursement Date</label>
              <input
                type="date"
                name="disbursement_date"
                className="form-control"
                value={formData.disbursement_date}
                onChange={handleChange}
                required
              />

              <label className="form-label">Amount</label>
              <input
                type="number"
                name="amount"
                className="form-control"
                value={formData.amount}
                onChange={handleChange}
                required
              />

              <label className="form-label">Rate of Interest</label>
              <input
                type="number"
                name="rate_of_interest"
                className="form-control"
                value={formData.rate_of_interest}
                onChange={handleChange}
                required
              />

              <div className="col-md-6 mb-3">
                <label className="form-label">Tenure</label>
                <input
                  type="text"
                  name="tenure"
                  className="form-control"
                  value={formData.tenure}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Type of Loan</label>
                <input
                  type="text"
                  name="type_of_loan"
                  className="form-control"
                  value={formData.type_of_loan}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Eligible Security Value</label>
                <input
                  type="number"
                  name="eligible_security_value"
                  className="form-control"
                  value={formData.eligible_security_value}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Security Coverage</label>
                <input
                  type="number"
                  name="security_coverage"
                  className="form-control"
                  value={formData.security_coverage}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Security Details</label>
                <input
                  type="text"
                  name="security_details_as_per_sanction"
                  className="form-control"
                  value={formData.security_details_as_per_sanction}
                  onChange={handleChange}
                />
              </div>

              {/* Checkboxes in a single column */}
              <div className="col-md-6 mb-3">
                <div className="form-check">
                  {/* <input
                  className="form-check-input"
                  type="checkbox"
                  name="client_identification_done_with_varification"
                  checked={
                    formData.client_identification_done_with_varification
                  }
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Client Verification Done
                </label> */}
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Client Verification Done:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="client_identification_done_with_varification"
                        value="true"
                        checked={
                          formData.client_identification_done_with_varification ===
                          true
                        }
                        onChange={() =>
                          setFormData({
                            ...formData,
                            client_identification_done_with_varification: true,
                          })
                        }
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="client_identification_done_with_varification"
                        value="false"
                        checked={
                          formData.client_identification_done_with_varification ===
                          false
                        }
                        onChange={() =>
                          setFormData({
                            ...formData,
                            client_identification_done_with_varification: false,
                          })
                        }
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                </div>

                <div className="form-check">
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Guarantor Verification Done:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="guarantor_identification_done_with_verification"
                        value="true"
                        checked={
                          formData.guarantor_identification_done_with_verification ===
                          true
                        }
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            guarantor_identification_done_with_verification:
                              e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="guarantor_identification_done_with_verification"
                        value="false"
                        checked={
                          formData.guarantor_identification_done_with_verification ===
                          false
                        }
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            guarantor_identification_done_with_verification:
                              e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                </div>

                <div className="form-check">
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Fund Utilization Ensured:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fund_utilization_ensured"
                        value="true"
                        checked={formData.fund_utilization_ensured === true}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            fund_utilization_ensured: e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fund_utilization_ensured"
                        value="false"
                        checked={formData.fund_utilization_ensured === false}
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            fund_utilization_ensured: e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                </div>

                <div className="form-check">
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Compliant with Credit Policy:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="compliance_with_credit_policy"
                        value="true"
                        checked={
                          formData.compliance_with_credit_policy === true
                        }
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            compliance_with_credit_policy:
                              e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="compliance_with_credit_policy"
                        value="false"
                        checked={
                          formData.compliance_with_credit_policy === false
                        }
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            compliance_with_credit_policy:
                              e.target.value === "true",
                          }))
                        }
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Borrower Exposure Limit</label>
                <input
                  type="number"
                  name="signal_borrower_exposure_limit"
                  className="form-control"
                  value={formData.signal_borrower_exposure_limit}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Comment</label>
                <textarea
                  className="form-control"
                  name="comment"
                  value={formData.comment || ""}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "3px" }}
            >
              Update
            </button>
          </div>

          {/* <button type="submit" className="btn btn-primary">Add Info</button> */}
        </form>
      </div>
      {/* <div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "3px" }}
        >
          Update
        </button>
      </div> */}
    </div>
  );
}

export default AddDataForm;
