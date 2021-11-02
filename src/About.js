import React from "react";

import {Formik} from 'formik'

export function About() {

    const validateLoginForm = (values) => {
        console.log("validateLoginForm", values);
        const errors = {};

        if (values.email.length < 5)
        {
            errors.email = "Please provide valid email address";
        }
//         else if (!/[A-Z0-9._%+-]+@[A-Z0-9])
//         {
// console.log("hi");
//         }
    }
  return (
      <div>
          <Formik
          initial
          >

          </Formik>
          </div>
  )
}
//   (
//     <div   >
//         <Formik
//         intialValues={{email:',password:'}}
//         validate={validateLoginForm}
//         onSubmit={(values) => {}}
//         >
            

//         </Formik>

//     </div>


//   )
// }
