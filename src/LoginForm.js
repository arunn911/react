import React from "react";

import {useFormik} from 'formik'

import * as yup from 'yup';



        // using yup library

                export function LoginForm() {

                    const validateLoginForm = (values) => { 
                        
                console.log("Validate",values)

                const errors = {};


                        // password validation

                        
                if (values.password.length < 9)
                {
                    errors.password = "Password should atleast 8 characters"
                }
                else if (values.password.length > 15)
                {
                    errors.password = "Password should not exceed 15 characters"
                }

                    // email validation

                if (values.email.length < 5 )
                {
                    errors.email = "Please provide a valid email"
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                {
                    errors.email = "Invalid email address"
                }

                console.log(errors);
                return errors;
                };
                    // destructuring 

                const {handleSubmit, handleChange, handleBlur, values, errors, touched} = 
                useFormik({ 
                    initialValues: {email:'', password:''},
                    validate : validateLoginForm,
                    onSubmit : (values) => { 
                            console.log("submit",values);
                }
                })

                // returning loginform
                
                return (
                <section className="homepage">

                    <div className="logincard">
                    <h2>Login to continue ... </h2>

                        <form onSubmit={handleSubmit}>

                        <input 
                        id="email"
                        type="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email id"/> 

                    <p className="errormsg">{errors.email && touched.email && errors.email}</p>
                    
                        <input
                        id="password" 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Password"/>

                    <p className="errormsg">{errors.password && touched.password && errors.password}</p>
                    
                        <button type="submit">Submit</button>
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








