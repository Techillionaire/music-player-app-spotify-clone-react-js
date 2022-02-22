
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContent } from './components/MainContent';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className='app'>
      <LeftMenu />
      <MainContent />
      <RightMenu />

      <div className='background'>

      </div>
    </div>
  );
}

export default App;
