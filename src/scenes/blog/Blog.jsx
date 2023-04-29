import React from 'react'
import "./blog.css"
import {GoSearch} from 'react-icons/go'
import Box from '@mui/material/Box';
import cover_1 from "../../assests/cover1.jpg"
import profile from "../../assests/joy.png"


const Blog = () => {
  return (
    <div className='blogContainer'> 
        <div className="blogcont">
          <div className="blogheader">
            <h3>Blog</h3>
            <div className='bloguser'>
              <button className='userbtn'>
              <span className="blogicons">+</span>
               New Post
              </button> 
            </div> 
          </div>
          <div className="blogSearch">
            <GoSearch className="searchicon"/>
            <input type="text" placeholder='Search post...'/> 
          </div>
          <div className="blogboxes">
              <Box className="blogDetails"> 
                <img src={cover_1} alt="" srcset=""  />
                <div className="menudetails">
                  <div className="menudetail">
                    <div className="avatar">
                    <img src={profile} alt="profile" className='menuImage' />
                    </div>
                  </div>
                </div>
               </Box>
               <div className="blogDetail">
               <Box className="blogDt"
               sx={{
                 
              }}
              > 
              hello
               </Box>
               <Box className="blogDt"
                sx={{
                
                }}
                > 
                hello
                </Box>
              </div>
          </div>
        </div>
    </div> 
    )
}

export default Blog