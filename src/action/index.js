
export function updateUserData(userData, index){
	return {
		type: "UPDATE_USER_DATA",
		 payload:
		  {
			  userUpdatedData: userData, 
			id: index
		  }}
}