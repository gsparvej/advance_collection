import logo from './logo.svg';
import './App.css';
import ProcedureEntry from './procedure/procedure_entry';
import AdvanceCollection from './advance/advance_collection';
import ExtraBed from './extraBed/extra_bed';
import BedChange from './bedChange/bed_change';
import DoctorVisitEntry from './doctorVisit/doctor_visit';
import BillModify from './billModify/bill_modify';
import HomePage from './home/home_page';
import PatientRelease from './patientRelease/patient_release';
import DueCollection from './due/due_collection';
import BirthCertificate from './birthCertificate/birth_certificate';
import DischargeCertificate from './discharge/discharge_cer';
import DeathCertificate from './death/death_cer';
import PatientRegistration from './patReg/pat_reg';
import PatientAdmission from './patAdm/pat_adm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advance-collection" element={<AdvanceCollection />} />
          <Route path="/extra-bed" element={<ExtraBed />} />
          <Route path="/bed-change" element={<BedChange />} />
          <Route path="/procedure-entry" element={<ProcedureEntry />} />
          <Route path="/doctor-visit-entry" element={<DoctorVisitEntry />} />
          <Route path="/bill-modify" element={<BillModify />} />
          <Route path="/patient-release" element={<PatientRelease />} />
          <Route path="/due-collection" element={<DueCollection />} />
          <Route path="/birth-certificate" element={<BirthCertificate />} />
          <Route path="/discharge-certificate" element={<DischargeCertificate />} />
          <Route path="/death-certificate" element={<DeathCertificate />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/patient-admission" element={<PatientAdmission />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
