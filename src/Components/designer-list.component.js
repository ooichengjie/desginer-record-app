import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import DesignerTableRow from './DesignerTableRow';

const DesignerList = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:4000/designers/")
    .then(({ data }) => {
      setDesigners(data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  const DataTable = () => {
    return designers.map((res,i)=>{
      return <DesignerTableRow obj ={res} key={i} />
    });
  };

  return (
    <div className='table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designer Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>

    </div>
  )
}

export default DesignerList
