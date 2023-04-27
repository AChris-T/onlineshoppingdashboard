import React from 'react'
import {Productdata} from './Productdata'
import './product.css'
import {BsFillCartFill} from 'react-icons/bs'
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';


const Index = () => {
  return (
    <div className='productContainer'>
        <h3 className='productname'>Products</h3>
        <Box className="productcart"
        sx={{
          backgroundColor: 'background.paper',
        }}
        >
          <Badge badgeContent={4} color="primary">
            <BsFillCartFill color="action" className='carticon' />
          </Badge>
        </Box>
        <div className='productDetails'> 
        {Productdata.map((Productdatas) =>( 
        <Box className="productDetail"
          sx={{
          backgroundColor: 'background.paper',
         }}
        > 
          <div className="productimg"> 
            <img className='productsimg'src={require("../../assests/" + Productdatas.picture + '.jpg')} alt="productImage" />
            <div className="imgdetail">
              <span>{Productdatas.about}</span>
            </div>
          </div>
          <div className="productmenus">
            <h4 className='name'>{Productdatas.name}</h4>
            <div className="productsmenu">
              <div>
                <span>{Productdatas.avatar}</span>
              </div>
              <div style={{display:"flex",gap:'5px'}}>
                <span style={{fontWeight:'500',color:"grey", textDecoration:"line-through"}}>{Productdatas.discount}</span>
                <span style={{fontWeight:'bolder'}}>{Productdatas.price}</span>
              </div>
            </div> 
          </div>  
        </Box>   
         ))}
      </div>
  </div>
    )
}

export default Index