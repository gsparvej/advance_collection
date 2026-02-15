import logo from './logo.svg';
import './App.css';
import ProcedureEntry from './procedure/procedure_entry';
import AdvanceCollection from './advance/advance_collection';
import ExtraBed from './extraBed/extra_bed';
import BedChange from './bedChange/bed_change';
import DoctorVisitEntry from './doctorVisit/doctor_visit';
import BillModify from './billModify/bill_modify';
import HomePage from './home/home_page';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
