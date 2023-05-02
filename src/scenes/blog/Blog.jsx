import React from 'react'
import "./blog.css"
import {GoSearch} from 'react-icons/go'
import {BsShareFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import {WiStars} from 'react-icons/wi'
import Box from '@mui/material/Box';
import cover_1 from "../../assests/cover1.jpg"
import cover_2 from "../../assests/cover_2.jpg"
import cover_3 from "../../assests/cover_3.jpg"
import profile from "../../assests/joy.png" 
import shape from "../../assests/shape-avatar.svg"
import { BlogData } from './BlogData'


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
            <GoSearch className="searchico"/>
            <input type="text" placeholder='Search post...'/> 
          </div>
          <div className="blogboxes">
              <Box className="blogDetails"> 
                <img src={cover_1} alt="img"/>
                <div className="menudetails">
                  <div className="menudetail">
                    <div className="avatar">
                    <img src={profile} alt="profile" className='menuImage' />
                    </div>
                    <div className="menudet">
                      <span className='menudate'><p>20-06-2023</p></span>
                      <h3 className='menutit'>Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the</h3>
                      <div className='like'>
                        <span><AiFillEye/>95.2k</span>
                        <span><AiFillMessage/>96k</span>
                        <span><BsShareFill/>100k</span>
                      </div>
                    </div>
                  </div>
                </div>
               </Box>
               <div className="blogDetail">
               <Box className="blogDt"> 
                <img src={cover_2} alt=""/>
                <div className="menudetails">
                  <div className="menudetail">
                    <div className="avatar">
                    <img src={profile} alt="profile" className='menuImage' />
                    </div>
                    <div className="menudet">
                      <span className='menudate'><p>20-06-2023</p></span>
                      <h3 className='menutitle'>Designify Agency Landing Page Design</h3>
                      <div className='like'>
                        <span><AiFillEye/>95.2k</span>
                        <span><AiFillMessage/>96k</span>
                        <span><BsShareFill/>100k</span>
                      </div>
                    </div>
                  </div>
                </div>
               </Box>
               <Box className="blogDt"> 
                <img src={cover_3} alt="" srcset=""  />
                <div className="menudetails">
                  <div className="menudetail">
                    <div className="avatar">
                    <img src={profile} alt="profile" className='menuImage' />
                    </div>
                    <div className="menudet">
                      <span className='menudate'><p>20-06-2023</p></span>
                      <h3 className='menutitle'><WiStars/>
                        Designify Agency Landing Page Design
                        <p><WiStars/></p>
                      </h3>
                      <div className='like'>
                        <span><AiFillEye/>95.2k</span>
                        <span><AiFillMessage/>96k</span>
                        <span><BsShareFill/>100k</span>
                      </div>
                    </div>
                  </div>
                </div> 
                </Box>
              </div>
          </div> 
          <div className="blogbos">
          {BlogData.map((BlogData) =>( 
              <Box className="blogboses"
              sx={{
              backgroundColor: 'background.paper',
              }}
              >
              <img src={require("../../assests/" + BlogData.picture + '.jpg')} alt="img" />
              <div className="blogboses_details">
                <div className="avatarImg">
                <img src={shape} alt="" className='avatarImage' />
                </div>
                <div className="avaimage">
                  <img src={profile} alt="profile" className='avaimg'style={{width:'40px',borderRadius:"50%"}}/>
                </div>
                </div>
                <span className='menudate'><p style={{marginLeft:'20px', fontSize:'15px'}}>20-06-2023</p></span>
                <h3 className='Blogmenutitle' >{BlogData.name}</h3>
                <div className='like'>
                <span><AiFillEye/>95.2k</span>
                <span><AiFillMessage/>96k</span>
                <span><BsShareFill/>100k</span>
              </div>
            </Box>
          ))}
          </div>
        </div>
    </div> 
    )
}

export default Blog