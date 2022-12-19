import React from 'react'
import "../App.css"
const Forms = () => {
    return (
        <div className='container'>
            <div className='row register'>
                <h1>Responsive Form</h1>
                <div className='col-sm-3'>

                </div>
                <div className='col-sm-6 reg'>
                    <form className="form-horizontal hr" method="post">
                        <div className="form-group gap">
                            <label className='control-label col-sm-4' for="fname">First Name</label>
                            <div className='col-sm-8'>
                                <input type="text" className='form-control' id='uname' placeholder='Enter your first name'></input>
                            </div>
                        </div>
                        <div className="form-group gap">
                            <label className='control-label col-sm-4 ' for="lname">last Name</label>
                            <div className='col-sm-8'>
                                <input type="text" className='form-control' id='lname' placeholder='Enter your last name'></input>
                            </div>
                        </div>
                        <div className="form-group gap">
                            <label className='control-label col-sm-4 ' for="email">Email</label>
                            <div className='col-sm-8'>
                                <input type="email" className='form-control' id='lname' placeholder='Enter your Email'></input>
                            </div>
                        </div>
                        <div className="form-group gap">
                            <label className='control-label col-sm-4 ' for="profilpic">Profile Picture</label>
                            <div className='col-sm-8'>
                                <input type="file" className='form-control' id='file' placeholder='Upload your Profile picture'></input>
                            </div>
                        </div>
                        <div class="form-group gap">
                            <label className="control-label col-sm-4 ">Employee Type</label>
                            <br></br>
                            <div class="col-sm-2">
                            WFH <input
                                    class="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="wfh"

                                />
                                {/* <label class="form-check-label " for="exampleRadios1">
                                    WFH
                                </label> */}
                            </div>
                            <div class="col-sm-2">
                                Office Work <input
                                    class="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id=" officework"

                                />
                                {/* <label class="form-check-label " for="exampleRadios2">
                                    Office Work
                                </label> */}
                            </div>
                        </div>
                        <div className="form-group gap">
                            <label className='control-label col-sm-4 ' for="dateofbirth">DOB</label>
                            <div className='col-sm-8'>
                                <input type="date" className='form-control' id='dateofbirth' placeholder='Upload your Profile picture'></input>
                            </div>
                        </div>
                        <div className="form-group gap">
                            <label className='control-label col-sm-4 ' for="inputState">Hobby</label>
                            <div className='col-sm-8'>
                                <select id="inputState" class="form-control" >
                                    <option selected>Choose...</option>
                                    <option>Cooking</option>
                                    <option>Learing new things</option>
                                </select>
                               
                            </div>
                        </div>
                        <div className="form-group gap">
                            <div className='control-label col-sm-8 ' >
                            <div className='checkbox'>
                                <lable><input type="checkbox" name='remember' ></input>  accept all the terms and conditions</lable>
                            </div>
                            </div></div>
                            <div className="form-group gap">
                            <div className='control-label col-sm-8 ' >
                            
                           <button type="submit" className='btn-btn-default'>Submit</button>
                            </div></div>
                    </form>
                </div>
                <div className='col-sm-3 '>
                </div>
            </div>
        </div>
    )
}

export default Forms
