
import './App.css'
import './index.css'
import HomePage from './pages/HomePage'
import Header from './Header'
import {Routes, Route} from'react-router-dom'
import AboutPage from './pages/About'
import StockList from './pages/Stocks'
import SingleStock from './pages/StockPage'
import FollowedStocks from './pages/Followed'



function App() {


  return (
    <div>

        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/stocks" element={<StockList/>}/>
            <Route path="/stocks/:symbol" element={<SingleStock />}/>
          </Routes>

    </div>
  )
}

export default App
