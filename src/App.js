
import './App.css';
import Mess from './components/Mess/Mess';

import Profile from './components/Profile/Profile';
import Tabar from './components/Tabbar/Tabbar';

function App() {
  return (
    <div className="App">
    
     <Tabar/>
     <Profile/>
     
    <Mess/>

    </div>
  );
}

export default App;
