import React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Form1() {
  const validationSchema=Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Please Enter First Name'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Please Enter Last name'),
    dob:Yup.date().required('Please Enter Date'),
    email: Yup.string().email("Please provide correct email").required('Please provide email'),
    aadhar:Yup.string().max(12,"Enter 12 Digits Aadhar No.").min(12,"Enter 12 Digit Aadhar No.").required('Enter Aadhar Card No.'),
    pan:Yup.string().max(10,"Enter 10 Digits PAN No.").min(10,"Enter 10 Digit PAN No.").required('Enter PAN Card No.')
  });
  const formik=useFormik({
    initialValues:{firstName:"",lastName:"",dob:"",email:"",aadhar:"",pan:""},
    validationSchema: validationSchema,
  onSubmit:(values,{setSubmitting})=>{alert(JSON.stringify(values));}
});
  
  return (
    <div className='flex flex-col items-center justify-center p-[2rem]'>
      <div className='text-2xl font-bold my-[1rem]'>Personal Detail</div>
        <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center lg:w-[30%] md:w-[40%] sm:w-[80%] gap-2 p-4 border-[1px] border-sky-900 rounded-2xl bg-white'>
        <TextField id="firstName" label="First Name" name="firstName" onBlur={formik.handleBlur} onChange={formik.handleChange} variant="outlined" helperText={formik.touched.firstName?formik.errors.firstName:null} error={formik.touched.firstName && Boolean(formik.errors.firstName)}/>
        <TextField id="lastName" label="Last Name" name="lastName" onBlur={formik.handleBlur} onChange={formik.handleChange} variant="outlined" helperText={formik.touched.lastName?formik.errors.lastName:null} error={formik.touched.lastName && Boolean(formik.errors.lastName)}/>
        <TextField id="email" name="email" label="Email"  onBlur={formik.handleBlur} onChange={formik.handleChange} variant="outlined" helperText={formik.touched.email?formik.errors.email:null} error={formik.touched.email && Boolean(formik.errors.email)}/>
        <TextField id="dob" label="Date Of Birth" name="dob" onBlur={formik.handleBlur} onChange={formik.handleChange} variant="outlined" helperText={formik.touched.dob?formik.errors.dob:null} error={formik.touched.dob && Boolean(formik.errors.dob)} type="Date"  InputLabelProps={{
            shrink: true,
          }}/>
        <TextField id="aadhar" name="aadhar" label="Aadhar Card No." onChange={formik.handleChange} onBlur={formik.handleBlur}  variant="outlined" helperText={formik.touched.aadhar?formik.errors.aadhar:null} error={formik.touched.aadhar && Boolean(formik.errors.aadhar)} />
        <TextField id="pan" name="pan" label="PAN Card No." onChange={formik.handleChange} onBlur={formik.handleBlur}  variant="outlined" helperText={formik.touched.pan?formik.errors.pan:null} error={formik.touched.pan && Boolean(formik.errors.pan)} />
        <Button variant='contained' color="primary"  type="submit">Next</Button>
        </form>
    
    </div>
  )
}

export default Form1;