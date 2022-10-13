import 'antd/dist/antd.variable.min.css';
import Dashboard from 'features/Dashboard/Dashboard';
import Home from 'features/Home/Home'
import Movie from 'features/Movie';
import DetailMovie from 'features/Movie/DetailMovie/DetailMovie';
import { Route, Routes } from 'react-router-dom';
import styles from './App.less';
function  App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<>explore</>}/>
          <Route path='/search' element={<>search</>}/>
          <Route path='/bookmark' element={<>book mark</>}/>
          <Route path='/history' element={<>history</>}/>
          <Route path='/profile' element={<>profile</>}/>
          <Route path='/account' element={<>account</>}/>
          <Route path='movies' element={<Movie/>}/>
          <Route path='movie/:moviesId' element={<DetailMovie/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
