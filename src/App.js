
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import FileUploaded from "./pages/FileUploaded";
import Login from "./pages/Login";


function App() {

  //state /variable

  //function
  

  //return statement

  return (
      <Router> 
        <Routes> 
          <Route path="/" element={<Login/>}/>
          <Route path="file" element={<FileUploaded/>}/>
          
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>

  );
}


export default App;
