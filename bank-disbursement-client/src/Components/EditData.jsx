import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const EditData = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/disbursement/getById/${id}`)
      .then((res) => {
        setFormData(res.data);
        setOriginalData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Failed to fetch data:", err));
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/disbursement/updateInfo/${id}`, formData)
      .then((res) => {
        alert("Updated successfully");
        setFormData(res.data); // update form data with fresh backend response
        setOriginalData(res.data); // also update original data to reflect changes
      })
      .catch((err) => alert("Update failed"));
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "10px" }}>
      {/* Left Side: Original Data */}
      {/* <div>
        <h3>Previous Data</h3>
        <pre style={{ background: '#f3f3f3', padding: '10px' }}>
          {JSON.stringify(originalData, null, 2)}
        </pre>
      </div> */}

      {/* Right Side: Edit Form */}
      <div className="container mt-4">
        <h3>Edit Data</h3>
        <div className="row col-md-7 mb-3 align-items-center">
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "10px",
                marginLeft: "40px",
                padding: "25px",
              }}
            >
              <div className=" row mb-3">
                <label class="form-label">
                  Account Name:
                  <input
                    type="text"
                    class="form-control"
                    id="account_name"
                    name="account_name"
                    value={formData.account_name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Loan Account Number:
                  <input
                    class="form-control"
                    name="loan_account_number"
                    value={formData.loan_account_number || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Disbursement Date:
                  <input
                    class="form-control"
                    type="date"
                    name="disbursement_date"
                    value={formData.disbursement_date || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Amount:
                  <input
                    class="form-control"
                    type="number"
                    name="amount"
                    value={formData.amount || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Rate of Interest:
                  <input
                    class="form-control"
                    type="number"
                    step="0.1"
                    name="rate_of_interest"
                    value={formData.rate_of_interest || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Tenure:
                  <input
                    class="form-control"
                    name="tenure"
                    value={formData.tenure || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Type of Loan:
                  <input
                    class="form-control"
                    name="type_of_loan"
                    value={formData.type_of_loan || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Eligible Security Value:
                  <input
                    class="form-control"
                    type="number"
                    name="eligible_security_value"
                    value={formData.eligible_security_value || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Security Coverage:
                  <input
                    class="form-control"
                    type="number"
                    step="0.01"
                    name="security_coverage"
                    value={formData.security_coverage || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Security Details:
                  <input
                    class="form-control"
                    name="security_details_as_per_sanction"
                    value={formData.security_details_as_per_sanction || ""}
                    onChange={handleChange}
                  />
                </label>

                {/* <label>Client ID Verified:
          <input type="checkbox" name="client_identification_done_with_varification" checked={formData.client_identification_done_with_varification || false} onChange={handleChange} />
          </label> */}

                <label className="col-sm-4 col-form-label">
                  Client ID Verified:
                </label>
                <div className="col-sm-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="client_identification_done_with_varification"
                      id="clientIdYes"
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
                    <label className="form-check-label" htmlFor="clientIdYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="client_identification_done_with_varification"
                      id="clientIdNo"
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
                    <label className="form-check-label" htmlFor="clientIdNo">
                      No
                    </label>
                  </div>
                </div>
                {/* <label>Guarantor ID Verified:
          <input class = "form-control" type="checkbox" name="guarantor_identification_done_with_verification" checked={formData.guarantor_identification_done_with_verification || false} onChange={handleChange} />
          </label> */}

                <label className="col-sm-4 col-form-label">
                  Guarantor ID Verified:
                </label>
                <div className="col-sm-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="guarantor_identification_done_with_verification"
                      id="guarantorYes"
                      value="true"
                      checked={
                        formData.guarantor_identification_done_with_verification ===
                        true
                      }
                      onChange={() =>
                        setFormData({
                          ...formData,
                          guarantor_identification_done_with_verification: true,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="guarantorYes">
                      Yes
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="guarantor_identification_done_with_verification"
                      id="guarantorNo"
                      value="false"
                      checked={
                        formData.guarantor_identification_done_with_verification ===
                        false
                      }
                      onChange={() =>
                        setFormData({
                          ...formData,
                          guarantor_identification_done_with_verification: false,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="guarantorNo">
                      No
                    </label>
                  </div>
                </div>

                <label className="col-sm-4 col-form-label">
                  Fund Utilization Ensured:
                </label>
                <div className="col-sm-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fund_utilization_ensured"
                      id="fundUtilizationYes"
                      checked={formData.fund_utilization_ensured === true}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          fund_utilization_ensured: true,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="fundUtilizationYes"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="fund_utilization_ensured"
                      id="fundUtilizationNo"
                      checked={formData.fund_utilization_ensured === false}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          fund_utilization_ensured: false,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="fundUtilizationNo"
                    >
                      No
                    </label>
                  </div>
                </div>
                <label>
                  Signal Borrower Exposure Limit:
                  <input
                    class="form-control"
                    type="number"
                    name="signal_borrower_exposure_limit"
                    value={formData.signal_borrower_exposure_limit || ""}
                    onChange={handleChange}
                  />
                </label>
                <label className="col-sm-4 col-form-label">
                  Compliance with Credit Policy:
                </label>
                <div className="col-sm-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="compliance_with_credit_policy"
                      id="creditPolicyYes"
                      value="true"
                      checked={formData.compliance_with_credit_policy === true}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          compliance_with_credit_policy: true,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="creditPolicyYes"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="compliance_with_credit_policy"
                      id="creditPolicyNo"
                      value="false"
                      checked={formData.compliance_with_credit_policy === false}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          compliance_with_credit_policy: false,
                        })
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="creditPolicyNo"
                    >
                      No
                    </label>
                  </div>
                </div>
                <label>
                  Comment:
                  <textarea
                    class="form-control"
                    name="comment"
                    value={formData.comment || ""}
                    onChange={handleChange}
                  />
                </label>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ marginTop: "3px" }}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditData;
