import React from 'react'
import { useState } from "react";
import empService from "../service/emp.service";

const AddEmp = () => {
    const [emp, setEmp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: "",
      });
      const [msg, setMsg] = useState("");


      const handleChange = (e) => {
        const value = e.target.value;
        setEmp({ ...emp, [e.target.name]: value });
      };
      
  const submitEmp = (e) => {
    e.preventDefault();

    empService
      .saveEmp(emp)
      .then((res) => {
        setMsg("Emp Added Sucessfully");
        setEmp({
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          salary: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className="card">
                        <div className="card-header text-center fs-3">Add Emp
                        {msg && <p className="text-success">{msg}</p>}

                         </div>
                        <div className="card-body">
                            <form onSubmit={(e) => submitEmp(e)}>
                                <div className="mb-3">
                                    <label>Enter first name</label>
                                    <input
                                     type="text"
                                     className="form-control" 
                                     name="firstName"
                                     value={emp.firstName}
                                     onChange={(e) => handleChange(e)}
                                     />
                                    
                                </div>

                                <div className="mb-3">
                                    <label>Enter Last name</label>
                                    <input
                                     type="text"
                                     className="form-control"
                                      name="lastName"
                                      value={emp.lastName}
                                      onChange={(e) => handleChange(e)}

                                      />  
                                      
                                </div>

                                <div className="mb-3">
                                    <label>Enter Email</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="email"
                                    value={emp.email}
                                    onChange={(e) => handleChange(e)}

                                    />
                                    
                                </div>

                                <div className="mb-3">
                                    <label> Enter Address</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="address"
                                    value={emp.address}
                                    onChange={(e) => handleChange(e)}

                                    />
                                  
                                </div>

                                <div className="mb-3">
                                    <label>Enter Salary</label>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    name="salary"
                                    value={emp.salary}
                                    onChange={(e) => handleChange(e)}

                                    />
                                   
                                </div> 

                                <div className="text-center">
                                    <button className='btn btn-success'>Submit</button>
                                    <input type="Reset" className='btn btn-danger ms-2' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEmp
