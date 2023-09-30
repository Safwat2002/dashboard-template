import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import{Sidebar, Navbar} from '../../components'
import { useState } from 'react'



function New({title, inputs}) {

  const [file,setFile] = useState("");

  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1 className="title">{title}</h1>

        </div>

        <div className="bottom">
          <div className="left">
            <label htmlFor={"image"}>
              <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />  
            </label>
          </div>
          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor="image">Image: <DriveFolderUploadOutlined className='icon' /></label>
                <input type="file" name="image" id="image" onChange={(e)=>{setFile(e.target.files[0])}} style={{display:"none"}}/>
              </div>

              {
                inputs.map((input)=>{
                  return(
                    <div className="formInput" key={input.id}>
                      <label htmlFor={input.id}>{input.label}</label>
                      <input type={input.type} name={input.name} id={input.id} placeholder={input.placeholder}/>
                    </div>
                  )
                })
              }
                    
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default New