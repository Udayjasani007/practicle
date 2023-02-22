import { Box } from '@mui/system'
import React from 'react'

const FormThird = (props) => {
  const [form1, form2] = props.data;
  const date = new Date(Date.now(form1.birthday))
  return (
    <>
      <h2>Data Added SucessFully </h2>
      <Box className="d_block">
        <Box className="success_record">
          <p>name</p>
          <p>value</p>
        </Box>
        <Box className="success_record">
          <p>FirstName </p>
          <p>{form1.fname}</p> 
        </Box>
        <Box className="success_record">
          <p>MiddleName </p>
          <p>{form1.mname}</p>
        </Box>
        <Box className="success_record">
          <p>LastName </p>
          <p>{form1.lname}</p>
        </Box>
        <Box className="success_record">
          <p>MobileNo </p>
          <p>{form1.number}</p>
        </Box>
        <Box className="success_record">
          <p>Email </p>
          <p>{form1.email}</p>
        </Box>
        <Box className="success_record">
          <p>Birthday </p>
          <p>{date.toLocaleDateString()}</p>
        </Box>
        <Box className="success_record">
          <p>Age </p>
          <p>{form1.age}</p>
        </Box>
        <Box className="success_record">
          <p>Email </p>
          <p>{form1.email}</p>
        </Box>
        <Box className="success_record">
          <p>BloodGroup </p>
          <p>{form1.blgroup}</p>
        </Box>
        <Box className="success_record">
          <p>Height </p>
          <p>{form1.height}</p>
        </Box>

        <Box className="success_record">
          <p>Weight </p>
          <p>{form1.weight}</p>
        </Box>
        <Box className="success_record">
          <p>Gender </p>
          <p>{form1.gender}</p>
        </Box>
        <Box className="success_record">
          <p>MaritialStatus </p>
          <p>{form1.mstatus}</p>
        </Box>
        <Box className="success_record">
          <p>AddressLine 1 </p>
          <p>{form2.address1}</p>
        </Box>
        <Box className="success_record">
          <p>AddressLine 2 </p>
          <p>{form2.address2}</p>
        </Box>
        <Box className="success_record">
          <p>City </p>
          <p>{form2.city}</p>
        </Box>
        <Box className="success_record">
          <p>State </p>
          <p>{form2.state}</p>
        </Box>
        <Box className="success_record">
          <p>Country </p>
          <p>{form2.country}</p>
        </Box>
        <Box className="success_record">
          <p>Pincode </p>
          <p>{form2.pincode}</p>
        </Box>
      </Box>
    </>
  )
}

export default FormThird