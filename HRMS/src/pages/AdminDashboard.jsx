import React from 'react'

const AdminDashboard = () =>{
  const {user} = useAuth() 
  
  return(
    <div>
      Admin helloooo {user.name}
    </div>
  )
}

export default AdminDashboard;