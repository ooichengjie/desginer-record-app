import React from 'react'
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, Button} from "react-bootstrap";


const DesignerForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("invalid email address").required("Required"),
        membershipno: Yup.number().positive("invalid membership number").integer("invalid membership number").required("Required",)
    });
    console.log(props);
  return (
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
                <FormGroup>
                    <label htmlFor="Name">Name</label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" className='d-block invalid-feedback' component="span" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="Email">Email</label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" className='d-block invalid-feedback' component="span"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="membershipno">Membership No.</label>
                    <Field name="membershipno" type="number" className="form-control" />
                    <ErrorMessage name="membershipno" className='d-block invalid-feedback' component="span"/>
                </FormGroup>
                <Button variant="danger" size="lg" block="block" type="submit">
                    {props.children}
                </Button>
            </Form>
        </Formik>
    </div>
  )
}

export default DesignerForm
