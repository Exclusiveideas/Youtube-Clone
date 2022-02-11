import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div> 
          }/>
          <Route path="/search/:searchText" element={
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div> 
          }/>
        </Routes>
    </div> 
  );
}

export default App;
