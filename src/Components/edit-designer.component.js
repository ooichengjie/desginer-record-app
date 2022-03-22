import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DesignerForm from './DesignerForm'

const EditDesigner = (props) => {
    const [formValues, setFormValues] = useState({
        name:"",
        email:"",
        membershipno:"",
    });

    const onSubmit = (designerObject) => {
        axios
            .put("https://localhost:4000/designers/update-designer"+ props.match.params.id,
            designerObject
        )
        .then((res) => {
          if (res.status === 200){
              alert('Designer successfully updated');
              props.history.push("/designer-list");
          } else Promise.reject();
        })
        .catch((err) => alert("Soemthing not right"))
    }

    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/designers/update-designer/"
                + props.match.params.id
            )
            .then((res)=>{
                const {name, email, membershipno} = res.data;
                setFormValues({name, email,membershipno});
            })
            .catch((err) => console.log(err));
    },[])

  return (
    <DesignerForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>Update designer</DesignerForm>
  )
}

export default EditDesigner
