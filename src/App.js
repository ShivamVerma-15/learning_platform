import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/course_enrollment_component/body';
import Feedback from './components/course_enrollment_component/Feedback';


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Body /> */}
      <Feedback/>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;
