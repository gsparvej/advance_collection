import React, { useState, useEffect } from "react";

const DueCollection = () => {
    // --- State Management ---
    const [formData, setFormData] = useState({
        // Header
        receiptNo: "",
        refDate: new Date().toISOString().split('T')[0], // Default to today

        // Patient Info
        patientId: "",
        regNo: "",
        admissionId: "",
        patientName: "",
        releaseDate: "",
        admissionDate: "",
        admissionTime: "",
        mobileNo: "",
        department: "",
        bedNo: "",
        totalDays: "",
        refDrCode: "",
        refDrName: "",
        address: "",
        underDrCode: "",
        underDrName: "",

        // Search
        search: "",

        // Summary Financials
        dueAmt: "",     // NetDueAmt from API
        givenLess: "",
        netDueAmt: "",  // Calculated

        // Payment
        cashAmt: "",
        netPaymentAmt: "",
        restDue: "",
        cardAmt: "",
        cardNo: "",
        cardBank: "",
        chequeAmt: "",
        chequeNo: "",
        chequeBank: "",
        chequeDate: "",
        remarks: "",

        // Hidden / Tech fields
        packCode: "",
        invNo: "",
        invDate: "",
        billType: "0"
    });

    const [tableData, setTableData] = useState([]);
    const [focusedInput, setFocusedInput] = useState(null);
    const [showList, setShowList] = useState(false);
    const [contractAmt, setContractAmt] = useState("");

    // --- Styling Helpers (Copied/Adapted from PatientRelease) ---
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

    // Calculation Logic for Payments
    useEffect(() => {
        const cash = parseFloat(formData.cashAmt) || 0;
        const card = parseFloat(formData.cardAmt) || 0;
        const cheque = parseFloat(formData.chequeAmt) || 0;
        const netDue = parseFloat(formData.netDueAmt) || 0;

        const totalPayment = cash + card + cheque;
        const restDue = netDue - totalPayment;

        setFormData(prev => ({
            ...prev,
            netPaymentAmt: totalPayment > 0 ? totalPayment.toFixed(2) : "",
            restDue: (netDue > 0 || totalPayment > 0) ? restDue.toFixed(2) : prev.restDue // update if there is activity
        }));
    }, [formData.cashAmt, formData.cardAmt, formData.chequeAmt, formData.netDueAmt]);


    // Validation for Overpayment (from script: if restDue < 0)
    useEffect(() => {
        if (parseFloat(formData.restDue) < 0) {
            // Reset logic if payment exceeds due (as per original script behavior)
            // logic: $("#txtCashAmt").val(''); ...
            // We might want to alert or just clamp, but following script:
            setFormData(prev => ({
                ...prev,
                cashAmt: "",
                cardAmt: "",
                chequeAmt: "",
                netPaymentAmt: "0",
                restDue: prev.netDueAmt // Reset to full due
            }));
            // Optional: Alert user "Payment cannot exceed Net Due"
        }
    }, [formData.restDue]);


    // Mock Patient Search (Replace with API call)
    const handlePatientSearch = (e) => {
        if (e.key === 'Enter') {
            // Simulate API fetch based on PatientID
            console.log("Fetching patient:", formData.patientId);

            // Mock Data Response
            const mockPatient = {
                PatientName: "John Doe",
                MobileNo: "01700000000",
                ReleaseDate: "2023-10-27",
                AdmissionDate: "2023-10-20",
                AdmissionTime: "10:00 AM",
                Department: "Cardiology",
                BedNo: "ICU-01",
                TotalDays: "7",
                RefDrName: "Dr. Smith",
                Address: "123 Main St",
                UnderDrName: "Dr. House",
                ContractAmount: 50000,
                NetDueAmt: 15000
            };

            setFormData(prev => ({
                ...prev,
                patientName: mockPatient.PatientName,
                mobileNo: mockPatient.MobileNo,
                releaseDate: mockPatient.ReleaseDate,
                admissionDate: mockPatient.AdmissionDate,
                admissionTime: mockPatient.AdmissionTime,
                department: mockPatient.Department,
                bedNo: mockPatient.BedNo,
                totalDays: mockPatient.TotalDays,
                refDrName: mockPatient.RefDrName,
                address: mockPatient.Address,
                underDrName: mockPatient.UnderDrName,
                dueAmt: mockPatient.NetDueAmt,
                netDueAmt: mockPatient.NetDueAmt, // Initial Net Due
                restDue: mockPatient.NetDueAmt
            }));
            setContractAmt(mockPatient.ContractAmount);

            // Mock Ledger Items
            setTableData([
                { id: 1, bedDept: "ICU", code: "S001", particulars: "Bed Charge", drCode: "", noU: 7, totalCharge: 7000, prevLess: 0, due: 7000, less: 0 },
                { id: 2, bedDept: "ICU", code: "M001", particulars: "Medicine", drCode: "", noU: 1, totalCharge: 8000, prevLess: 0, due: 8000, less: 0 },
            ]);
        }
    };

    // Calculate Grid Totals (Less column)
    const handleLessChange = (id, val) => {
        const newVal = parseFloat(val) || 0;

        const updatedTable = tableData.map(item => {
            if (item.id === id) {
                // Validation: Less cannot exceed Due
                if (newVal > item.due) {
                    return { ...item, less: 0 }; // Or clamp to item.due
                }
                return { ...item, less: newVal };
            }
            return item;
        });

        setTableData(updatedTable);

        // Update Global Less
        const totalLess = updatedTable.reduce((sum, item) => sum + (parseFloat(item.less) || 0), 0);

        const currentDue = parseFloat(formData.dueAmt) || 0;
        const newNetDue = currentDue - totalLess;

        setFormData(prev => ({
            ...prev,
            givenLess: totalLess,
            netDueAmt: newNetDue,
            restDue: newNetDue - (parseFloat(prev.netPaymentAmt) || 0)
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Saving Due Collection:", formData, tableData);
        alert("Save functionality would trigger here.");
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #d9534f" }}>

                {/* Header Section */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                    <div style={{ width: "33%" }}></div>
                    <div style={{ width: "33%", textAlign: "center" }}>
                        <h3 style={{ fontSize: "18px", margin: 0, color: "#333", fontWeight: "bold" }}>Due Collection</h3>
                    </div>
                    <div style={{ width: "33%", textAlign: "right", fontSize: "12px", fontWeight: "bold", color: "red" }}>
                        {contractAmt && `Contract Amount: ${contractAmt}`}
                    </div>
                </div>

                <form onSubmit={handleSave}>
                    {/* Top Section: Identification (Receipt No, Date) - often hidden or read-only */}
                    <div style={{ ...rowStyle, display: "none" }}> {/* Hidden per Request 'none' class in HTML */}
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Receipt No</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input type="text" name="receiptNo" value={formData.receiptNo} readOnly style={readOnlyInputStyle} />
                        </div>
                    </div>

                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "4px" }}>
                        {/* Row 1: Patient Id, Release Date, Adm Date */}
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
                                    onKeyDown={handlePatientSearch}
                                    placeholder="Patient Id"
                                    autoFocus
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="patientName" value={formData.patientName} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Release Date</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="releaseDate" value={formData.releaseDate} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Adm. Date</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="admissionDate" value={formData.admissionDate} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Row 2: Mobile, Dept, Bed, Total Days */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Mobile No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" name="mobileNo" value={formData.mobileNo} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Department</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="department" value={formData.department} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Bed No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" name="bedNo" value={formData.bedNo} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Total Days</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="totalDays" value={formData.totalDays} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Row 3: Ref By, Address */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Ref By</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="refDrCode" value={formData.refDrCode} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="refDrName" value={formData.refDrName} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Address</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" name="address" value={formData.address} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Row 4: Under Dr, Search */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Under Dr</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input type="text" name="underDrCode" value={formData.underDrCode} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" name="underDrName" value={formData.underDrName} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Search</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input
                                    type="text"
                                    name="search"
                                    value={formData.search}
                                    onChange={handleChange}
                                    placeholder="Search by particulars"
                                    onFocus={() => setFocusedInput("search")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "search" ? "#ffffcc" : "white" }}
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Table Section */}
                    <fieldset style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "4px" }}>
                        <div style={{ height: "250px", overflowY: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                                <thead style={{ position: "sticky", top: 0, backgroundColor: "#f2f2f2", zIndex: 1 }}>
                                    <tr>
                                        {[
                                            { label: "Bed Dept", width: "10%" },
                                            { label: "Code", width: "10%" },
                                            { label: "Particulars", width: "20%" },
                                            // Dr Code hidden
                                            { label: "NoU", width: "5%", textAlign: "center" },
                                            { label: "Total Charge", width: "10%" },
                                            { label: "Prev Less", width: "10%" },
                                            { label: "Due", width: "10%" },
                                            { label: "Less", width: "10%" }, // Input
                                            { label: "Rest Due", width: "10%" }
                                        ].map((col, idx) => (
                                            <th key={idx} style={{
                                                border: "1px solid #ddd",
                                                padding: "8px",
                                                fontSize: "12px",
                                                textAlign: col.textAlign || "left",
                                                width: col.width
                                            }}>
                                                {col.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.length === 0 ? (
                                        <tr><td colSpan="9" style={{ textAlign: "center", padding: "10px", color: "#888", fontSize: "12px" }}>No dues found</td></tr>
                                    ) : (
                                        tableData
                                            .filter(item => !formData.search || item.particulars.toLowerCase().includes(formData.search.toLowerCase()))
                                            .map((item, index) => (
                                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9" }}>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{item.bedDept}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{item.code}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px", color: "#3c8dbc", cursor: "pointer" }}>{item.particulars}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px", textAlign: "center" }}>{item.noU}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{item.totalCharge}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{item.prevLess}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{item.due}</td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>
                                                        <input
                                                            type="text"
                                                            value={item.less}
                                                            onChange={(e) => handleLessChange(item.id, e.target.value)}
                                                            style={{ width: "100%", boxSizing: "border-box", border: "1px solid #ccc", padding: "2px" }}
                                                        />
                                                    </td>
                                                    <td style={{ border: "1px solid #ddd", padding: "4px", fontSize: "12px" }}>{(item.due - (item.less || 0)).toFixed(2)}</td>
                                                </tr>
                                            ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </fieldset>

                    {/* Summary Section */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "8px", marginBottom: "10px", borderRadius: "4px" }}>
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Due Amount</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.dueAmt} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Less</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.givenLess} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Net Due</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" name="netDueAmt" value={formData.netDueAmt} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>
                    </fieldset>

                    {/* Payment Section */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "8px", marginBottom: "10px", borderRadius: "4px" }}>
                        {/* Cash */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>CashAmt</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="cashAmt"
                                    value={formData.cashAmt}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    onFocus={() => setFocusedInput("cashAmt")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "cashAmt" ? "#ffffcc" : "white" }}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Net Payment</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.netPaymentAmt} readOnly style={readOnlyInputStyle} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Rest Due</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" value={formData.restDue} readOnly style={readOnlyInputStyle} />
                            </div>
                        </div>

                        {/* Card */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>CardAmt</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="cardAmt"
                                    value={formData.cardAmt}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    onFocus={() => setFocusedInput("cardAmt")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "cardAmt" ? "#ffffcc" : "white" }}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>CardNo</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="cardNo"
                                    value={formData.cardNo}
                                    onChange={handleChange}
                                    placeholder="Card No"
                                    onFocus={() => setFocusedInput("cardNo")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "cardNo" ? "#ffffcc" : "white" }}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>CardBank</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select
                                    onFocus={() => setFocusedInput("cardBank")}
                                    onBlur={() => setFocusedInput(null)}

                                    style={{
                                        ...inputStyle,
                                        backgroundColor: focusedInput === "cardBank" ? "#ffffcc" : "white"
                                    }} name="cardBank" value={formData.cardBank} onChange={handleChange} >
                                    <option value="">---Select---</option>
                                    <option value="31">AB BANK</option>
                                    <option value="51">BKASH</option>
                                    <option value="5">DBBL</option>
                                    <option value="52">NAGAD</option>
                                    <option value="53">ROCKET</option>
                                </select>
                            </div>
                        </div>

                        {/* Cheque */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>ChequeAmt</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="chequeAmt"
                                    value={formData.chequeAmt}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    onFocus={() => setFocusedInput("chequeAmt")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "chequeAmt" ? "#ffffcc" : "white" }}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>ChequeNo</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="chequeNo"
                                    value={formData.chequeNo}
                                    onChange={handleChange}
                                    placeholder="Cheque No"
                                    onFocus={() => setFocusedInput("chequeNo")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "chequeNo" ? "#ffffcc" : "white" }}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>ChequeBank</label>
                            </div>
                            <div style={colStyle("16.66%")}>

                                <select
                                    onFocus={() => setFocusedInput("chequeBank")}
                                    onBlur={() => setFocusedInput(null)}

                                    style={{
                                        ...inputStyle,
                                        backgroundColor: focusedInput === "chequeBank" ? "#ffffcc" : "white"
                                    }} name="chequeBank" value={formData.chequeBank} onChange={handleChange}>
                                    <option value="">---Select---</option>
                                    <option value="31">AB BANK</option>
                                    <option value="51">BKASH</option>
                                    <option value="5">DBBL</option>
                                </select>
                            </div>
                        </div>

                        {/* Cheque Date, Remarks */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Cheque Date</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    onFocus={() => setFocusedInput("chequeDate")}
                                    onBlur={() => setFocusedInput(null)}

                                    style={{
                                        ...inputStyle,
                                        backgroundColor: focusedInput === "chequeDate" ? "#ffffcc" : "white"
                                    }} type="date" name="chequeDate" value={formData.chequeDate} onChange={handleChange} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Remarks</label>
                            </div>
                            <div style={colStyle("50%")}>
                                <input
                                    onFocus={() => setFocusedInput("remarks")}
                                    onBlur={() => setFocusedInput(null)}

                                    style={{
                                        ...inputStyle,
                                        backgroundColor: focusedInput === "remarks" ? "#ffffcc" : "white"
                                    }} type="text" name="remarks" value={formData.remarks} onChange={handleChange} />
                            </div>
                        </div>
                    </fieldset>

                    {/* Action Buttons */}
                    <div style={{ ...rowStyle, justifyContent: "center", marginTop: "20px", gap: "10px" }}>
                        <button
                            type="submit"
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
                            List
                        </button>
                    </div>
                </form>

                {/* List View (Placeholder) */}
                {showList && (
                    <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
                        <h4 style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>Collection History</h4>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", border: "1px solid #ddd" }}>
                            <thead style={{ backgroundColor: "#f9f9f9" }}>
                                <tr>
                                    {["Receipt No", "Date", "Patient ID", "Name", "Amount", "User", "Print"].map((head, i) => (
                                        <th key={i} style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="7" style={{ textAlign: "center", padding: "10px", color: "#888" }}>No recent collections found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DueCollection;
