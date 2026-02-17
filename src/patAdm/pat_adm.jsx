import React, { useState } from 'react';

const PatientAdmission = () => {
    const [formData, setFormData] = useState({
        regNo: '',
        patientType: 'General',
        isPackage: 'No',
        packageId: '',
        packageName: '',
        admissionId: '',
        patientName: '',
        patientSex: 'Male',
        patientAge: '',
        ageYear: '',
        ageMon: '',
        ageDay: '',
        fatherName: '',
        spouseName: '',
        telephoneNo: '',
        patientAddress: '',
        occupation: '',
        religion: 'Islam',
        bedNo: '',
        bedCharge: '',
        admissionCharge: '',
        relatives: 'No',
        contractAmount: '', // Shown conditionally? HTML has "none" class but logic says otherwise? Re-check. HTML has span class="none"
        advance: '',
        guardian1: '',
        relation1: '',
        phone1: '',
        guardian2: '',
        relation2: '',
        phone2: '',
        drCode: '',
        drName: '',
        underDrCode: '',
        underDrName: '',
        hospitalName: '',
        hospitalAddress: '',
        otCode: '',
        otName: '',
        admittedDept: '',
        isCorporate: 'No',
        corporateId: '',
        corporateName: '',
        attachedPtId: '',
        attachedRoomNo: '',
        corporatePaymentType: '0',
        mediDrCode: '',
        mediDrName: '',
        ambulanceCode: '',
        ambulanceName: '',
        assistCode1: '',
        assistName1: '',
        assistCode2: '',
        assistName2: '',
        driverName: '',
        meterFrom: '',
        meterTo: '',
        remarks: '',
        broker: '',
        brokerName: ''
    });

    const [focusedInput, setFocusedInput] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        let key = id;

        // Manual mapping based on IDs
        if (id === 'txtReg') key = 'regNo';
        else if (id === 'txtPatientType') key = 'patientType';
        else if (id === 'txtIsPackage') key = 'isPackage';
        else if (id === 'txtPackageId') key = 'packageId';
        else if (id === 'txtPackageName') key = 'packageName';
        else if (id === 'txtAdmissionId') key = 'admissionId';
        else if (id === 'txtPatientName') key = 'patientName';
        else if (id === 'txtPatientSex') key = 'patientSex';
        else if (id === 'txtPatientAge') key = 'patientAge';
        else if (id === 'txtAgeYear') key = 'ageYear';
        else if (id === 'txtAgeMon') key = 'ageMon';
        else if (id === 'txtAgeDay') key = 'ageDay';
        else if (id === 'txtFatherName') key = 'fatherName';
        else if (id === 'txtSpouseName') key = 'spouseName';
        else if (id === 'txtTelephoneNo') key = 'telephoneNo';
        else if (id === 'txtPatientAddress') key = 'patientAddress';
        else if (id === 'txtOccupation') key = 'occupation';
        else if (id === 'txtReligion') key = 'religion';
        else if (id === 'txtBedNo') key = 'bedNo';
        else if (id === 'txtBedCharge') key = 'bedCharge';
        else if (id === 'txtAdmissionCharge') key = 'admissionCharge';
        else if (id === 'txtRelatives') key = 'relatives';
        else if (id === 'txtContractAmount') key = 'contractAmount';
        else if (id === 'txtAdvance') key = 'advance';
        else if (id === 'txtGuardian1') key = 'guardian1';
        else if (id === 'txtRelation1') key = 'relation1';
        else if (id === 'txtPhone1') key = 'phone1';
        else if (id === 'txtGuardian2') key = 'guardian2';
        else if (id === 'txtRelation2') key = 'relation2';
        else if (id === 'txtPhone2') key = 'phone2';
        else if (id === 'txtDrCode') key = 'drCode';
        else if (id === 'txtDrName') key = 'drName';
        else if (id === 'txtUnderDrCode') key = 'underDrCode';
        else if (id === 'txtUnderDrName') key = 'underDrName';
        else if (id === 'txtHospitalName') key = 'hospitalName';
        else if (id === 'txtHospitalAddress') key = 'hospitalAddress';
        else if (id === 'txtOtCode') key = 'otCode';
        else if (id === 'txtOtName') key = 'otName';
        else if (id === 'txtAdmittedDept') key = 'admittedDept';
        else if (id === 'txtIsCorporate') key = 'isCorporate';
        else if (id === 'txtCorporateId') key = 'corporateId';
        else if (id === 'txtCorporateName') key = 'corporateName';
        else if (id === 'txtAttachedptId') key = 'attachedPtId';
        else if (id === 'txtAttachedRoomNo') key = 'attachedRoomNo';
        else if (id === 'txtCorporatePaymentType') key = 'corporatePaymentType';
        else if (id === 'txtMediDrCode') key = 'mediDrCode';
        else if (id === 'txtMediDrName') key = 'mediDrName';
        else if (id === 'txtAmbulanceCode') key = 'ambulanceCode';
        else if (id === 'txtAmbulanceName') key = 'ambulanceName';
        else if (id === 'txtAssistCode1') key = 'assistCode1';
        else if (id === 'txtAssistName1') key = 'assistName1';
        else if (id === 'txtAssistCode2') key = 'assistCode2';
        else if (id === 'txtAssistName2') key = 'assistName2';
        else if (id === 'txtDrivername') key = 'driverName';
        else if (id === 'txtMeterFrom') key = 'meterFrom';
        else if (id === 'txtMeterTo') key = 'meterTo';
        else if (id === 'txtRemarks') key = 'remarks';
        else if (id === 'txtBroker') key = 'broker';
        else if (id === 'txtBrokerName') key = 'brokerName';

        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        console.log('Saving Patient Admission:', formData);
        alert('Data saved (check console)');
    };

    // Styling constants (reused from pat_reg.jsx)
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

    const getRowStyle = (marginBottom = "8px") => ({
        display: "flex",
        marginBottom: marginBottom,
        alignItems: "center"
    });

    const colStyle = (widthPercent) => ({
        width: widthPercent,
        padding: "0 4px",
        boxSizing: "border-box"
    });

    const focusStyle = (fieldId) => ({
        ...inputStyle,
        backgroundColor: focusedInput === fieldId ? "#ffffcc" : "white"
    });

    const disabledStyle = {
        ...inputStyle,
        backgroundColor: "#e9ecef",
        cursor: "not-allowed"
    };

    const handleFocus = (fieldId) => setFocusedInput(fieldId);
    const handleBlur = () => setFocusedInput(null);

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #00a65a" }}>
                <div className="box-header" style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <h3 className="box-title" style={{ margin: 0, fontSize: '18px', color: '#333' }}>Patient Admission</h3>
                </div>
                <div className="box-body">
                    <form className="item-reg" id="validate">
                        {/* Top Section */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtReg">Registration No <span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtReg" autoComplete="off" value={formData.regNo} onChange={handleChange} onFocus={() => handleFocus('txtReg')} onBlur={handleBlur} style={focusStyle('txtReg')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPatientType">Patient Type</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtPatientType" value={formData.patientType} onChange={handleChange} onFocus={() => handleFocus('txtPatientType')} onBlur={handleBlur} style={focusStyle('txtPatientType')}>
                                    <option value="General">General</option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Director">Director</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Staff Relative">Staff Relative</option>
                                    <option value="Orphan / Poor Card">Orphan / Poor Card</option>
                                    <option value="Health Card">Health Card</option>
                                </select>
                            </div>
                            <div style={colStyle("8.33%")}>
                                <a href="/patient-registration" className="btn btn-info btn-sm" style={{ backgroundColor: '#00c0ef', borderColor: '#00acd6', color: 'white', padding: '5px 10px', textDecoration: 'none', borderRadius: '3px', fontSize: '12px', display: 'inline-block' }}><b> Registration </b></a>
                            </div>
                            <div style={colStyle("25%")}>
                                <input type="text" id="lblDiscountCardNote" disabled style={{ ...disabledStyle, color: 'red' }} />
                            </div>
                        </div>

                        {/* Package Section */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtIsPackage">Package</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtIsPackage" value={formData.isPackage} onChange={handleChange} onFocus={() => handleFocus('txtIsPackage')} onBlur={handleBlur} style={focusStyle('txtIsPackage')}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPackageId">Package Name</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtPackageId" disabled={formData.isPackage === 'No'} value={formData.packageId} onChange={handleChange} onFocus={() => handleFocus('txtPackageId')} onBlur={handleBlur} style={formData.isPackage === 'No' ? disabledStyle : focusStyle('txtPackageId')} />
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" id="txtPackageName" disabled value={formData.packageName} style={disabledStyle} />
                            </div>
                        </div>

                        {/* Patient Information Fieldset */}
                        <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                            <legend style={{ fontSize: "14px", fontWeight: "bold", color: "#666", width: "auto", borderBottom: "none", marginBottom: "5px" }}>Patient Information</legend>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPatientName">Patient Name <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtPatientName" value={formData.patientName} onChange={handleChange} onFocus={() => handleFocus('txtPatientName')} onBlur={handleBlur} style={focusStyle('txtPatientName')} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtPatientSex">Gender <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtPatientSex" value={formData.patientSex} onChange={handleChange} onFocus={() => handleFocus('txtPatientSex')} onBlur={handleBlur} style={focusStyle('txtPatientSex')}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPatientAge">Age <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtPatientAge" value={formData.patientAge} onChange={handleChange} onFocus={() => handleFocus('txtPatientAge')} onBlur={handleBlur} style={focusStyle('txtPatientAge')} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtFatherName">Father's Name <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtFatherName" value={formData.fatherName} onChange={handleChange} onFocus={() => handleFocus('txtFatherName')} onBlur={handleBlur} style={focusStyle('txtFatherName')} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtSpouseName">Spouse</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtSpouseName" value={formData.spouseName} onChange={handleChange} onFocus={() => handleFocus('txtSpouseName')} onBlur={handleBlur} style={focusStyle('txtSpouseName')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtTelephoneNo">Mobile No <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtTelephoneNo" value={formData.telephoneNo} onChange={handleChange} onFocus={() => handleFocus('txtTelephoneNo')} onBlur={handleBlur} style={focusStyle('txtTelephoneNo')} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPatientAddress">Address <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtPatientAddress" value={formData.patientAddress} onChange={handleChange} onFocus={() => handleFocus('txtPatientAddress')} onBlur={handleBlur} style={focusStyle('txtPatientAddress')} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtOccupation">Occupation</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtOccupation" value={formData.occupation} onChange={handleChange} onFocus={() => handleFocus('txtOccupation')} onBlur={handleBlur} style={focusStyle('txtOccupation')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtReligion">Religion</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtReligion" value={formData.religion} onChange={handleChange} onFocus={() => handleFocus('txtReligion')} onBlur={handleBlur} style={focusStyle('txtReligion')}>
                                        <option value="Islam">Islam</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddhist">Buddhist</option>
                                        <option value="Christian">Christian</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>

                        {/* Bed Information Fieldset */}
                        <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                            <legend style={{ fontSize: "14px", fontWeight: "bold", color: "#666", width: "auto", borderBottom: "none", marginBottom: "5px" }}>Bed Information</legend>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtBedNo">Bed No <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtBedNo" autoComplete="off" value={formData.bedNo} onChange={handleChange} onFocus={() => handleFocus('txtBedNo')} onBlur={handleBlur} style={focusStyle('txtBedNo')} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtBedCharge">Bed Charge</label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtBedCharge" disabled value={formData.bedCharge} style={disabledStyle} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtAdmissionCharge">Admission Charge</label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtAdmissionCharge" disabled value={formData.admissionCharge} style={disabledStyle} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtRelatives">Relatives</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtRelatives" value={formData.relatives} onChange={handleChange} onFocus={() => handleFocus('txtRelatives')} onBlur={handleBlur} style={focusStyle('txtRelatives')}>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>

                        {/* Guardian Information Fieldset */}
                        <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                            <legend style={{ fontSize: "14px", fontWeight: "bold", color: "#666", width: "auto", borderBottom: "none", marginBottom: "5px" }}>Guardian Information</legend>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtGuardian1">Guardian Name <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtGuardian1" value={formData.guardian1} onChange={handleChange} onFocus={() => handleFocus('txtGuardian1')} onBlur={handleBlur} style={focusStyle('txtGuardian1')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtRelation1">Relation <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtRelation1" value={formData.relation1} onChange={handleChange} onFocus={() => handleFocus('txtRelation1')} onBlur={handleBlur} style={focusStyle('txtRelation1')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPhone1">Phone <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtPhone1" value={formData.phone1} onChange={handleChange} onFocus={() => handleFocus('txtPhone1')} onBlur={handleBlur} style={focusStyle('txtPhone1')} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtGuardian2">Guardian Name</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtGuardian2" value={formData.guardian2} onChange={handleChange} onFocus={() => handleFocus('txtGuardian2')} onBlur={handleBlur} style={focusStyle('txtGuardian2')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtRelation2">Relation</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtRelation2" value={formData.relation2} onChange={handleChange} onFocus={() => handleFocus('txtRelation2')} onBlur={handleBlur} style={focusStyle('txtRelation2')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPhone2">Phone</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtPhone2" value={formData.phone2} onChange={handleChange} onFocus={() => handleFocus('txtPhone2')} onBlur={handleBlur} style={focusStyle('txtPhone2')} />
                                </div>
                            </div>
                        </fieldset>

                        {/* Doctor Information Fieldset */}
                        <fieldset style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "15px", borderRadius: "4px" }}>
                            <legend style={{ fontSize: "14px", fontWeight: "bold", color: "#666", width: "auto", borderBottom: "none", marginBottom: "5px" }}>Doctor Information</legend>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtDrCode">Ref. By <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtDrCode" autoComplete="off" value={formData.drCode} onChange={handleChange} onFocus={() => handleFocus('txtDrCode')} onBlur={handleBlur} style={focusStyle('txtDrCode')} />
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtDrName" disabled value={formData.drName} style={disabledStyle} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtUnderDrCode">Under Dr. <span style={{ color: 'red' }}>*</span></label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtUnderDrCode" autoComplete="off" value={formData.underDrCode} onChange={handleChange} onFocus={() => handleFocus('txtUnderDrCode')} onBlur={handleBlur} style={focusStyle('txtUnderDrCode')} />
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtUnderDrName" disabled value={formData.underDrName} style={disabledStyle} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtOtCode">Operation Name</label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtOtCode" autoComplete="off" value={formData.otCode} onChange={handleChange} onFocus={() => handleFocus('txtOtCode')} onBlur={handleBlur} style={focusStyle('txtOtCode')} />
                                </div>
                                <div style={colStyle("41.66%")}>
                                    <input type="text" id="txtOtName" disabled value={formData.otName} style={disabledStyle} />
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <label style={labelStyle} htmlFor="txtAdmittedDept">Department</label>
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtAdmittedDept" disabled value={formData.admittedDept} style={disabledStyle} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtIsCorporate">Corporate Client</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtIsCorporate" value={formData.isCorporate} onChange={handleChange} onFocus={() => handleFocus('txtIsCorporate')} onBlur={handleBlur} style={focusStyle('txtIsCorporate')}>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtCorporateId" disabled={formData.isCorporate === 'No'} value={formData.corporateId} onChange={handleChange} onFocus={() => handleFocus('txtCorporateId')} onBlur={handleBlur} style={formData.isCorporate === 'No' ? disabledStyle : focusStyle('txtCorporateId')} />
                                </div>
                                <div style={colStyle("50%")}>
                                    <input type="text" id="txtCorporateName" disabled value={formData.corporateName} style={disabledStyle} />
                                </div>
                            </div>
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtAttachedptId">Attached Id</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtAttachedptId" autoComplete="off" value={formData.attachedPtId} onChange={handleChange} onFocus={() => handleFocus('txtAttachedptId')} onBlur={handleBlur} style={focusStyle('txtAttachedptId')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtAttachedRoomNo">Attached Room</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtAttachedRoomNo" disabled value={formData.attachedRoomNo} style={disabledStyle} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtCorporatePaymentType">Corporate Pay Type</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtCorporatePaymentType" value={formData.corporatePaymentType} onChange={handleChange} onFocus={() => handleFocus('txtCorporatePaymentType')} onBlur={handleBlur} style={focusStyle('txtCorporatePaymentType')}>
                                        <option value="0">---Select---</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Credit">Credit</option>
                                    </select>
                                </div>
                            </div>

                            {/* Extra fields from HTML (Ambulance, Assist, Driver, etc.) */}
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtMediDrCode">Mr Id</label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtMediDrCode" autoComplete="off" value={formData.mediDrCode} onChange={handleChange} onFocus={() => handleFocus('txtMediDrCode')} onBlur={handleBlur} style={focusStyle('txtMediDrCode')} />
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtMediDrName" disabled value={formData.mediDrName} style={disabledStyle} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtAmbulanceCode">Ambulance</label>
                                </div>
                                <div style={colStyle("8.33%")}>
                                    <input type="text" id="txtAmbulanceCode" value={formData.ambulanceCode} onChange={handleChange} onFocus={() => handleFocus('txtAmbulanceCode')} onBlur={handleBlur} style={focusStyle('txtAmbulanceCode')} />
                                </div>
                                <div style={colStyle("25%")}>
                                    <input type="text" id="txtAmbulanceName" disabled value={formData.ambulanceName} style={disabledStyle} />
                                </div>
                            </div>

                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtRemarks">Remarks</label>
                                </div>
                                <div style={colStyle("33.33%")}>
                                    <input type="text" id="txtRemarks" value={formData.remarks} onChange={handleChange} onFocus={() => handleFocus('txtRemarks')} onBlur={handleBlur} style={focusStyle('txtRemarks')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtBroker">Patient Source</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtBroker" autoComplete="off" value={formData.broker} onChange={handleChange} onFocus={() => handleFocus('txtBroker')} onBlur={handleBlur} style={focusStyle('txtBroker')} />
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtBrokerName" disabled value={formData.brokerName} style={disabledStyle} />
                                </div>
                            </div>
                        </fieldset>

                        {/* Buttons */}
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <input type="button" className="btn btn-success" id="btnSave" value="Save" onClick={handleSave} style={{ marginRight: '20px', backgroundColor: '#00a65a', borderColor: '#008d4c', color: 'white', padding: '6px 12px', fontSize: '14px', cursor: 'pointer', borderRadius: '4px', border: '1px solid transparent' }} />
                            <a href="javascript:;" className="btn btn-primary" id="invList" style={{ backgroundColor: '#3c8dbc', borderColor: '#367fa9', color: 'white', padding: '6px 12px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px', display: 'inline-block', border: '1px solid transparent' }}>List</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PatientAdmission;
