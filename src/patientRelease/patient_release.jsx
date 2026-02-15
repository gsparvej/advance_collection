import React, { useState, useEffect } from "react";

const PatientRelease = () => {
    // Note: State object based on the HTML fields provided
    const [formData, setFormData] = useState({
        receiptNo: "",
        releaseDate: "",
        patientId: "",
        regNo: "",
        admissionId: "", // Hidden in HTML
        admissionDate: "",
        admissionTime: "",
        patientName: "",
        mobileNo: "",
        department: "",
        address: "",
        bedNo: "",
        totalDays: "",
        refDrCode: "",
        refDrName: "",
        underDrCode: "",
        underDrName: "",
        admRemarks: "",
        modifyNote: "",
        search: "",

        // Financials - Fieldset 2
        totalCharge: "",
        patientStatus: "",
        printType: "",
        serviceChargeAmt: "",
        advanceAmt: "",
        grandTotal: "",
        previousLess: "",
        givenLess: "",
        netTotalAmt: "", // Payable
        returnAmt: "",
        grandLess: "", // Total Less

        // Payment - Fieldset 3
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
        remarks: "", // Final remarks

        // Hidden fields required for submission
        packCode: "",
        invNo: "",
        invDate: "",
        billType: "0",
        canReleaseIfDue: "1"
    });

    const [tableData, setTableData] = useState([]);
    const [focusedInput, setFocusedInput] = useState(null);
    const [showList, setShowList] = useState(false); // Toggle for List view

    // Dummy handler for changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearchCodeList = () => {
        console.log("Searching code list:", formData.search);
        // Implement filter logic for table here based on 'Description' column
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Saving Patient Release data:", formData);
        alert("Saved!");
    };

    const handlePreviewBill = () => {
        console.log("Preview Bill");
        alert("Previewing Bill");
    };

    // Helper for input styles - copied from bill_modify.jsx for consistency
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

    // Helper specific to this form to handle readOnly look (grey background)
    const readOnlyInputStyle = {
        ...inputStyle,
        backgroundColor: "#e9ecef",
        cursor: "not-allowed"
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #d9534f" }}> {/* Red top border for 'box-danger' */}

                {/* Header Section */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                    <div style={{ width: "33%", textAlign: "left", fontSize: "12px" }}>
                        <i id="lblOpdDue"></i>
                    </div>
                    <div style={{ width: "33%", textAlign: "center" }}>
                        <h2 style={{ fontSize: "18px", margin: 0, color: "#333" }}>Patient Release</h2>
                        <i id="txtPharmaStatus" style={{ fontSize: "11px" }}></i>
                    </div>
                    <div style={{ width: "33%", textAlign: "right", fontSize: "12px" }}>
                        <span id="lblContractAmt" style={{ marginRight: "10px" }}></span>
                        <span id="lblPharmaDue"></span>
                    </div>
                </div>

                <form onSubmit={handleSave}>
                    {/* Row 1: Receipt No, Release Date - Initialize hidden group */}
                    {/* The HTML has a group with class "none", which typically means hidden. 
                        However, the inputs inside are Receipt No and Release Date. usually visible. 
                        I will assume they should be visible based on "form-group none" being potentially a toggle or specific class behavior. 
                        Given "none" in bootstrap usually means display:none, I'll hide it for now as per class name, 
                        BUT "Release Date" is usually important. Let's make them visible but with a note if they should be hidden.
                        Wait, the HTML says <div class="form-group none">. I will hide it to be safe, or show if it seems critical.
                        Let's show them for now as they seem like header info. 
                        Actually, looking at the 'none' usage in table, it means hidden. 
                        I will hide it if the class is explicitly 'none'. 
                    */}
                    <div style={{ ...rowStyle, display: "none" }}>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Receipt No</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="receiptNo"
                                value={formData.receiptNo}
                                readOnly
                                disabled
                                style={readOnlyInputStyle}
                            />
                        </div>
                        <div style={colStyle("16.66%")}>
                            <label style={labelStyle}>Release Date</label>
                        </div>
                        <div style={colStyle("16.66%")}>
                            <input
                                type="text"
                                name="releaseDate"
                                value={formData.releaseDate}
                                readOnly
                                disabled
                                style={readOnlyInputStyle}
                            />
                        </div>
                    </div>

                    <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "4px" }}>
                        {/* Row 2: Patient Id, Admission Date, Admission Time */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Patient Id</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input
                                    type="text"
                                    name="patientId"
                                    value={formData.patientId}
                                    onChange={handleChange}
                                    placeholder="Patient Id"
                                    onFocus={() => setFocusedInput("patientId")}
                                    onBlur={() => setFocusedInput(null)}
                                    style={{ ...inputStyle, backgroundColor: focusedInput === "patientId" ? "#ffffcc" : "white" }}
                                    autoFocus
                                    autoComplete="off"
                                />
                                <input type="hidden" name="regNo" value={formData.regNo} />
                                <input type="hidden" name="admissionId" value={formData.admissionId} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Admission Date & Time</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="admissionTime"
                                    value={formData.admissionTime}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row 3: Patient Name, Mobile No, Department */}
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
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Mobile No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Department</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row 4: Address, Bed No, Total Days */}
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
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Bed No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="bedNo"
                                    value={formData.bedNo}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("8.33%")}>
                                <label style={labelStyle}>Total Days</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    type="text"
                                    name="totalDays"
                                    value={formData.totalDays}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row 5: Ref By, Under Dr */}
                        <div style={rowStyle}>
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
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    type="text"
                                    name="refDrName"
                                    value={formData.refDrName}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Under Dr</label>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <input
                                    type="text"
                                    name="underDrCode"
                                    value={formData.underDrCode}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    type="text"
                                    name="underDrName"
                                    value={formData.underDrName}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row 6: Admission Remarks, Modify Note, Search */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Admission Remarks</label>
                            </div>
                            <div style={colStyle("41.66%")}>
                                <input
                                    type="text"
                                    name="admRemarks"
                                    value={formData.admRemarks}
                                    readOnly
                                    disabled
                                    placeholder="Remarks"
                                    style={{ ...readOnlyInputStyle, color: "blue" }}
                                />
                            </div>
                            <div style={colStyle("25%")}>
                                <input
                                    type="text"
                                    name="modifyNote"
                                    value={formData.modifyNote}
                                    readOnly
                                    disabled
                                    placeholder="Modify Notes"
                                    style={{ ...readOnlyInputStyle, color: "blue" }}
                                />
                            </div>

                            <div style={{ ...colStyle("16.66%"), display: "flex" }}>
                                <label style={{ ...labelStyle, width: "30%", paddingRight: "4px" }}>Search</label>
                                <div style={{ width: "70%" }}>
                                    <input
                                        type="text"
                                        name="search"
                                        value={formData.search}
                                        onChange={(e) => { handleChange(e); handleSearchCodeList(); }}
                                        placeholder="Search by descriptions"
                                        style={inputStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/* Table Section */}
                    <fieldset style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "4px" }}>
                        <div style={{ height: "340px", overflowY: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                                <thead style={{ position: "sticky", top: 0, backgroundColor: "#f2f2f2", zIndex: 1 }}>
                                    <tr>
                                        {[
                                            { label: "Bed Dept", width: "10%", display: "table-cell" },
                                            { label: "Code", width: "10%", display: "table-cell" },
                                            { label: "Description", width: "20%", display: "table-cell" },
                                            { label: "Dr. Code", width: "0%", display: "none" },
                                            { label: "Charge", width: "10%", display: "table-cell" },
                                            { label: "N.O.U", width: "10%", display: "table-cell" },
                                            { label: "Sc.Charge", width: "0%", display: "none" },
                                            { label: "T.Charge", width: "10%", display: "table-cell" },
                                            { label: "P.Less", width: "10%", display: "table-cell" },
                                            { label: "Less", width: "10%", display: "table-cell" },
                                            { label: "Net Total", width: "10%", display: "table-cell" },
                                            { label: "Due", width: "0%", display: "none" },
                                        ].map((col, idx) => (
                                            <th key={idx} style={{
                                                border: "1px solid #ddd",
                                                padding: "8px",
                                                fontSize: "12px",
                                                textAlign: "left",
                                                width: col.width,
                                                display: col.display
                                            }}>
                                                {col.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                                    {tableData.length === 0 && (
                                        <tr>
                                            <td colSpan="12" style={{ textAlign: "center", padding: "10px", fontSize: "12px", color: "#888" }}>
                                                No items added
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </fieldset>

                    {/* Financials Section */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "8px", marginBottom: "10px", borderRadius: "4px" }}>
                        {/* Row: Total Charge, Patient Status, Print Type */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Total Charge</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="totalCharge"
                                    value={formData.totalCharge}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Patient Status</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select
                                    name="patientStatus"
                                    value={formData.patientStatus}
                                    onChange={handleChange}
                                    style={inputStyle}
                                >
                                    <option value="">---Select---</option>
                                    <option value="1">Discharge</option>
                                    <option value="2">Reffered</option>
                                    <option value="5">Re-Admission</option>
                                    <option value="4">Transfer</option>
                                    <option value="3">Death</option>
                                    <option value="6">Improved</option>
                                    <option value="7">DOR</option>
                                </select>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Print Type</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select
                                    name="printType"
                                    value={formData.printType}
                                    onChange={handleChange}
                                    style={inputStyle}
                                >
                                    <option value="">---Select---</option>
                                </select>
                            </div>
                        </div>

                        {/* Row: Service Charge, Advance */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Service Charge</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="serviceChargeAmt"
                                    value={formData.serviceChargeAmt}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Advance</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="advanceAmt"
                                    value={formData.advanceAmt}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row: Grand Total, Previous Less, Less */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Grand Total</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="grandTotal"
                                    value={formData.grandTotal}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Previous Less</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="previousLess"
                                    value={formData.previousLess}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Less</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="givenLess"
                                    value={formData.givenLess}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* Row: Payable, Return Amount, Total Less */}
                        <div style={rowStyle}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Payable</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="netTotalAmt"
                                    value={formData.netTotalAmt}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Return Amount</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="returnAmt"
                                    value={formData.returnAmt}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Total Less</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="grandLess"
                                    value={formData.grandLess}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Payment Section */}
                    <fieldset style={{ border: "1px solid #ddd", padding: "8px", marginBottom: "10px", borderRadius: "4px" }}>
                        {/* CashAmt, Net Payment, Rest Due */}
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
                                    style={inputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Net Payment</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="netPaymentAmt"
                                    value={formData.netPaymentAmt}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Rest Due</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input
                                    type="text"
                                    name="restDue"
                                    value={formData.restDue}
                                    readOnly
                                    disabled
                                    style={readOnlyInputStyle}
                                />
                            </div>
                        </div>

                        {/* CardAmt, CardNo, CardBank */}
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
                                    style={inputStyle}
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
                                    style={inputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>CardBank</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select
                                    name="cardBank"
                                    value={formData.cardBank}
                                    onChange={handleChange}
                                    style={inputStyle}
                                >
                                    <option value="">---Select---</option>
                                    <option value="31">AB BANK</option>
                                    <option value="51">BKASH</option>
                                    <option value="37">BRAC BANK LTD.</option>
                                    <option value="5">DBBL</option>
                                    <option value="52">NAGAD</option>
                                    <option value="53">ROCKET</option>
                                    {/* Add more banks as needed */}
                                </select>
                            </div>
                        </div>

                        {/* ChequeAmt, ChequeNo, ChequeBank */}
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
                                    style={inputStyle}
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
                                    style={inputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>ChequeBank</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select
                                    name="chequeBank"
                                    value={formData.chequeBank}
                                    onChange={handleChange}
                                    style={inputStyle}
                                >
                                    <option value="">---Select---</option>
                                    {/* Banks options usually same as CardBank */}
                                    <option value="31">AB BANK</option>
                                    <option value="51">BKASH</option>
                                    <option value="37">BRAC BANK LTD.</option>
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
                                    type="date"
                                    name="chequeDate"
                                    value={formData.chequeDate}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle}>Remarks</label>
                            </div>
                            <div style={colStyle("50%")}>
                                <input
                                    type="text"
                                    name="remarks"
                                    value={formData.remarks}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Buttons */}
                    <div style={{ ...rowStyle, justifyContent: "center", marginTop: "20px", gap: "10px" }}>
                        <button type="button" className="btn-primary" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#0275d8", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={handlePreviewBill}>
                            Preview Bill
                        </button>
                        <button type="submit" className="btn-success" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5cb85c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                            Save
                        </button>
                        <button type="button" className="btn-info" style={{ padding: "6px 12px", fontSize: "14px", backgroundColor: "#5bc0de", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }} onClick={() => setShowList(!showList)}>
                            List
                        </button>
                    </div>

                    {/* Hidden Inputs for Logic */}
                    <input type="hidden" name="packCode" value={formData.packCode} />
                    <input type="hidden" name="invNo" value={formData.invNo} />
                    <input type="hidden" name="invDate" value={formData.invDate} />
                    <input type="hidden" name="billType" value={formData.billType} />
                    <input type="hidden" name="canReleaseIfDue" value={formData.canReleaseIfDue} />

                </form>

                {/* List Area */}
                {showList && (
                    <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
                        <div style={{ marginBottom: "10px", width: "30%" }}>
                            <input
                                type="text"
                                placeholder="Search List"
                                className="form-control"
                                style={inputStyle}
                            />
                        </div>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", border: "1px solid #ddd" }}>
                            <thead style={{ backgroundColor: "#f9f9f9" }}>
                                <tr>
                                    {["Receipt No", "Admission Date", "Release Date", "Patient Id", "Patient Name", "Reg No", "Bed No", "Mobile No", "User Name", "Print", "X"].map((head, i) => (
                                        <th key={i} style={{ padding: "8px", border: "1px solid #ddd", textAlign: "left" }}>{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="11" style={{ textAlign: "center", padding: "10px", color: "#888" }}>No records found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PatientRelease;
