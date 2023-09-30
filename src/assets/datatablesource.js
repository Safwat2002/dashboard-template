export const userColumns =[
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field:'user',
        headerName:"User",
        width:100,
         
        renderCell:(params)=>{
            return(
                <>
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt={params.row.username}/>
                        {params.row.username}
                    </div>
                </>
            );
        }
    },
    {
        field:'email',
        headerName:"Email",
        width:250,

    },{
        field:'age',
        headerName:"Age",
        width:'100',

    }
    ,{
        field:"status",
        headerName:"Status",
        width:"130",
        renderCell:(params)=>{
            return(
                <div className={"cellWidthStatus " + params.row.status}>
                    {params.row.status}
                </div>
            )
        }
    }
   
];


export const userRows = [
    {
        id:1,
        usename:"Saljam",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"saljam@gmail.com",
        age:35
    },
    {
        id:2,
        usename:"Simon defov",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"simon@gmail.com",
        age:22
    },
    {
        id:3,
        usename:"Ninja Stoklm",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"ninja@gmail.com",
        age:18
    },
    {
        id:4,
        usename:"brahimovich",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"pending",
        email:"brahimovich@gmail.com",
        age:27
    },

    {
        id:5,
        usename:"Ahmad",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"passive",
        email:"ahmad@gmail.com",
        age:38
    },
    {
        id:6,
        usename:"Kareem Omar",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"k.omar@gmail.com",
        age:48
    },
    {
        id:7,
        usename:"Jameel Edam",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"jameel@gmail.com",
        age:19
    },
    {
        id:8,
        usename:"Edoard Jaro",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"E.jaro@gmail.com",
        age:18
    },
    {
        id:9,
        usename:"Sofian Hameed",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"sofian@gmail.com",
        age:20
    },
    {
        id:10,
        usename:"Karem Mostafa",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"pending",
        email:"karem@gmail.com",
        age:18
    },
    {
        id:11,
        usename:"Mostafa Hammouda",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"mostafa.hammouda@gmail.com",
        age:40
    },
    {
        id:12,
        usename:"Nicholas Davivio",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"nicholas@gmail.com",
        age:26
    },
    {
        id:13,
        usename:"Sultan Ghandeer",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"sultan@gmail.com",
        age:29
    },
    {
        id:14,
        usename:"Jourge Hanti",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"active",
        email:"jourge.hanti@gmail.com",
        age:22
    },
    {
        id:15,
        usename:"Dimmer DaG",
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status:"passive",
        email:"d.dag@gmail.com",
        age:25
    },
]
