

import React, { useState, useEffect } from "react";

const BedChange = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        projectName: "",
        patientId: "",
        admissionDate: "",
        patientName: "",
        currentChangeDate: "",
        prevChangeDate: "",
        drName: "",
        admissionCharge: "",
        roomNo: "",
        bedCharge: "",
        totalCharge: "",








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

                <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333", borderBottom: "1px solid rgba(0, 0, 0, 0.84)", paddingBottom: "6px", paddingTop: "1px" }}>Bed Change Information</h2>

                <form onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Project Name</label>
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
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Date</label>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>

                    </div>


                    <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Patient ID </label>
                            <input
                                type="text"
                                name="patientId"
                                value={formData.patientId}
                                onChange={handleChange}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Prev. Change Date</label>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>

                    </div>
                    <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Patient Name </label>
                            <input
                                type="text"
                                name="patientId"
                                value={formData.patientId}
                                onChange={handleChange}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Current Change Date</label>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>

                    </div>
                    <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Dr Name </label>
                            <input
                                type="text"
                                name="drName"
                                value={formData.drName}
                                onChange={handleChange}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>
                        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Charge</label>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                readOnly
                            />
                        </div>

                    </div>

                    {/* Row 2 */}
                    <fieldset>
                        <legend style={{ fontSize: "14px", fontWeight: "bold" }}>Previous Bed Information</legend>

                        <div style={{ padding: "8px", borderRadius: "3px", marginBottom: "12px" }}>
                            <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>

                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label
                                        style={{
                                            minWidth: "100px",
                                            fontWeight: "bold",
                                            fontSize: "12px",
                                            color: "#333",
                                            textAlign: "right",
                                            paddingRight: "8px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        Room Number
                                    </label>
                                    <input
                                        type="text"
                                        name="roomNumber"
                                        value={formData.roomNumber}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedInput("roomNumber")}
                                        onBlur={() => setFocusedInput("")}
                                        style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "roomNumber" ? "yellow" : "white", height: "22px", outline: "none" }}
                                    />
                                </div>

                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Bed Charge</label>
                                    <input
                                        type="text"
                                        name="bedCharge"
                                        value={formData.bedCharge}
                                        onChange={handleChange}
                                        style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                        readOnly
                                    />
                                </div>

                            </div>

                            {/* Row 3 */}
                            <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Total Days</label>
                                    <input
                                        type="text"
                                        name="totalDays"
                                        value={formData.totalDays}
                                        onChange={handleChange}
                                        style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                        readOnly
                                    />
                                </div>
                                <div style={{ flex: 1, display: "flex", alignItems: "center", width: "50%" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Total Charge</label>

                                    <input
                                        name="totalCharge"
                                        value={formData.totalCharge}
                                        onChange={handleChange}
                                        style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "22px" }}
                                        readOnly
                                    />


                                </div>

                            </div>



                        </div></fieldset>

                    {/* Row 5 */}

                    <fieldset>
                        <legend style={{ fontSize: "14px", fontWeight: "bold" }}>Current Bed Information</legend>
                        <div style={{ padding: "8px", borderRadius: "3px" }}>

                            <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Room Number </label>
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
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Floor Number</label>
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

                            </div>

                            {/* Row 6 */}
                            <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Change Time</label>
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
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Bed Charge </label>
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

                            </div>

                            {/* Row 7 */}



                            <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                    <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Dr Name </label>
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
                            </div>
                        </div>


                    </fieldset>

                    <div style={{ flex: 2, display: "flex", alignItems: "center", marginTop: "8px" }}>
                        <label style={{ minWidth: "100px", fontWeight: "bold", fontSize: "12px", color: "#333", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Remarks</label>
                        <input
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
                        />
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

export default BedChange;
