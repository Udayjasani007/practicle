import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select';

const FormSecond = (props) => {
  const [formVal, setFormVal] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  })
  const [eaddress1, setEaddress1] = useState({ error: "", class: "" })
  const [eaddress2, setEaddress2] = useState({ error: "", class: "" })
  const [ecity, setEcity] = useState({ error: "", class: "" })
  const [ecountry, setEcountry] = useState({ error: "", class: "" })
  const [estate, setEstate] = useState({ error: "", class: "" })
  const [epincode, setEpincode] = useState({ error: "", class: "" })

  const address_regex = /^[a-zA-Z0-9\s,'-]*$/;
  const pincode_regex = /^(\d{4}|\d{6})$/;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value })
  };

  const handle_second_data = () => {
    let err_obj = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }

    if (!formVal.address1) {
      err_obj.address1 = "address1"
      setEaddress1({ ...eaddress1, error: "Address Line 1 is a Required Field.", class: "error_input" })
    } else {
      (address_regex.test(formVal.address1)) ?
        <>{setEaddress1({ ...eaddress1, error: "", class: "" })}{err_obj.address1 = ""}</> :
        <>{setEaddress1({ ...eaddress1, error: "Enter Valid Adress Line 1.", class: "error_input" })}{err_obj.address1 = "address1"}</>
    }

    if (!formVal.address2) {
      err_obj.address2 = "address2"
      setEaddress2({ ...eaddress2, error: "Address Line 2 is a Required Field.", class: "error_input" })
    } else {
      (address_regex.test(formVal.address2)) ?
        <>{setEaddress2({ ...eaddress2, error: "", class: "" })}{err_obj.address2 = ""}</> :
        <>{setEaddress2({ ...eaddress2, error: "Enter Valid Address Line 2.", class: "error_input" })}{err_obj.address2 = "address2"}</>
    }

    if (!formVal.city) {
      err_obj.city = "city"
      setEcity({ ...ecity, error: "City is a Required Field.", class: "error_input" })
    } else {
      <>{setEcity({ ...ecity, error: "", class: "" })}{err_obj.city = ""}</>
    }

    if (!formVal.state) {
      err_obj.state = "state"
      setEstate({ ...ecity, error: "State is a Required Field.", class: "error_input" })
    } else {
      <>{setEstate({ ...ecity, error: "", class: "" })}{err_obj.state = ""}</>
    }

    if (!formVal.country) {
      err_obj.country = "country"
      setEcountry({ ...ecountry, error: "Country is a Required Field.", class: "error_input" })
    } else {
      <>{setEcountry({ ...ecountry, error: "", class: "" })}{err_obj.country = ""}</>
    }
    if (!formVal.pincode) {
      err_obj.pincode = ""
      setEpincode({ ...epincode, error: "Pincode is a Required Field.", class: "error_input" })
    } else {
      (pincode_regex.test(formVal.pincode)) ?
        <>{setEpincode({ ...epincode, error: "", class: "" })}{err_obj.pincode = ""}</> :
        <>{setEpincode({ ...epincode, error: "Enter Valid Pincode.", class: "error_input" })}{err_obj.pincode = "pincode"}</>
    }

    if ( err_obj.address1 == "" &&
      err_obj.address2 == "" &&
      err_obj.city == "" &&
      err_obj.state == "" &&
      err_obj.country == "" &&
      err_obj.pincode == "") {
      props.handleNext();
      props.handle_second_data(formVal)
    }
  }



  return (
    <>
      <Box className="input_section">
        <Box className="w_49">
          <Input name="address1" className={`input ${eaddress1.class}`} type="text" placeholder='Address Line 1' value={formVal.address1} onChange={handleChange} />
          <p className='error'>{eaddress1.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="address2" className={`input ${eaddress2.class}`} type="text" placeholder='Address Line 2' value={formVal.address2} onChange={handleChange} />
          <p className='error'>{eaddress2.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">
          <FormControl fullWidth className='mb-15 select_box'>
            <InputLabel id="city">City</InputLabel>
            <Select
              labelId="city"
              name='city'
              id="cities"
              value={formVal.age}
              label="city"
              className={ecity.class}
              onChange={handleChange}
            >
              <MenuItem value="Amreli">Amreli</MenuItem>
              <MenuItem value="Surat">Surat</MenuItem>
              <MenuItem value="Vadodara">Vadodara</MenuItem>
            </Select>
          </FormControl>
          <p className='error'>{ecity.error}</p>
        </Box>
        <Box className="w_49">
          <FormControl fullWidth className='mb-15 select_box'>
            <InputLabel id="state">State</InputLabel>
            <Select
              labelId="state"
              name='state'
              id="state"
              value={formVal.state}
              label="state"
              onChange={handleChange}
              className={estate.class}
            >
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Himalaya">Himalaya</MenuItem>
              <MenuItem value="Kerala">Kerala</MenuItem>
            </Select>
          </FormControl>
          <p className='error'>{estate.error}</p>
        </Box>
      </Box>

      <Box className="input_section">
        <Box className="w_49">
          <FormControl fullWidth className='mb-15 select_box'>
            <InputLabel id="country">Country</InputLabel>
            <Select
              labelId="country"
              name='country'
              id="country"
              value={formVal.country}
              label="Country"
              onChange={handleChange}
              className={ecountry.class}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="Brazil">Brazil</MenuItem>
              <MenuItem value="Ukrain">Ukrain</MenuItem>
            </Select>
          </FormControl>
          <p className='error'>{ecountry.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="pincode" type="number" className={`input ${epincode.class}`} placeholder='Pincode' value={formVal.pincode} onChange={handleChange} />
          <p className='error'>{epincode.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="stepper_btn">
          <Button
            color="grey"
            variant="contained"
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="mr_2"
          >
            Back
          </Button>
          <Button variant="contained" color="primary"
            onClick={handle_second_data}
          >
            Next
          </Button>
        </Box>
      </Box>

    </>
  )
}

export default FormSecond