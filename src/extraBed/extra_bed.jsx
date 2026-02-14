

import React, { useState, useEffect } from "react";

const ExtraBed = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        projectName: "",
        slipNumber: "auto",
        slipDate: "2026-02-14",
        patientId: "",
        admissionDate: "",
        admissionTime: "",
        patientName: "",
        gender: "",
        age: "",
        address: "",
        patBedNo: "",
        reltvName: "",
        phoneNo: "",
        extraBedNo: "",
        extraBedCharge: "",
        remarks: ""
    });
    const [focusedInput, setFocusedInput] = React.useState(null);

    // Calculate total advance whenever payment amounts change
    useEffect(() => {
        const total =
            parseFloat(formData.extraBedCharge || 0);

        setFormData(prev => ({
            ...prev,
            totalAdvance: total.toFixed(2)
        }));
    }, [formData.extraBedCharge]);

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

                <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333", borderBottom: "1px solid rgba(0, 0, 0, 0.84)", paddingBottom: "6px", paddingTop: "1px" }}> Patient Extra Bed  </h2>

                <form onSubmit={handleSubmit}>
                    {/* Row 1 */}


                    {/* Row 2 */}





                    <div style={{ outline: "1px solid #160f0fff", padding: "8px", borderRadius: "3px", marginBottom: "12px" }}>


                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Project Name</label>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={formData.projectName}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Slip Number </label>
                                <input
                                    type="text"
                                    name="slipNumber"
                                    value={formData.slipNumber}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Slip Date</label>
                                <input
                                    type="date"
                                    name="slipDate"
                                    value={formData.slipDate}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", height: "18px" }}
                                    readOnly
                                />
                            </div>
                        </div>




                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label
                                    style={{
                                        minWidth: "100px",
                                        fontSize: "12px",
                                        color: "#333",
                                        fontWeight: "bold",
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
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "patientId" ? "yellow" : "white", height: "18px", outline: "none" }}
                                />
                            </div>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Date</label>
                                <input
                                    type="date"
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Admission Time</label>
                                <input
                                    type="time"
                                    name="admissionTime"
                                    value={formData.admissionTime}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Patient Name</label>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center", width: "50%" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Gender</label>

                                <input
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />


                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    min="0"
                                    max="150"
                                    value={formData.age}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Patient Bed No</label>
                                <input
                                    type="text"
                                    name="patBedNo"
                                    value={formData.patBedNo}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>

                        </div>
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Relative Name</label>
                                <input
                                    type="text"
                                    name="reltvName"
                                    value={formData.reltvName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("reltvName")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "reltvName" ? "yellow" : "white", height: "18px", outline: "none" }}
                                />
                            </div>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Phone No</label>
                                <input
                                    type="text"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("phoneNo")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "phoneNo" ? "yellow" : "white", height: "18px", outline: "none" }}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", marginBottom: "6px", gap: "8px" }}>
                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Extra Bed No </label>
                                <select
                                    name="extraBedNo"
                                    value={formData.extraBedNo}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("extraBedNo")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "extraBedNo" ? "yellow" : "white", cursor: "pointer", height: "24px", outline: "none" }}
                                >
                                    <option value="">---Select---</option>
                                    <option value="extraBed1">Extra Bed 1</option>
                                    <option value="extraBed2">Extra Bed 2</option>
                                    <option value="extraBed3">Extra Bed 3</option>
                                </select>
                            </div>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Bed Charge </label>
                                <input
                                    type="text"
                                    name="extraBedCharge"
                                    value={formData.extraBedCharge}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput("extraBedCharge")}
                                    onBlur={() => setFocusedInput("")}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: focusedInput === "extraBedCharge" ? "yellow" : "white", height: "18px", outline: "none" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 5 */}



                    <div style={{ flex: 2, display: "flex", alignItems: "center", marginTop: "8px" }}>
                        <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Remarks</label>
                        <input
                            name="remarks"
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
                                minHeight: "18px",
                                fontFamily: "inherit",
                                backgroundColor: focusedInput === "remarks" ? "yellow" : "white", // ✅ add this
                                outline: "none"
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "15px" }}>
                        <button type="submit" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white" }}>Save</button>
                        <button type="button" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#2196F3", color: "white" }}>Invoice List</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExtraBed;
