import React, { useState } from 'react';

const PatientRegistration = () => {
    const [formData, setFormData] = useState({
        telephoneNo: '',
        patientName: '',
        dob: '',
        ageYear: '',
        ageMon: '',
        ageDay: '',
        gender: 'Male',
        fatherName: '',
        motherName: '',
        spouseName: '',
        presentAddress: '',
        permanentAddress: '',
        bloodGroup: '',
        email: '',
        religion: 'Islam',
        occupation: '',
        nationality: 'Bangladeshi',
        introduceBy: 'Self',
        nationalId: '',
        birthCertificateNo: '',
        passportNo: '',
        refBy: '',
        refByName: '',
        regNo: '',
        patientType: 'General',
        amount: '0',
        status: '1',
        isStaff: 'No',
        postedBy: '',
        corporate: '',
        cardType: '',
        cardNo: '',
        remarks: ''
    });

    const [showCorporate, setShowCorporate] = useState(false);
    const [showStaff, setShowStaff] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        let key = id;
        // Mapping logic (same as before)
        if (id === 'txtTelephoneNo') key = 'telephoneNo';
        else if (id === 'txtPatientName') key = 'patientName';
        else if (id === 'txtDOB') key = 'dob';
        else if (id === 'txtAgeYear') key = 'ageYear';
        else if (id === 'txtAgeMon') key = 'ageMon';
        else if (id === 'txtAgeDay') key = 'ageDay';
        else if (id === 'txtGender') key = 'gender';
        else if (id === 'txtFatherName') key = 'fatherName';
        else if (id === 'txtMotherName') key = 'motherName';
        else if (id === 'txtSpouseName') key = 'spouseName';
        else if (id === 'txtPresentAddress') key = 'presentAddress';
        else if (id === 'txtPermanentAddress') key = 'permanentAddress';
        else if (id === 'txtBloodGroup') key = 'bloodGroup';
        else if (id === 'txtEmail') key = 'email';
        else if (id === 'txtReligion') key = 'religion';
        else if (id === 'txtOccupation') key = 'occupation';
        else if (id === 'txtNationality') key = 'nationality';
        else if (id === 'txtIntroduceBy') key = 'introduceBy';
        else if (id === 'txtNationalId') key = 'nationalId';
        else if (id === 'txtBirthCertificateNo') key = 'birthCertificateNo';
        else if (id === 'txtPassportNo') key = 'passportNo';
        else if (id === 'txtRefBy') key = 'refBy';
        else if (id === 'txtRefByName') key = 'refByName';
        else if (id === 'txtRegNo') key = 'regNo';
        else if (id === 'txtPatientType') key = 'patientType';
        else if (id === 'txtAmount') key = 'amount';
        else if (id === 'txtStatus') key = 'status';
        else if (id === 'txtIsStaff') key = 'isStaff';
        else if (id === 'txtPostedBy') key = 'postedBy';
        else if (id === 'txtCorporate') key = 'corporate';
        else if (id === 'txtCardType') key = 'cardType';
        else if (id === 'txtCardNo') key = 'cardNo';
        else if (id === 'txtRemarks') key = 'remarks';

        setFormData(prev => ({ ...prev, [key]: value }));

        if (id === 'txtPatientType') {
            handlePatientTypeChange(value);
        }
    };

    const handlePatientTypeChange = (type) => {
        if (type === 'Corporate') {
            setShowCorporate(true);
            setShowStaff(false);
        } else if (type === 'Staff' || type === 'Staff Relative') {
            setShowStaff(true);
            setShowCorporate(false);
        } else {
            setShowCorporate(false);
            setShowStaff(false);
        }
    };

    const handleSave = () => {
        console.log('Saving Patient Data:', formData);
        alert('Data saved (check console)');
    };

    // Styling constants
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

    const handleFocus = (fieldId) => setFocusedInput(fieldId);
    const handleBlur = () => setFocusedInput(null);

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", borderTop: "4px solid #00a65a" }}> {/* Green for success */}
                <div className="box-header" style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <h3 className="box-title" style={{ margin: 0, fontSize: '18px', color: '#333' }}>Patient Registration</h3>
                </div>
                <div className="box-body">
                    <form className="item-reg" id="validate">
                        {/* Mobile No, Patient Name */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtTelephoneNo">Mobile No<span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtTelephoneNo" autoComplete="off" value={formData.telephoneNo} onChange={handleChange} onFocus={() => handleFocus('txtTelephoneNo')} onBlur={handleBlur} style={focusStyle('txtTelephoneNo')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPatientName">Patient Name<span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("50%")}>
                                <input type="text" id="txtPatientName" autoComplete="off" value={formData.patientName} onChange={handleChange} onFocus={() => handleFocus('txtPatientName')} onBlur={handleBlur} style={focusStyle('txtPatientName')} />
                            </div>
                        </div>

                        {/* Birth Date, Age, Gender */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtDOB">Birth Date<span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" className="date2 hasDatepicker" id="txtDOB" autoComplete="off" value={formData.dob} onChange={handleChange} onFocus={() => handleFocus('txtDOB')} onBlur={handleBlur} style={focusStyle('txtDOB')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtAgeYear">Age <span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={{ ...colStyle("16.66%"), display: 'flex', gap: '5px' }}>
                                <input type="text" id="txtAgeYear" placeholder="Y" min="0" max="130" value={formData.ageYear} onChange={handleChange} onFocus={() => handleFocus('txtAgeYear')} onBlur={handleBlur} style={{ ...focusStyle('txtAgeYear'), width: '33%' }} />
                                <input type="text" id="txtAgeMon" placeholder="M" min="0" max="12" value={formData.ageMon} onChange={handleChange} onFocus={() => handleFocus('txtAgeMon')} onBlur={handleBlur} style={{ ...focusStyle('txtAgeMon'), width: '33%' }} />
                                <input type="text" id="txtAgeDay" placeholder="D" min="0" max="31" value={formData.ageDay} onChange={handleChange} onFocus={() => handleFocus('txtAgeDay')} onBlur={handleBlur} style={{ ...focusStyle('txtAgeDay'), width: '33%' }} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtGender">Gender <span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtGender" value={formData.gender} onChange={handleChange} onFocus={() => handleFocus('txtGender')} onBlur={handleBlur} style={focusStyle('txtGender')}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>

                        {/* Father's Name, Mother's Name, Spouse Name */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtFatherName">Father's Name <span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtFatherName" value={formData.fatherName} onChange={handleChange} onFocus={() => handleFocus('txtFatherName')} onBlur={handleBlur} style={focusStyle('txtFatherName')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtMotherName">Mother's Name</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtMotherName" value={formData.motherName} onChange={handleChange} onFocus={() => handleFocus('txtMotherName')} onBlur={handleBlur} style={focusStyle('txtMotherName')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtSpouseName">Spouse Name</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtSpouseName" value={formData.spouseName} onChange={handleChange} onFocus={() => handleFocus('txtSpouseName')} onBlur={handleBlur} style={focusStyle('txtSpouseName')} />
                            </div>
                        </div>

                        {/* Present Address, Permanent Address */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPresentAddress">Present Address <span style={{ color: 'red' }}>*</span></label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" id="txtPresentAddress" value={formData.presentAddress} onChange={handleChange} onFocus={() => handleFocus('txtPresentAddress')} onBlur={handleBlur} style={focusStyle('txtPresentAddress')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPermanentAddress">Permanent Address</label>
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" id="txtPermanentAddress" value={formData.permanentAddress} onChange={handleChange} onFocus={() => handleFocus('txtPermanentAddress')} onBlur={handleBlur} style={focusStyle('txtPermanentAddress')} />
                            </div>
                        </div>

                        {/* Blood Group, Email, Religion */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtBloodGroup">Blood Group</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtBloodGroup" value={formData.bloodGroup} onChange={handleChange} onFocus={() => handleFocus('txtBloodGroup')} onBlur={handleBlur} style={focusStyle('txtBloodGroup')}>
                                    <option value=""></option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtEmail">E-mail</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtEmail" value={formData.email} onChange={handleChange} onFocus={() => handleFocus('txtEmail')} onBlur={handleBlur} style={focusStyle('txtEmail')} />
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

                        {/* Occupation, Nationality, Introduced By */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtOccupation">Occupation</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtOccupation" value={formData.occupation} onChange={handleChange} onFocus={() => handleFocus('txtOccupation')} onBlur={handleBlur} style={focusStyle('txtOccupation')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtNationality">Nationality</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtNationality" value={formData.nationality} onChange={handleChange} onFocus={() => handleFocus('txtNationality')} onBlur={handleBlur} style={focusStyle('txtNationality')}>
                                    <option value="Bangladeshi">Bangladeshi</option>
                                </select>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtIntroduceBy">Introduced By</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtIntroduceBy" value={formData.introduceBy} onChange={handleChange} onFocus={() => handleFocus('txtIntroduceBy')} onBlur={handleBlur} style={focusStyle('txtIntroduceBy')}>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="Billboard">Billboard</option>
                                    <option value="Liftlet">Liftlet</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Self">Self</option>
                                </select>
                            </div>
                        </div>

                        {/* NID No, Birth Certificate No, Passport No */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtNationalId">NID No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtNationalId" value={formData.nationalId} onChange={handleChange} onFocus={() => handleFocus('txtNationalId')} onBlur={handleBlur} style={focusStyle('txtNationalId')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtBirthCertificateNo">Birth Certificate </label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtBirthCertificateNo" value={formData.birthCertificateNo} onChange={handleChange} onFocus={() => handleFocus('txtBirthCertificateNo')} onBlur={handleBlur} style={focusStyle('txtBirthCertificateNo')} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtPassportNo">Passport No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtPassportNo" value={formData.passportNo} onChange={handleChange} onFocus={() => handleFocus('txtPassportNo')} onBlur={handleBlur} style={focusStyle('txtPassportNo')} />
                            </div>
                        </div>

                        {/* Ref By, Reg No */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtRefBy">Ref By</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" className="ui-autocomplete-input" id="txtRefBy" autoComplete="off" value={formData.refBy} onChange={handleChange} onFocus={() => handleFocus('txtRefBy')} onBlur={handleBlur} style={focusStyle('txtRefBy')} />
                            </div>
                            <div style={colStyle("33.33%")}>
                                <input type="text" id="txtRefByName" disabled value={formData.refByName} style={{ ...inputStyle, backgroundColor: '#e9ecef', cursor: 'not-allowed' }} />
                            </div>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtRegNo">Reg No</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtRegNo" disabled value={formData.regNo} style={{ ...inputStyle, backgroundColor: '#e9ecef', cursor: 'not-allowed' }} />
                            </div>
                        </div>

                        {/* Patient Type, Amount, Status */}
                        <div style={getRowStyle()}>
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

                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtAmount">Amount</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <input type="text" id="txtAmount" value={formData.amount} onChange={handleChange} onFocus={() => handleFocus('txtAmount')} onBlur={handleBlur} style={focusStyle('txtAmount')} />
                            </div>

                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtStatus">Status</label>
                            </div>
                            <div style={colStyle("16.66%")}>
                                <select id="txtStatus" value={formData.status} onChange={handleChange} onFocus={() => handleFocus('txtStatus')} onBlur={handleBlur} style={focusStyle('txtStatus')}>
                                    <option value="1">Active</option>
                                    <option value="5">Deactive</option>
                                </select>
                            </div>
                        </div>

                        {/* Staff fields */}
                        {showStaff && (
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtIsStaff">Is Staff</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select name="IsStaff" id="txtIsStaff" value={formData.isStaff} onChange={handleChange} onFocus={() => handleFocus('txtIsStaff')} onBlur={handleBlur} style={focusStyle('txtIsStaff')}>
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtPostedBy">Posted By</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtPostedBy" disabled value={formData.postedBy} style={{ ...inputStyle, backgroundColor: '#e9ecef', cursor: 'not-allowed' }} />
                                </div>
                            </div>
                        )}

                        {/* Corporate Fields */}
                        {showCorporate && (
                            <div style={getRowStyle()}>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtCorporate">Coroporate</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtCorporate" value={formData.corporate} onChange={handleChange} onFocus={() => handleFocus('txtCorporate')} onBlur={handleBlur} style={focusStyle('txtCorporate')}>
                                        <option value="">---select---</option>
                                        {/* Add corporate options here */}
                                    </select>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtCardType">Card Type</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <select id="txtCardType" value={formData.cardType} onChange={handleChange} onFocus={() => handleFocus('txtCardType')} onBlur={handleBlur} style={focusStyle('txtCardType')}>
                                        <option value="">---select---</option>
                                        {/* Add card type options here */}
                                    </select>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <label style={labelStyle} htmlFor="txtCardNo">Card No</label>
                                </div>
                                <div style={colStyle("16.66%")}>
                                    <input type="text" id="txtCardNo" disabled value={formData.cardNo} style={{ ...inputStyle, backgroundColor: '#e9ecef', cursor: 'not-allowed' }} />
                                </div>
                            </div>
                        )}

                        {/* Remarks */}
                        <div style={getRowStyle()}>
                            <div style={colStyle("16.66%")}>
                                <label style={labelStyle} htmlFor="txtRemarks"> Remarks </label>
                            </div>
                            <div style={colStyle("83.33%")}>
                                <input type="text" id="txtRemarks" name="Remarks" value={formData.remarks} onChange={handleChange} onFocus={() => handleFocus('txtRemarks')} onBlur={handleBlur} style={focusStyle('txtRemarks')} />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <input type="button" className="btn btn-success" id="btnSave" value="Save" onClick={handleSave} style={{ marginRight: '20px', backgroundColor: '#00a65a', borderColor: '#008d4c', color: 'white', padding: '6px 12px', fontSize: '14px', cursor: 'pointer', borderRadius: '4px', border: '1px solid transparent' }} />
                            <input type="button" className="btn btn-primary" id="invList" value="List" style={{ backgroundColor: '#3c8dbc', borderColor: '#367fa9', color: 'white', padding: '6px 12px', fontSize: '14px', cursor: 'pointer', borderRadius: '4px', border: '1px solid transparent' }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PatientRegistration;
