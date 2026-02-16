import React, { useState, useEffect } from "react";

const DischargeCertificate = () => {
    // --- State ---
    const [formData, setFormData] = useState({
        // Header
        dischargeNo: "",
        dischargeDate: new Date().toISOString().split('T')[0],

        // Patient Info
        patientId: "",
        patientName: "", // ReadOnly
        admissionDate: "",
        admissionTime: "",
        sex: "",
        releaseDate: "",
        weight: "",
        age: "",
        releaseTime: "",
        totalDays: "",
        address: "",
        religion: "",
        phone: "",
        underDr: "",
        underDrCode: "",
        bedNo: "",
        refDrName: "",

        // Diagnosis
        diagnosis: "",
        diagnosisCode: "",

        // History / Notes
        investigation: "",
        allergy: "",
        caseHistory: "",
        treatmentGiven: "",
        personalHistory: "",
        otNote: ""
    });

    const [medicineList, setMedicineList] = useState([]);
    const [adviceList, setAdviceList] = useState([]);

    // Temp inputs for adding items
    const [mediInput, setMediInput] = useState({ name: "", dose: "", days: "" });
    const [adviceInput, setAdviceInput] = useState({ description: "" });
    const [mediPackage, setMediPackage] = useState({ code: "0", name: "" });
    const [advicePackage, setAdvicePackage] = useState({ code: "0", name: "" });

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

    const textAreaStyle = {
        ...inputStyle,
        height: "80px",
        resize: "none"
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

    const tableHeadStyle = {
        backgroundColor: "#00c0ef",
        color: "white",
        fontWeight: "bold",
        padding: "5px",
        textAlign: "center",
        border: "1px solid gray",
        fontSize: "12px"
    };

    // --- Handlers ---

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Mock Patient Search
    const handlePatientSearch = (e) => {
        if (e.key === 'Enter') {
            console.log("Searching Patient:", formData.patientId);
            // Mock Data
            const mock = {
                PatientName: "Rahim Uddin",
                AdmissionDate: "2023-11-01",
                AdmissionTime: "10:30 AM",
                Sex: "Male",
                ReleaseDate: new Date().toISOString().split('T')[0],
                Age: "45Y",
                ReleaseTime: "05:00 PM",
                TotalDays: "5",
                Address: "123 Dhaka",
                Religion: "Islam",
                Phone: "01711111111",
                UnderDr: "Dr. XYZ",
                BedNo: "Ward-5",
                Investigation: "CBC, X-Ray",
                Allergy: "None",
                CaseHistory: "Fever for 3 days",
                Treatment: "Antibiotics",
                PersonalHistory: "Smoker",
                OTNote: "N/A"
            };

            setFormData(prev => ({
                ...prev,
                patientName: mock.PatientName,
                admissionDate: mock.AdmissionDate,
                admissionTime: mock.AdmissionTime,
                sex: mock.Sex,
                releaseDate: mock.ReleaseDate,
                age: mock.Age,
                releaseTime: mock.ReleaseTime,
                totalDays: mock.TotalDays,
                address: mock.Address,
                religion: mock.Religion,
                phone: mock.Phone,
                underDr: mock.UnderDr,
                bedNo: mock.BedNo,
                investigation: mock.Investigation,
                allergy: mock.Allergy,
                caseHistory: mock.CaseHistory,
                treatmentGiven: mock.Treatment,
                personalHistory: mock.PersonalHistory,
                otNote: mock.OTNote
            }));
        }
    };

    // Medicine Logic
    const handleAddMedicine = () => {
        if (!mediInput.name) {
            alert("Please enter medicine name");
            return;
        }
        setMedicineList(prev => [...prev, { ...mediInput, id: Date.now() }]);
        setMediInput({ name: "", dose: "", days: "" }); // Reset
    };

    const handleDeleteMedicine = (id) => {
        setMedicineList(prev => prev.filter(item => item.id !== id));
    };

    const handleGetMedicinePackage = () => {
        // Mock Package
        if (mediPackage.code === "1") {
            setMedicineList([
                { id: 1, name: "Napa Extra", dose: "1+1+1", days: "3 Days" },
                { id: 2, name: "Seclo 20", dose: "1+0+1", days: "7 Days" }
            ]);
        } else {
            alert("Package not found (Try code 1)");
        }
    };

    // Advice Logic
    const handleAddAdvice = () => {
        if (!adviceInput.description) {
            alert("Please enter advice");
            return;
        }
        setAdviceList(prev => [...prev, { ...adviceInput, id: Date.now() }]);
        setAdviceInput({ description: "" });
    };

    const handleDeleteAdvice = (id) => {
        setAdviceList(prev => prev.filter(item => item.id !== id));
    };

    const handleGetAdvicePackage = () => {
        if (advicePackage.code === "1") {
            setAdviceList([
                { id: 1, description: "Take rest for 7 days" },
                { id: 2, description: "Drink plenty of water" }
            ]);
        } else {
            alert("Package not found (Try code 1)");
        }
    };

    const handleSave = () => {
        console.log("Saving Discharge Certificate:", { formData, medicineList, adviceList });
        alert("Saved!");
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "3px solid #00c0ef" }}>

                <h3 style={{ fontSize: "18px", margin: "0 0 15px 0", color: "#333", textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: "10px", fontWeight: "bold" }}>
                    Discharge Certificate
                </h3>

                <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
                    {/* LEFT COLUMN (Patient Info + History) */}
                    <div style={{ width: "58.33%", padding: "0 10px", boxSizing: "border-box" }}> {/* col-sm-7 */}

                        {/* Discharge No, Date */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Discharge No</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.dischargeNo} readOnly placeholder="AUTO" style={{ ...readOnlyInputStyle, textAlign: "center", fontSize: "14px" }} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Discharge Date</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="date" value={formData.dischargeDate} onChange={(e) => setFormData({ ...formData, dischargeDate: e.target.value })}
                                    onFocus={() => setFocusedInput("dischargeDate")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "dischargeDate" ? "#ffffcc" : "white" }} />
                            </div>
                        </div>

                        {/* Patient Id, Admission Date */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Patient Id</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input
                                    type="text"
                                    value={formData.patientId}
                                    onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                                    onKeyDown={handlePatientSearch}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput(null)}
                                    placeholder="Patient Id"
                                    autoFocus
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>AdmissionDate</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.admissionDate} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Patient Name, Admission Time */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Patient Name</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.patientName} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>AdmissionTime</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.admissionTime} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Sex, Release Date, Weight */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Sex</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.sex} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Release Date</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.releaseDate} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Weight</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="weight" value={formData.weight} onChange={handleChange}
                                    onFocus={() => setFocusedInput("weight")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "weight" ? "#ffffcc" : "white" }} />
                            </div>
                        </div>

                        {/* Age, Release Time, T.Days */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Age</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.age} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Release Time</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.releaseTime} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>T.Days</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" value={formData.totalDays} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Address, Religion */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Address</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.address} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Religion</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.religion} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Phone, Under Dr */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Phone</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.phone} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Under Dr</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.underDr} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Bed No, Ref Dr */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Bed No</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" value={formData.bedNo} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Ref Dr Name</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" name="refDrName" value={formData.refDrName} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>

                        {/* Diagnosis */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Diagnosis</label>
                            </div>
                            <div style={colStyle("83.33%")}>
                                <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} style={inputStyle} />
                            </div>
                        </div>

                        {/* HISTORY TEXTAREAS */}
                        <div style={{ marginTop: "10px" }}>
                            {/* Inv, Allergy */}
                            <div style={rowStyle}>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>Investigation</div>
                                    <textarea name="investigation" value={formData.investigation} onChange={handleChange} style={textAreaStyle} />
                                </div>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>Allergy And Drug History</div>
                                    <textarea name="allergy" value={formData.allergy} onChange={handleChange} style={textAreaStyle} />
                                </div>
                            </div>
                            {/* Case, Treatment */}
                            <div style={rowStyle}>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>Case History</div>
                                    <textarea name="caseHistory" value={formData.caseHistory} onChange={handleChange} style={textAreaStyle} />
                                </div>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>Treatment Given</div>
                                    <textarea name="treatmentGiven" value={formData.treatmentGiven} onChange={handleChange} style={textAreaStyle} />
                                </div>
                            </div>
                            {/* Personal, OT Note */}
                            <div style={rowStyle}>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>Personal History</div>
                                    <textarea name="personalHistory" value={formData.personalHistory} onChange={handleChange} style={textAreaStyle} />
                                </div>
                                <div style={colStyle("50%")}>
                                    <div style={tableHeadStyle}>OT Note</div>
                                    <textarea name="otNote" value={formData.otNote} onChange={handleChange} style={textAreaStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Medicine & Advice) */}
                    <div style={{ width: "41.66%", padding: "0 10px", boxSizing: "border-box" }}> {/* col-sm-5 */}

                        {/* Medicine Package Search */}
                        <div style={{ ...rowStyle, backgroundColor: "#f9f9f9", padding: "5px", border: "1px solid #ddd" }}>
                            <div style={colStyle("40%")}>
                                <label style={{ ...labelStyle, textAlign: "left" }}>Medicine Pkg Code</label>
                            </div>
                            <div style={colStyle("20%")}>
                                <input
                                    onFocus={() => setFocusedInput("medicinePkgCode")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "medicinePkgCode" ? "#ffffcc" : "white" }}
                                    type="text" value={mediPackage.code} onChange={(e) => setMediPackage({ ...mediPackage, code: e.target.value })} />
                            </div>
                            <div style={colStyle("40%")}>
                                <button type="button" onClick={handleGetMedicinePackage} style={{ width: "100%", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "3px", padding: "3px", fontSize: "12px", cursor: "pointer" }}>Get Package</button>
                            </div>
                        </div>

                        {/* Medicine Table Input */}
                        <div style={{ border: "1px solid #ccc", height: "300px", overflowY: "auto", marginBottom: "15px" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead style={{ position: "sticky", top: 0, backgroundColor: "white", zIndex: 1 }}>
                                    <tr>
                                        <th style={{ ...tableHeadStyle, width: "50%" }}>Medicine Name</th>
                                        <th style={{ ...tableHeadStyle, width: "25%" }}>Dose</th>
                                        <th style={{ ...tableHeadStyle, width: "25%" }}>Days</th>
                                        <th style={{ ...tableHeadStyle, width: "50px" }}>Action</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "2px" }}><input
                                            onFocus={() => setFocusedInput("medicineName")}
                                            onBlur={() => setFocusedInput(null)}
                                            style={{ ...inputStyle, backgroundColor: focusedInput === "medicineName" ? "#ffffcc" : "white" }}
                                            type="text" value={mediInput.name} onChange={(e) => setMediInput({ ...mediInput, name: e.target.value })} placeholder="Name" /></td>
                                        <td style={{ padding: "2px" }}><input
                                            onFocus={() => setFocusedInput("medicineDose")}
                                            onBlur={() => setFocusedInput(null)}
                                            style={{ ...inputStyle, backgroundColor: focusedInput === "medicineDose" ? "#ffffcc" : "white" }}
                                            type="text" value={mediInput.dose} onChange={(e) => setMediInput({ ...mediInput, dose: e.target.value })} placeholder="Dose" /></td>
                                        <td style={{ padding: "2px" }}><input
                                            onFocus={() => setFocusedInput("medicineDays")}
                                            onBlur={() => setFocusedInput(null)}
                                            style={{ ...inputStyle, backgroundColor: focusedInput === "medicineDays" ? "#ffffcc" : "white" }}
                                            type="text" value={mediInput.days} onChange={(e) => setMediInput({ ...mediInput, days: e.target.value })} placeholder="Days" /></td>
                                        <td style={{ padding: "2px" }}><button type="button" onClick={handleAddMedicine} style={{ width: "100%", backgroundColor: "#337ab7", color: "white", border: "none", borderRadius: "3px", padding: "3px", cursor: "pointer" }}>Add</button></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicineList.map((item, idx) => (
                                        <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                                            <td style={{ padding: "5px", fontSize: "12px" }}>{item.name}</td>
                                            <td style={{ padding: "5px", fontSize: "12px" }}>{item.dose}</td>
                                            <td style={{ padding: "5px", fontSize: "12px" }}>{item.days}</td>
                                            <td style={{ padding: "5px", textAlign: "center" }}><span onClick={() => handleDeleteMedicine(item.id)} style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>X</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Advice Package Search */}
                        <div style={{ ...rowStyle, backgroundColor: "#f9f9f9", padding: "5px", border: "1px solid #ddd" }}>
                            <div style={colStyle("40%")}>
                                <label style={{ ...labelStyle, textAlign: "left" }}>Advice Pkg Code</label>
                            </div>
                            <div style={colStyle("20%")}>
                                <input
                                    onFocus={() => setFocusedInput("advicePkgCode")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "advicePkgCode" ? "#ffffcc" : "white" }}
                                    type="text" value={advicePackage.code} onChange={(e) => setAdvicePackage({ ...advicePackage, code: e.target.value })} />
                            </div>
                            <div style={colStyle("40%")}>
                                <button type="button" onClick={handleGetAdvicePackage} style={{ width: "100%", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "3px", padding: "3px", fontSize: "12px", cursor: "pointer" }}>Get Package</button>
                            </div>
                        </div>

                        {/* Advice Table Input */}
                        <div style={{ border: "1px solid #ccc", height: "300px", overflowY: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead style={{ position: "sticky", top: 0, backgroundColor: "white", zIndex: 1 }}>
                                    <tr>
                                        <th style={{ ...tableHeadStyle, width: "80%" }}>Advice</th>
                                        <th style={{ ...tableHeadStyle, width: "20%" }}>Action</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "2px" }}><input
                                            onFocus={() => setFocusedInput("adviceDescription")}
                                            onBlur={() => setFocusedInput(null)}
                                            style={{ ...inputStyle, backgroundColor: focusedInput === "adviceDescription" ? "#ffffcc" : "white" }} type="text" value={adviceInput.description} onChange={(e) => setAdviceInput({ ...adviceInput, description: e.target.value })} placeholder="Advice Description" /></td>
                                        <td style={{ padding: "2px" }}><button type="button" onClick={handleAddAdvice} style={{ width: "100%", backgroundColor: "#337ab7", color: "white", border: "none", borderRadius: "3px", padding: "3px", cursor: "pointer" }}>Add</button></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adviceList.map((item, idx) => (
                                        <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                                            <td style={{ padding: "5px", fontSize: "12px" }}>{item.description}</td>
                                            <td style={{ padding: "5px", textAlign: "center" }}><span onClick={() => handleDeleteAdvice(item.id)} style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}>X</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "15px" }}>
                    <button type="button" style={{ margin: "0 5px", padding: "6px 15px", backgroundColor: "#337ab7", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Preview</button>
                    <button type="button" onClick={handleSave} style={{ margin: "0 5px", padding: "6px 15px", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save</button>
                    <button type="button" style={{ margin: "0 5px", padding: "6px 15px", backgroundColor: "#5bc0de", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>List</button>
                </div>

            </div>
        </div>
    );
};

export default DischargeCertificate;
