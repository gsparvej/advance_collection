import React, { useState, useEffect } from "react";

const DeathCertificate = () => {
    // --- State ---
    const [formData, setFormData] = useState({
        // Header
        deathCertificateNo: "",
        deathCertificateDate: new Date().toISOString().split('T')[0],

        // Patient Info
        patientId: "",
        patientName: "", // ReadOnly
        spouseName: "",
        cabinBedNo: "", // ReadOnly
        sex: "", // ReadOnly
        age: "", // ReadOnly
        address: "", // ReadOnly
        admissionDate: "", // ReadOnly
        admissionTime: "", // ReadOnly
        deathDate: "",
        deathTime: "",
        nextOfKin: "",
        relationshipOfDeceased: "",

        // Cause of Death
        immediateCauseDeath: "",
        primaryCauseDeath: "",
        associatedConditions: "",
        a: "",
        b: "",
        c: "",

        // Body Taken By (1, 2, 3)
        no1Name: "", no1Rel: "", no1Address: "", no1NID: "",
        no2Name: "", no2Rel: "", no2Address: "", no2NID: "",
        no3Name: "", no3Rel: "", no3Address: "", no3NID: ""
    });

    const [focusedInput, setFocusedInput] = useState(null);

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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Mock Patient Search
    const handlePatientSearch = (e) => {
        if (e.key === 'Enter') {
            console.log("Searching Patient (Death):", formData.patientId);
            // Mock Data
            const mock = {
                PatientName: "Abdul Karim",
                SpouseName: "Fatema Begum",
                CabinBedNo: "ICU-03",
                Sex: "Male",
                Age: "65Y",
                Address: "456 Mirpur, Dhaka",
                AdmissionDate: "2023-11-10",
                AdmissionTime: "08:00 PM"
            };

            setFormData(prev => ({
                ...prev,
                patientName: mock.PatientName,
                spouseName: mock.SpouseName,
                cabinBedNo: mock.CabinBedNo,
                sex: mock.Sex,
                age: mock.Age,
                address: mock.Address,
                admissionDate: mock.AdmissionDate,
                admissionTime: mock.AdmissionTime
            }));
        }
    };

    const handleSave = () => {
        if (!formData.patientId) {
            alert("Patient ID is required");
            return;
        }
        console.log("Saving Death Certificate:", formData);
        alert("Saved Successfully!");
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "3px solid #d9534f" }}>

                <h3 style={{ fontSize: "18px", margin: "0 0 15px 0", color: "#d9534f", textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: "10px", fontWeight: "bold" }}>
                    Death Certificate
                </h3>

                <form>
                    {/* --- Patient Information --- */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                        <legend style={{ fontSize: "14px", fontWeight: "bold", width: "auto", padding: "0 5px", marginBottom: "0" }}>Patient Information</legend>

                        {/* Cert No, Date */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Certificate No</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" value={formData.deathCertificateNo} readOnly placeholder="Auto Generated" style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Certificate Date</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="date" name="deathCertificateDate" value={formData.deathCertificateDate} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>

                        {/* Patient Id, Name */}
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
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="Patient Id"
                                    autoFocus
                                />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Patient Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" value={formData.patientName} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Spouse Name, Cabin/Bed */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Spouse Name</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="spouseName" value={formData.spouseName} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Cabin/Bed No.</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" value={formData.cabinBedNo} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Sex, Age, Address */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Sex</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" value={formData.sex} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Age</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" value={formData.age} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Address</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" value={formData.address} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Admission Date/Time, Death Date/Time */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Admission Date/Time</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.admissionDate} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" value={formData.admissionTime} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Death Date & Time</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="date" name="deathDate" value={formData.deathDate} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="deathTime" value={formData.deathTime} onChange={handleChange} placeholder="Time" style={inputStyle} />
                            </div>
                        </div>

                        {/* Next to Kin */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Next to kin</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="nextOfKin" value={formData.nextOfKin} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Relationship of Deceased</label>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="relationshipOfDeceased" value={formData.relationshipOfDeceased} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>
                    </fieldset>

                    {/* --- Cause of Death --- */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                        <legend style={{ fontSize: "14px", fontWeight: "bold", width: "auto", padding: "0 5px", marginBottom: "0" }}>Cause of Death</legend>

                        <div style={rowStyle}>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Immediate Cause of Death</label>
                            </div>
                            <div style={colStyle("75%")}>
                                <input type="text" name="immediateCauseDeath" value={formData.immediateCauseDeath} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Primary Cause of Death</label>
                            </div>
                            <div style={colStyle("75%")}>
                                <input type="text" name="primaryCauseDeath" value={formData.primaryCauseDeath} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div style={colStyle("25%")}>
                                <label style={labelStyle}>Associated Conditions Contributing to Death</label>
                            </div>
                            <div style={colStyle("75%")}>
                                <input type="text" name="associatedConditions" value={formData.associatedConditions} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>
                        {["a", "b", "c"].map(field => (
                            <div style={rowStyle} key={field}>
                                <div style={colStyle("25%")}>
                                    <label style={labelStyle}>{field})</label>
                                </div>
                                <div style={colStyle("75%")}>
                                    <input type="text" name={field} value={formData[field]} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>
                        ))}
                    </fieldset>

                    {/* --- Body Taken By --- */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                        <legend style={{ fontSize: "14px", fontWeight: "bold", width: "auto", padding: "0 5px", marginBottom: "0" }}>Body Taken By</legend>

                        {[1, 2, 3].map(num => (
                            <div style={rowStyle} key={num}>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle}>{num}. Name</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" name={`no${num}Name`} value={formData[`no${num}Name`]} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle}>Relationship</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" name={`no${num}Rel`} value={formData[`no${num}Rel`]} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle}>Address</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" name={`no${num}Address`} value={formData[`no${num}Address`]} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle}>NID No</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" name={`no${num}NID`} value={formData[`no${num}NID`]} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>
                        ))}
                    </fieldset>

                    {/* Footer Buttons */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button type="button" onClick={handleSave} style={{ margin: "0 5px", padding: "6px 15px", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save</button>
                        <button type="button" style={{ margin: "0 5px", padding: "6px 15px", backgroundColor: "#5bc0de", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Death Certificate List</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeathCertificate;
