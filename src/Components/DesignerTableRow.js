import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DesignerTableRow = (props) => {
    const { _id, name, email, membershipno } = props.obj;

    const deleteDesigner = () => {
     axios
        .delete(
    "http://localhost:4000/designers/delete-designer" + _id)
        .then((res) => {
         if (res.status === 200) {
             alert("designer record successfully deleted");
             window.location.reload();
         } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };
  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{membershipno}</td>
        <td>
            <Link className='edit-link' to={"/edit-designer/" + _id}>Edit</Link>
            <Button onclick={deleteDesigner} size="sm" variant="danger">Delete</Button>
        </td>
    </tr>
  )
}

export default DesignerTableRow