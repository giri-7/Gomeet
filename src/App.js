import React from 'react';
import './App.css';
import Header from './components/Header';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";



const App = ({getFormDetails}) => {
  let history = useHistory();

  function handleSchedule(data, id) {
    localStorage.setItem('cardDetails', JSON.stringify(data));
    localStorage.setItem('id', id)
    history.push("/form");
  }
  
  const [prevState] = React.useState(getFormDetails);


  return (
    <div>  
    <Header />
    <div className="createCampaign">
      <div className="contentCls">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <p className="Create-Form">Meeting Slots </p>    
              <div className="form-group">
              <label className="fieldNames">Pick yours</label>
              <div className="row">

              {(prevState.map((data, index) => {
                  return(
                    <div className="col-lg-3 pb-1 pt-2" key={index}>
                       <a onClick={()=>handleSchedule(data, index)}>
                       <div className="card " >
                        <div className="card-header ">
                        <span>Slot No.{data.SlotNo}</span>
                        <span className="float-right">Time <b>{data.Time}</b></span>
                        </div>
                        {(data.Available ? (
                          <div className="card-body availableBg">
                          <p>Availablity: yes</p>
                          </div>
                        ):(
                          <div className="card-body bookedBg">
                          <p>Availablity: Booked</p>
                          </div>       
                          ))}
                      </div> 
                      </a>
                    </div>
                    
                  )
              }))}

              </div>
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


export default connect(mapStateToProps)(App);
