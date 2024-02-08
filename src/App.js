
import Header from './Component/Header';
import Pagination from './Component/Pagination';
import Blogs from './Component/Blogs';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/appContext';
function App() {
  const  {fetchBlogPost} = useContext(AppContext)

  useEffect(()=>{
    fetchBlogPost(6
    );
  },[])
  return (
    <div className="App">
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}

export default App;
