//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import CreateRecord from './components/CreateRecord';
import UpdateRecordInfo from './components/UpdateRecordInfo';
import ShowRecordDetails from './components/ShowRecordDetails';
import ShowRecordList from './components/ShowRecordList';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/show-allrecords' element={<ShowRecordList/>} />
        <Route path='/create-record' element={ <CreateRecord/>} />
        <Route path='/edit-record/:id' element={ <UpdateRecordInfo />} />
        <Route path='/show-record/:id' element={ <ShowRecordDetails /> } />
      </Routes>
    </div>
  </Router>

  );
}

export default App;
