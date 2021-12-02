// 引入组件
import Header from './component/Header'
import Context from './component/Context'
import Footer from './component/Footer'

import './App.less'

// 兜底的组件App
function App() {
  return (
    <div className='App'>
      <Header/>
      <Context/>
      <Footer/>
    </div>
  );
}

export default App;
