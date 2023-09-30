import './list.scss'

import { Sidebar, Navbar } from '../../components'
import Datatable from '../../components/datatable/Datatable'

function List(props) {
  return (
    <div className='list'>
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <Datatable source={props.source}/>
      </div>
    </div>
  )
}

export default List