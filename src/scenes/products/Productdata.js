import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export const Productdata = [
    {
        id:1,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_1',
        price:'$59.85',
        about:[ 
            <div className="imgdetails"> 
              <span>New</span>
            </div>  
        ], 
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:2,
        name:"Nike Space Hippie 04",
        picture:'product_2',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:3,
        name:"Nike Air Zoom Pegas...",
        picture:'product_3',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:4,
        name:"Nike Blazer Low 77...",
        picture:'product_4',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:5,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_5',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:6,
        name:"Nike Space Hippie 04",
        picture:'product_6',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:7,
        name:"Nike Air Zoom Pegas...",
        picture:'product_7',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:4,
        name:"Nike Blazer Low 77...",
        picture:'product_8',
        price:'$79.85',
        about:[ 
            <div className="imgdetails" style={{backgroundColor:'red'}}> 
              <span>Sale</span> 
            </div>  
        ],
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:9,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_9',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:10,
        name:"Nike Space Hippie 04",
        picture:'product_10',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:11,
        name:"Nike Air Zoom Pegas...",
        picture:'product_11',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:12,
        name:"Nike Blazer Low 77...",
        picture:'product_12',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },{
        id:13,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_13',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:14,
        name:"Nike Space Hippie 04",
        picture:'product_14',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:15,
        name:"Nike Air Zoom Pegas...",
        picture:'product_15',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:16,
        name:"Nike Blazer Low 77...",
        picture:'product_16',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:17,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_17',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:18,
        name:"Nike Space Hippie 04",
        picture:'product_18',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:19,
        name:"Nike Air Zoom Pegas...",
        picture:'product_19',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:20,
        name:"Nike Blazer Low 77...",
        picture:'product_20',
        price:'$79.85',
        about:[ 
            <div className="imgdetails" style={{backgroundColor:'red'}}> 
              <span>Sale</span> 
            </div>  
        ],
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:21,
        name:"Nike Air Force 1 NDESTR...",
        picture:'product_21',
        price:'$59.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'green', color:'green',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'black', color:'black',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:22,
        name:"Nike Space Hippie 04",
        picture:'product_22',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar  style={{backgroundColor:'black', color:'black',width:'15px',height:'15px',border:"2px solid rgb(255, 255, 255)"}} />
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:23,
        name:"Nike Air Zoom Pegas...",
        picture:'product_23',
        price:'$79.85',
        discount:"$268",
        avatar:
        [
            <AvatarGroup max={2}>
                <Avatar style={{backgroundColor:'rgb(255, 255, 255)',boxShadow:"rgba(0, 0, 0, 0.24) -1px 1px 2px inset", color:'white',width:'15px',height:'15px'}} /> 
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    },
    {
        id:24,
        name:"Nike Blazer Low 77...",
        picture:'product_24',
        price:'$79.85',
        avatar:
        [
            <AvatarGroup max={3}>
                <Avatar  style={{backgroundColor:'rgb(255, 192, 203)', color:'rgb(255, 192, 203)',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'red', color:'red',width:'15px',height:'15px'}} />
                <Avatar style={{backgroundColor:'rgb(24, 144, 255)', color:'rgb(24, 144, 255)',width:'15px',height:'15px'}} />
            </AvatarGroup>
        ]

    }

]

