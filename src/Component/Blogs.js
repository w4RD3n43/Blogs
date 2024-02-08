import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import Spinner from './Spinner'

const Blogs = () => {
  const {post,loading} = useContext(AppContext)


  return (
    <div>
      {
        loading ? (
          <Spinner/>
        ) : (
          post.length === 0 ? (
            <div>
              <p>
              no post available yet
            </p>
            </div>
          ) : (
            post.map((post) => (
              <div>
                <p className='title'>
                  {post.title}
                </p>
                <p>
                  by <span>
                    {post.author}
                  </span> on <span>
                    {post.category}
                  </span>
                </p>
                <p>
                  Posted on {post.date}
                </p>
                <p>
                  {post.content}
                </p>
                <div>
                  {post.tags.map((tag)=>{
                    return <span>
                      {
                        `#${tag}`
                      }
                    </span>
                  })}
                </div>
                
              </div>
            ))
          )
        ) 
      }
    </div>
  )
}
   

export default Blogs
