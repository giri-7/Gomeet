import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import {updateUserData} from './action/index'
import { useDispatch } from "react-redux";

const FormDetails = ({getFormDetails}) => {
 
  let history = useHistory();
  const dispatch = useDispatch();

  function handleBack() {
    history.push("/home");
  }
  const [getFirstName, setFirstName] = useState(null);
  const [getSecondName, setSecondName] = useState(null);
  const [getPhone, setPhone] = useState(null);
  const [getMessage, setMessage] = useState(null);

  const [toggleEdit, setToggleEdit] = useState(false);
  const [getData] = useState(JSON.parse(localStorage.getItem('cardDetails')));


  const handleFirstName = (e) =>{
    setFirstName(e.target.value);
  }
  const handleSecondName = (e) =>{
    setSecondName(e.target.value);
  }
  const handlePhone = (e) =>{
    setPhone(e.target.value);
  }
  const handleMessage = (e) =>{
    setMessage(e.target.value);
  }
  const handleDetails = (e) =>{
    let getDetails = JSON.parse(localStorage.getItem('cardDetails'));
    if((getFirstName&&getSecondName&&getPhone)||(getDetails.FirstName)||(getDetails.SecondName)||(getDetails.Phone))
    {
      let getDetails = JSON.parse(localStorage.getItem('cardDetails'));
      let obj = {
        "name": (getDetails.name) ? getDetails.name : "",
        "SlotNo": (getDetails.SlotNo) ? getDetails.SlotNo : "",
        "Time": (getDetails.Time) ? getDetails.Time : "",
        "FirstName": (getFirstName) ? getFirstName :  getDetails.FirstName,
        "SecondName": (getSecondName) ? getSecondName : getDetails.SecondName,
        "Phone": (getPhone) ? getPhone:  getDetails.Phone,
        "Available": false,
        "Message": (getMessage) ? getMessage : getDetails.Message  
      }
      dispatch(updateUserData(obj, getDetails.SlotNo));
      history.push('/home')
    }
    else
    {
      alert("Please enter Required Fields");
    }
   
  }

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem('cardDetails'));
    if(getData.Available === false){
      setToggleEdit(true);
    }
  }, []);


  return(
  <div>
   <Header />
    <div className="createCampaign">
      <div className="contentCls">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <p className="Create-Form">
                {(toggleEdit === true) ? "Edit Details" :
                "Enter Details"}
                </p>    
              <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                <label className="fieldNames">First Name <span>*</span></label>
                <input type="text" className="form-control formInput" defaultValue={getData.FirstName} name="firstName" onChange={handleFirstName} required  />
                </div>
                </div>
               </div> 

               <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                <label className="fieldNames">Last Name <span>*</span></label>
                <input type="text" className="form-control formInput"  defaultValue={getData.SecondName} name="lastName"  onChange={handleSecondName} />
                </div>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                <label className="fieldNames">Phone <span>*</span></label>
                <input type="text" className="form-control formInput" defaultValue={getData.Phone} name="phone"  onChange={handlePhone} />
                </div>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                <label className="fieldNames">Message</label>
                <textarea rows="1" cols="10" type="" className="form-control formDesc" defaultValue={getData.Message} name="content" maxLength="500" onChange={handleMessage}/>
                </div>
                </div>
                </div>
                <span className="pr-4">                
                  <button type="reset" className="btn btn-danger" onClick={handleBack}>Cancel</button>
                </span>
                <span>                
                <button type="button" className="btn btn-primary" onClick={handleDetails} >{(toggleEdit === true) ? "Update" :
                "Save"}</button>
                </span>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}


const mapStateToProps = (state) => {
  return {
    getFormDetails: state.formLock.formStateDetails
  };
}


export default connect(mapStateToProps)(FormDetails);
