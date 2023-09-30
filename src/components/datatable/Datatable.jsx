import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {userRows, userColumns} from '../../assets/datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Datatable({source}) {

  const [theSource] = useState(source+"");

  let actionColumn = [{
    field:'action',
    headerName:"Action",
    width:'150',
    renderCell:()=>{
      return(
        <>
          <div className="cellAction">
            <Link to={'/users/1'} style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>
            </Link>

            <div className="deleteButton">Delete</div>

          </div>
        </>
      );
    }
  }]
  
return (
  <div className='datatable'>
      <div className="datatabletitle">
        Add New {source}
        <Link to={'/' + theSource.toLowerCase() + '/new'} style={{textDecoration:"none"}} className='addLink'>
          Add
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable