import './App.css';
import Header from './Header';
import RecommendeVideos from './RecommendeVideos';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_page'>
        <Sidebar />
        <RecommendeVideos />
      </div>
    </div>
  );
}

export default App;
