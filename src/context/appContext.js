import { createContext, useEffect, useState } from "react";
import { baseurl } from "../baseUrl";

const AppContext = createContext();
//step 1 
 function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    //data filling
    async function fetchBlogPost (page=1) {
      setLoading(true);
      let url = `${baseurl}?page=${page}`
      try{
        const result = await fetch(url)
        const data = await result.json();
        setPost(data.posts)
        setTotalPage(data.totalPages);
      } catch(error){
        console.log("network mai kharabi hai ")
      } finally {
        setLoading(false);
      }
    }

    function handlePageChange(page) {
      setPage(page)
      fetchBlogPost(page) 
    }

    


    const value = {
      loading,
      setLoading,
      post,
      setPost,
      page,
      setPage,
      totalPage,
      setTotalPage,
      handlePageChange,
      fetchBlogPost
    }
    //step 2
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )  


}
export { AppContext, AppContextProvider };