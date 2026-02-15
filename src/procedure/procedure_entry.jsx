



import React, { useState, useEffect } from "react";

const ProcedureEntry = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        patientId: "",
        admissionDate: "",
        admissionTime: "",
        patientName: "",
        gender: "",
        age: "",
        address: "",
        bedNo: "",
        department: "",
        procedureCode: "",
        description: "",
        drCode: "",
        drName: "",
        charge: "",
        unit: "",
        noUnit: "",
        total: "",
        remarks: ""
    });
    const [focusedInput, setFocusedInput] = React.useState(null);

    // Calculate total advance whenever payment amounts change
    useEffect(() => {
        const total =
            parseFloat(formData.noUnit || 0);

        setFormData(prev => ({
            ...prev,
            total: total.toFixed(2)
        }));
    }, [formData.noUnit]);

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

                <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333", borderBottom: "1px solid rgba(0, 0, 0, 0.84)", paddingBottom: "6px", paddingTop: "1px" }}> Procedure Entry  </h2>

                <form onSubmit={handleSubmit}>
                    <div style={{ outline: "1px solid #160f0fff", padding: "8px", borderRadius: "3px", marginBottom: "12px" }}>
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
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}> Bed No</label>
                                <input
                                    type="text"
                                    name="bedNo"
                                    value={formData.bedNo}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>

                            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                                <label style={{ minWidth: "100px", fontSize: "12px", color: "#333", fontWeight: "bold", textAlign: "right", paddingRight: "8px", whiteSpace: "nowrap" }}>Department</label>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    style={{ flex: 1, padding: "4px 8px", border: "1px solid #769ce9ff", borderRadius: "3px", fontSize: "12px", backgroundColor: "#e9ecef", cursor: "not-allowed", height: "18px" }}
                                    readOnly
                                />
                            </div>

                        </div>
                    </div>


                    <div style={{ marginTop: "5px", backgroundColor: "white", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>

                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#f2f2f2" }}>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Dr Name</th>
                                    <th>Charge</th>
                                    <th>Unit</th>
                                    <th>No Unit</th>
                                    <th>Total</th>
                                    <th>Remarks</th>
                                    <th>Add</th>
                                </tr>
                            </thead>

                            {/* <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td><input name="procedureCode" value={row.procedureCode} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="description" value={row.description} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="drName" value={row.drName} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="charge" value={row.charge} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="unit" value={row.unit} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="noUnit" value={row.noUnit} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td><input name="total" value={row.total} readOnly /></td>
                                        <td><input name="remarks" value={row.remarks} onChange={(e) => handleTableChange(index, e)} /></td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={handleAddRow}
                                                style={{
                                                    padding: "2px 8px",
                                                    backgroundColor: "#4CAF50",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "3px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> */}
                        </table>
                    </div>





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
                        <button type="button" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#4e50e0ff", color: "white" }}>List</button>
                        <button type="button" style={{ padding: "6px 24px", fontSize: "13px", fontWeight: "600", border: "none", borderRadius: "3px", cursor: "pointer", backgroundColor: "#2196F3", color: "white" }}>Show</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProcedureEntry;