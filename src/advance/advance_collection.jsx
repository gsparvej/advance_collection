import React, { useState, useEffect } from "react";

const AdvanceCollection = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        projectName: "",
        receiptNo: "auto",
        paymentDate: "2026-02-14",
        patientId: "",
        admissionDate: "",
        admissionTime: "",
        patientName: "",
        gender: "",
        age: "",
        address: "",
        roomNo: "",
        floorNo: "",
        cashAmount: "",
        totalAdvance: 0,
        receiveAmount: "",
        cardAmount: "",
        cardNo: "",
        cardBank: "",
        chequeAmount: "",
        chequeNo: "",
        chequeBank: "",
        chequeDate: "2026-02-14",
        remarks: ""
    });
    const [focusedInput, setFocusedInput] = React.useState(null);

    // Calculate total advance whenever payment amounts change
    useEffect(() => {
        const total =
            parseFloat(formData.cashAmount || 0) +
            parseFloat(formData.cardAmount || 0) +
            parseFloat(formData.chequeAmount || 0);

        setFormData(prev => ({
            ...prev,
            totalAdvance: total.toFixed(2)
        }));
    }, [formData.cashAmount, formData.cardAmount, formData.chequeAmount]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Form submitted successfully! Check console for data.");
        // Add your API call here
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "8px 0 8px 8px", backgroundColor: "#f8f9fa", height: "100vh", overflowY: "auto" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #4CAF50", margin: "8px 0 8px 0" }}>

                <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333", borderBottom: "1px solid rgba(0, 0, 0, 0.84)", paddingBottom: "6px", paddingTop: "1px" }}>Advance Collection</h2>

                <form onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Project Name</label>
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Receipt No</label>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Payment Date</label>
                            <input
                                type="date"
                                name="paymentDate"
                                value={formData.paymentDate}
                                onChange={handleChange}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #ccc", borderRadius: "3px", fontSize: "12px", backgroundColor: "white", height: "22px" }}
                                required
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div style={{ outline: "1px solid #160f0fff", padding: "8px", borderRadius: "3px", marginBottom: "12px" }}>
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label
                                    style={{
                                        minWidth: "100px",
                                        fontSize: "12px",
                                        color: "#333",
                                        textAlign: "right",
                                        paddingRight: "8px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Patient Id
                                </label>
                                <input
                                    type="text"
                                    name="patientId"
                                    value={formData.patientId}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "patientId" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Date</label>
                                <input
                                    type="date"
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Time</label>
                                <input
                                    type="time"
                                    name="admissionTime"
                                    value={formData.admissionTime}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Patient Name</label>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center", width: "50%" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Gender</label>

                                <input
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />


                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    min="0"
                                    max="150"
                                    value={formData.age}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Room No</label>
                                <input
                                    type="text"
                                    name="roomNo"
                                    value={formData.roomNo}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Floor No</label>
                                <input
                                    type="text"
                                    name="floorNo"
                                    value={formData.floorNo}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 5 */}

                    <div style={{ outline: "1px solid #160f0fff", padding: "8px", borderRadius: "3px" }}>

                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Cash Amount</label>
                                <input
                                    type="text"
                                    name="cashAmount"
                                    value={formData.cashAmount}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("cashAmount")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "cashAmount" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Total Advance</label>
                                <input
                                    type="number"
                                    name="totalAdvance"
                                    min="0"
                                    step="0.01"
                                    value={formData.totalAdvance}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #ccc", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Receive Amount</label>
                                <input
                                    type="number"
                                    name="receiveAmount"
                                    min="0"
                                    step="0.01"
                                    value={formData.receiveAmount}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Row 6 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Card Amount</label>
                                <input
                                    type="text"
                                    name="cardAmount"
                                    value={formData.cardAmount}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("cardAmount")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "cardAmount" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Card No</label>
                                <input
                                    type="text"
                                    name="cardNo"
                                    value={formData.cardNo}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("cardNo")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "cardNo" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Card Bank</label>
                                <select
                                    name="cardBank"
                                    value={formData.cardBank}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("cardBank")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "cardBank" ? "yellow" : "white", cursor: "pointer", height: "22px", outline: "none" }}
                                >
                                    <option value="">---Select---</option>
                                    <option value="bank1">Bank 1</option>
                                    <option value="bank2">Bank 2</option>
                                    <option value="bank3">Bank 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 7 */}



                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Cheque Amount</label>
                                <input
                                    type="text"
                                    name="chequeAmount"
                                    value={formData.chequeAmount}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("chequeAmount")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "chequeAmount" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Cheque No</label>
                                <input
                                    type="text"
                                    name="chequeNo"
                                    value={formData.chequeNo}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("chequeNo")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "chequeNo" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Cheque Bank</label>
                                <select
                                    name="chequeBank"
                                    value={formData.chequeBank}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("chequeBank")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "chequeBank" ? "yellow" : "white", cursor: "pointer", height: "22px", outline: "none" }}
                                >
                                    <option value="">---Select---</option>
                                    <option value="bank1">Bank 1</option>
                                    <option value="bank2">Bank 2</option>
                                    <option value="bank3">Bank 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 8 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px", width: "33%" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Cheque Date</label>
                                <input
                                    type="date"
                                    name="chequeDate"
                                    value={formData.chequeDate}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("chequeDate")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "chequeDate" ? "yellow" : "white", height: "22px", outline: "none" }}
                                />
                            </div>

                        </div>


                    </div>

                    <div style={{ flex: 2, display: "flex", alignItems: "center", marginTop: "8px" }}>
                        <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Remarks</label>
                        <textarea
                            name="remarks"
                            rows="2"
                            value={formData.remarks}
                            onChange={handleChange}
                            onFocus={() => setFocusedInput("remarks")}
                            onBlur={() => setFocusedInput("")}
                            style={{
                                flex: 1,
                                padding: "4px 8px",
                                border: "1px solid #ccc",
                                borderRadius: "3px",
                                fontSize: "12px",
                                minHeight: "50px",
                                resize: "vertical",
                                fontFamily: "inherit",
                                backgroundColor: focusedInput === "remarks" ? "yellow" : "white", // ✅ add this
                                outline: "none"
                            }}
                        ></textarea>
                    </div>

                    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "15px" }}>
                        <button type="submit" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white" }}>Save</button>
                        <button type="button" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#2196F3", color: "white" }}>List</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdvanceCollection;
