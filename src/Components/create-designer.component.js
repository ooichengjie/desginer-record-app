import React, { useState } from 'react'
import axios from 'axios';
import DesignerForm from './DesignerForm';

const CreateDesigner = () => {
    const [formValues, setFormValues] = useState({name:'',email:'',membershipno:''})

    const onSubmit = designerObject => {
        axios.post(
    'http:/locahost:4000/designers/create-designer', 
        designerObject)
            .then(res => {
                if(res.status === 200)
                    alert('Designer record successfuly created')
                else 
                    Promise.reject()
            })
            .catch(err => alert('Someting went wrong'))

    }
    return (
    <DesignerForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
        Create designer record
    </DesignerForm>
  )
}

export default CreateDesigner