const formData = (state = {formStateDetails: [
    {
        "SlotNo": 1,
        "Time":"9:00 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""    
    },{
        "SlotNo": 2,
        "Time":"9:30 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 3,
        "Time":"10:00 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 4,
        "Time":"10:30 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 5,
        "Time":"11:00 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 6,
        "Time":"11:30 am",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 7,
        "Time":"12:00 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 8,
        "Time":"12:30 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 9,
        "Time":"01:00 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 10,
        "Time":"01:30 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    },{
        "SlotNo": 11,
        "Time":"02:00 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    ,{
        "SlotNo": 12,
        "Time":"02:30 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    ,{
        "SlotNo": 13,
        "Time":"03:00 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    ,{
        "SlotNo": 14,
        "Time":"03:30 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    ,{
        "SlotNo": 15,
        "Time":"04:00 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    ,{
        "SlotNo": 16,
        "Time":"04:30 pm",
        "FirstName":"",
        "SecondName":"",
        "Phone":"",
        "Available":true,
        "Message":""
    }
    
],slotusage:[]}, action) => {
	switch(action.type){
		case "UPDATE_USER_DATA":
		let updateUserData = [...state.formStateDetails];
		const indexToUpdate = updateUserData.findIndex(function(formStateDetails, id){
			return formStateDetails.SlotNo === action.payload.id;
		})

		return {
			formStateDetails: [...state.formStateDetails.slice(0, indexToUpdate), action.payload.userUpdatedData, 
			...state.formStateDetails.slice(indexToUpdate + 1)]
		}
		break;
		
		default:
		return state;
	}
}

export default formData;