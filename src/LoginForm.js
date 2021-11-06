import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {useFormik} from 'formik'

import * as yup from 'yup';



        // using yup library

        const loginValidationSchema = yup.object({
            email : yup
                    .string()
                    .min(7, "Please provide a valid email")
                    .required("Why not fill this email ?")
                    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Email pattern should be xxx@xxx.com"),
            password: yup
                    .string()
                    .min(8, "Password should atleast have 8 characters")
                    .max(15, "Password should not exceed 15 characters")
                    .required("Password shold not be empty")
                    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i, "Password should contain atleast one number and special character(@$!%*?&)"),
           
        })

                export function LoginForm() {


                    // destructuring 

                const {handleSubmit, handleChange, handleBlur, values, errors, touched} = 
                useFormik({ 
                    initialValues: {email:'', password:''},
                    // validate : validateLoginForm,
                    validationSchema: loginValidationSchema ,
                    onSubmit : (values) => { 
                            console.log("Sending to the server",values);
                }
                })

                // returning loginform

                return (
                <section className="homepage">

                    <div className="logincard">
                    <h2>Login to continue</h2>

                        <form className="mainform" onSubmit={handleSubmit}>

                        <TextField
                        id="email"
                        type="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="standard"
                        error={errors.email && touched.email}
                        helperText={errors.email && touched.email && errors.email}
                        placeholder="Email id"/> 
                    
                        <TextField
                        id="password" 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        variant="standard"
                        error={errors.password && touched.password}
                        helperText={errors.password && touched.password && errors.password}
                        placeholder="Password"/>
                    
                    <Button className="loginbtn" type="submit" variant="contained">Login</Button>
                        </form>


                </div>
                </section>
                );
                }





            // destructured formik with hooks



//             export function LoginForm() {

//                 const validateLoginForm = (values) => { 
                    
//             console.log("Validate",values)

//             const errors = {};


//                     // password validation

                    
//             if (values.password.length < 9)
//             {
//                 errors.password = "Password should atleast 8 characters"
//             }
//             else if (values.password.length > 15)
//             {
//                 errors.password = "Password should not exceed 15 characters"
//             }

//                 // email validation

//             if (values.email.length < 5 )
//             {
//                 errors.email = "Please provide a valid email"
//             }
//             else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
//             {
//                 errors.email = "Invalid email address"
//             }

//             console.log(errors);
//             return errors;
//             };

//             const {handleSubmit, handleChange, handleBlur, values, errors, touched} = 
//             useFormik({ 
//                 initialValues: {email:'', password:''},
//                 validate : validateLoginForm,
//                 onSubmit : (values) => { 
//                         console.log("submit",values);
//             }
//             })


//         return (
//         <section className="homepage">

//                 <div className="logincard">
//                 <h2>Login to continue ... </h2>

//                     <form onSubmit={handleSubmit}>

//                     <input 
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={values.email} 
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="Email id"/> 

//                 <p className="errormsg">{errors.email && touched.email && errors.email}</p>
                   
//                     <input
//                     id="password" 
//                     type="password" 
//                     name="password" 
//                     value={values.password} 
//                     onChange={handleChange}
//                     onBlur={handleBlur} 
//                     placeholder="Password"/>

//                 <p className="errormsg">{errors.password && touched.password && errors.password}</p>
                   
//                     <button type="submit">Submit</button>
//                     </form>

            
//         </div>
//         </section>
// );
// }





        // using hooks code - useFormik



        // export function LoginForm() {

        //     const validateLoginForm = (values) => { 
                
        // console.log("Validate",values)

        // const errors = {};


        //         // password validation

                
        // if (values.password.length < 9)
        // {
        //     errors.password = "Password should atleast 8 characters"
        // }
        // else if (values.password.length > 15)
        // {
        //     errors.password = "Password should not exceed 15 characters"
        // }

        //     // email validation

        // if (values.email.length < 5 )
        // {
        //     errors.email = "Please provide a valid email"
        // }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        // {
        //     errors.email = "Invalid email address"
        // }

        // console.log(errors);
        // return errors;
        // };

        // const formik = useFormik({ 
        //     initialValues: {email:'nice', password:''},
        //     validate : validateLoginForm,
        //     onSubmit : (values) => { 
        //             console.log("submit",values);
        // }
        // })


        // return (
        // <section className="homepage">
        
        //         <div className="logincard">
        //         <h2>Login to continue ... </h2>

        //                     <form onSubmit={formik.handleSubmit}>

        //                     <input 
        //                     id="email"
        //                     type="email"
        //                     name="email"
        //                     value={formik.values.email} 
        //                     onChange={formik.handleChange}
        //                     onBlur={formik.handleBLur}
        //                     placeholder="Email id"/> 
        //                 <p className="errormsg">{formik.errors.email && formik.touched.email && formik.errors.email}</p>
        //                     <input
        //                     id="password" 
        //                     type="password" 
        //                     name="password" 
        //                     value={formik.values.password} 
        //                     onChange={formik.handleChange}
        //                     onBlur={formik.handleBLur} 
        //                     placeholder="Password"/>
        //                 <p className="errormsg">{formik.errors.password && formik.touched.password && formik.errors.password}</p>
        //                     <button type="submit">Submit</button>
        //                     </form>

                    
        //         </div>
        //         </section>
        // );
        // }







    // without hook using formik




// export function LoginForm() {

//         const validateLoginForm = (values) => { 
            
//     console.log("Validate",values)
    
//      const errors = {};


//             // password validation


//      if (values.password.length < 9)
//      {
//          errors.password = "Password should atleast 8 characters"
//      }
//       else if (values.password.length > 15)
//      {
//          errors.password = "Password should not exceed 15 characters"
//      }

//         // email validation

//      if (values.email.length < 5 )
//      {
//          errors.email = "Please provide a valid email"
//      }
//      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
//      {
//          errors.email = "Invalid email address"
//      }
    
//      console.log(errors);
//     return errors;
//     };

//   return (
//     <section className="homepage">
      
//              <div className="logincard">
//              <h2>Login to continue ... </h2>
//              <Formik
//              initialValues={{email:'', password:''}}
//              validate = {validateLoginForm}
//              onSubmit = {(values) => { console.log("submit",values);}}
//              >

//                 {
//                     (formik) =>
//                         (
//                         <form onSubmit={formik.handleSubmit}>

//                         <input type="email"
//                          name="email"
//                           value={formik.values.email} 
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBLur}
//                           placeholder="Email id"/> 
//                     <p className="errormsg">{formik.errors.email && formik.touched.email && formik.errors.email}</p>
//                         <input type="password" 
//                         name="password" 
//                         value={formik.values.password} 
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBLur} 
//                         placeholder="Password"/>
//                      <p className="errormsg">{formik.errors.password && formik.touched.password && formik.errors.password}</p>
//                         <button type="submit">Submit</button>
//                         </form>
//                         )
//                      }
                
//              </Formik>
//             </div>
//             </section>
//   );
// }








