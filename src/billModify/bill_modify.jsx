import React, { useState, useEffect } from "react";

const BillModify = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        patientId: "",
        regNo: "",
        admissionDate: "",
        admissionTime: "",
        days: "",
        patientName: "",
        gender: "",
        age: "",
        address: "",
        bedNo: "",
        department: "",
        drCode: "",
        drName: "",
        refDrCode: "",
        refDrName: "",
        mpo: "",
        mpoName: "",
        productSearch: "",
        totalAmount: "",
        less: "",
        serviceCharge: "",
        netAmount: "",
        drAmount: "",
        note: ""
    });

    const [focusedInput, setFocusedInput] = useState(null);

    // Dummy handler for changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearchProduct = () => {
        console.log("Searching product:", formData.productSearch);
        // Implement search logic here
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Saving form:", formData);
        alert("Saved!");
    };

    // Helper for input styles
    const inputStyle = {
        width: "100%",
        padding: "4px 8px",
        border: "1px solid #ccc",
        borderRadius: "3px",
        fontSize: "12px",
        outline: "none",
        height: "24px",
        boxSizing: "border-box"
    };

    const labelStyle = {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#333",
        textAlign: "right",
        paddingRight: "8px",
        display: "block",
        lineHeight: "24px" // Align vertically with inputs
    };

    const rowStyle = {
        display: "flex",
        marginBottom: "8px",
        alignItems: "center"
    };

    const colStyle = (widthPercent) => ({
        width: widthPercent,
        padding: "0 4px",
        boxSizing: "border-box"
    });

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #4CAF50" }}>

                <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold", marginBottom: "12px", color: "#333", borderBottom: "1px solid rgba(0, 0, 0, 0.84)", paddingBottom: "6px", paddingTop: "1px" }}> Bill Modify </h2>

                <form onSubmit={handleSave}>
                    {/* Row 1: Patient Id, Adm Date, Admission Time, Days */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Patient Id</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="patientId"
                                value={formData.patientId}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput("patientId")}
                                onBlur={() => setFocusedInput(null)}
                                style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                autoFocus
                                autoComplete="off"
                            />
                            {/* Hidden inputs mimicking the HTML */}
                            <input type="hidden" name="regNo" value={formData.regNo} />
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Adm Date</label>
                        </div>
                        <div style={colStyle("8.33%")}>
                            <input
                                type="text"
                                name="admissionDate"
                                value={formData.admissionDate}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Admission Time</label>
                        </div>
                        <div style={colStyle("8.33%")}>
                            <input
                                type="text"
                                name="admissionTime"
                                value={formData.admissionTime}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Days</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="days"
                                value={formData.days}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 2: Patient Name, Sex, Age */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Patient Name</label>
                        </div>
                        <div style={colStyle("33.33%")}>
                            <input
                                type="text"
                                name="patientName"
                                value={formData.patientName}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Sex</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <select
                                name="gender"
                                value={formData.gender}
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            >
                                <option value="">---Select---</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Age</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 3: Address, Bed No, Department */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Address</label>
                        </div>
                        <div style={colStyle("33.33%")}>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Bed No</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="bedNo"
                                value={formData.bedNo}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("8.33%")}>
                            <label style={labelStyle}>Department</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 4: Under Doctor, Ref By */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Under Doctor</label>
                        </div>
                        <div style={colStyle("8.33%")}>
                            <input
                                type="text"
                                name="drCode"
                                value={formData.drCode}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                        <div style={colStyle("25%")}>
                            <input
                                type="text"
                                name="drName"
                                value={formData.drName}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Ref By</label>
                        </div>
                        <div style={colStyle("8.33%")}>
                            <input
                                type="text"
                                name="refDrCode"
                                value={formData.refDrCode}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                        <div style={colStyle("25%")}>
                            <input
                                type="text"
                                name="refDrName"
                                value={formData.refDrName}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 5: MPO, Search */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>MPO</label>
                        </div>
                        <div style={colStyle("8.33%")}>
                            <input
                                type="text"
                                name="mpo"
                                value={formData.mpo}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                        <div style={colStyle("25%")}>
                            <input
                                type="text"
                                name="mpoName"
                                value={formData.mpoName}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Search</label>
                        </div>
                        <div style={colStyle("33.33%")}>
                            <input
                                type="text"
                                name="productSearch"
                                value={formData.productSearch}
                                onChange={(e) => { handleChange(e); handleSearchProduct(); }}
                                placeholder="Search by particulars"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Table Section */}
                    <fieldset style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "4px" }}>
                        <div style={{ height: "340px", overflowY: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                                <thead style={{ position: "sticky", top: 0, backgroundColor: "#f2f2f2", zIndex: 1 }}>
                                    <tr>
                                        {["Ref Date", "Ref No", "Code", "Particulars", "Charge", "NoU", "Total Amt", "Dr Amount", "Less", "SCCharge", "Net Amt", "Remarks"].map((header, idx) => (
                                            <th key={idx} style={{
                                                border: "1px solid #ddd",
                                                padding: "8px",
                                                fontSize: "12px",
                                                textAlign: "left",
                                                width: header === "Particulars" ? "25%" : header === "Remarks" ? "16%" : "auto"
                                            }}>
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Rows would be mapped here */}
                                    <tr>
                                        <td colSpan="12" style={{ textAlign: "center", padding: "10px", fontSize: "12px", color: "#888" }}>
                                            No items added
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>

                    {/* Row 7: Total Amount, Less, Service Charge */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Total Amount</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="totalAmount"
                                value={formData.totalAmount}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Less</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="less"
                                value={formData.less}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Service Charge</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="serviceCharge"
                                value={formData.serviceCharge}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 8: Net Amount, Dr Amount */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Net Amount</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="netAmount"
                                value={formData.netAmount}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>

                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Dr Amount</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="drAmount"
                                value={formData.drAmount}
                                readOnly
                                disabled
                                style={{ ...inputStyle, backgroundColor: "#e9ecef" }}
                            />
                        </div>
                    </div>

                    {/* Row 9: Notes */}
                    <div style={rowStyle}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Notes</label>
                        </div>
                        <div style={colStyle("83.33%")}>
                            <input
                                type="text"
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput("note")}
                                onBlur={() => setFocusedInput(null)}
                                style={{ ...inputStyle, backgroundColor: focusedInput === "note" ? "#ffffcc" : "white" }}
                                autoFocus
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div style={{ ...rowStyle, justifyContent: "center", marginTop: "20px", gap: "10px" }}>
                        <button type="button" className="btn-primary" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#0275d8", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={() => alert('Preview Bill')}>
                            Preview Bill
                        </button>
                        <button type="submit" className="btn-success" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            Save
                        </button>
                        <button type="button" className="btn-info" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5bc0de", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            List
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default BillModify;