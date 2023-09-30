import  { useState } from 'react'
import Alert from '../components/Alert'
import Caption from '../components/Caption'
import RandomNumButton from '../components/RandomNumButton'
import FormProduct from '../components/FormProduct'
import TableProduct from '../components/TableProduct'

const CreateProduct = () => {
  const [table, setTable] = useState([]);
  return (
    <div className="container-fluid">
    <Alert/>
    <RandomNumButton/>
      <div className="col-lg-8 p-5 mx-auto">
        <Caption/>
        <div
          className="row pt-5"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <FormProduct table={table} setTable={setTable}/>
        </div>
        <div className="col-lg mx-auto pt-5">
            <TableProduct table={table} setTable={setTable}/>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
