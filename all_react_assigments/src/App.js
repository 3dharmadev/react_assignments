 import './App.css';
import { StaticCard } from './day1/StaticCard';
 import { Navbar } from './day1/navbar/navbar';
import { CricketScoreTracker } from './day3Eval/CricketScoreTracker';
 
function App() {
  return (
    <div className="App">
      <CricketScoreTracker/>
        <Navbar/>
       <StaticCard/>
    </div>
  );
}

export default App;
