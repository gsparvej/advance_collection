import React, { useState, useEffect } from "react";

const BirthCertificate = () => {
    // --- State ---
    const [formData, setFormData] = useState({
        certificateNo: "",
        certificateDate: new Date().toISOString().split('T')[0],

        patientId: "",
        babyName: "",

        bedNo: "",
        birthDate: "",

        age: "",
        birthTime: "",

        sex: "", // Mother's sex (usually Female)
        babySex: "Male",

        fatherName: "",
        fatherOccupation: "",
        fatherNID: "",

        motherName: "",
        motherOccupation: "",
        motherNID: "",

        presentAddress: "",
        religion: "Islam",

        permanentAddress: "",
        babyWeight: "",

        consultantCode: "",
        consultantName: "",
        modeDelivery: ""
    });

    const [focusedInput, setFocusedInput] = useState(null);
    const [showList, setShowList] = useState(false);

    // --- Styling ---
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
        lineHeight: "24px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    };

    const readOnlyInputStyle = {
        ...inputStyle,
        backgroundColor: "#e9ecef",
        cursor: "not-allowed"
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

    // --- Handlers ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Mock Patient Search
    const handlePatientSearch = (e) => {
        if (e.key === 'Enter') {
            console.log("Searching patient:", formData.patientId);
            // Mock Response
            const mockData = {
                PatientName: "Jane Doe (Mother)",
                BedNo: "Cab-101",
                Age: "28Y",
                Sex: "Female",
                ConsultantName: "Dr. A. Rahman",
                PresentAddress: "123 Green Road, Dhaka",
                PermanentAddress: "456 Blue Road, Comilla",
                Religion: "Islam"
            };

            setFormData(prev => ({
                ...prev,
                motherName: mockData.PatientName, // Usually patient is mother
                bedNo: mockData.BedNo,
                age: mockData.Age,
                sex: mockData.Sex,
                consultantName: mockData.ConsultantName,
                presentAddress: mockData.PresentAddress,
                permanentAddress: mockData.PermanentAddress,
                religion: mockData.Religion
            }));
        }
    };

    const handleSave = () => {
        console.log("Saving Birth Certificate:", formData);
        alert("Saved!");
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #d9534f" }}>

                <h3 style={{ fontSize: "18px", margin: "0 0 15px 0", color: "#333", textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                    Birth Certificate Entry
                </h3>

                <form>
                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "4px" }}>
                        <legend style={{ fontSize: "14px", fontWeight: "bold", width: "auto", padding: "0 5px", marginBottom: "0" }}>Patient Information</legend>

                        {/* Cert No, Date */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Certificate No</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="certificateNo" value={formData.certificateNo} readOnly placeholder="Auto Generated" style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Certificate Date</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "certificateDate" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("certificateDate")}
                                    onBlur={() => setFocusedInput(null)} type="date" name="certificateDate" value={formData.certificateDate} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Patient Id, Baby Name */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Patient Id</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    type="text"
                                    name="patientId"
                                    value={formData.patientId}
                                    onChange={handleChange}
                                    onKeyDown={handlePatientSearch}
                                    placeholder="Patient Id"
                                    autoFocus
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Baby Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    type="text"
                                    name="babyName"
                                    value={formData.babyName}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "babyName" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("babyName")}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                        </div>

                        {/* Bed No, Birth Date */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Bed No.</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="bedNo" value={formData.bedNo} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Birth Date</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "birthDate" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("birthDate")}
                                    onBlur={() => setFocusedInput(null)} type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Age, Birth Time */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Age</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="age" value={formData.age} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Birth Time</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "birthTime" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("birthTime")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="birthTime" value={formData.birthTime} onChange={handleChange} placeholder="X : 00 PM" />
                            </div>
                        </div>

                        {/* Sex, Baby Sex */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Sex</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="sex" value={formData.sex} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Baby Sex</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <select
                                    name="babySex"
                                    value={formData.babySex}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "babySex" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("babySex")}
                                    onBlur={() => setFocusedInput(null)}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>

                        {/* Father Info */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Fathers Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "fatherName" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("fatherName")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Fathers Occupation</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "fatherOccupation" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("fatherOccupation")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>NID No</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "fatherNID" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("fatherNID")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="fatherNID" value={formData.fatherNID} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Mother Info */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Mothers Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "motherName" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("motherName")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Mothers Occupation</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "motherOccupation" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("motherOccupation")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>NID No</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "motherNID" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("motherNID")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="motherNID" value={formData.motherNID} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Addresses */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Present Address</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "presentAddress" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("presentAddress")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Religion</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <select
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "religion" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("religion")}
                                    onBlur={() => setFocusedInput(null)}
                                >
                                    <option value="Islam">Islam</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Buddhist">Buddhist</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>

                        {/* Permanent Address, Weight */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Permanent Address</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "permanentAddress" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("permanentAddress")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Baby Weight</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "babyWeight" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("babyWeight")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="babyWeight" value={formData.babyWeight} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Consultant, Mode of Delivery */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Consultant Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="consultantName" value={formData.consultantName} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Mode of Delivery</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "modeDelivery" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("modeDelivery")}
                                    onBlur={() => setFocusedInput(null)} type="text" name="modeDelivery" value={formData.modeDelivery} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div style={{ ...rowStyle, justifyContent: "center", marginTop: "20px", gap: "10px" }}>
                            <button
                                type="button"
                                onClick={handleSave}
                                style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="btn-info"
                                style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5bc0de", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                                onClick={() => setShowList(!showList)}
                            >
                                Birth Certificate List
                            </button>
                        </div>
                    </fieldset>
                </form>

                {/* List View Placeholder */}
                {showList && (
                    <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
                        <h4 style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>Certificate List</h4>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", border: "1px solid #ddd" }}>
                            <thead style={{ backgroundColor: "#f9f9f9" }}>
                                <tr>
                                    {["Cert No", "Date", "Baby Name", "Mother Name", "Father Name", "Birth Date"].map((head, i) => (
                                        <th key={i} style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center", padding: "10px", color: "#888" }}>No records found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BirthCertificate;
