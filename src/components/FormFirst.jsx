import React, { useEffect, useState } from 'react';
import { Input, Box, Container, Button } from '@mui/material';
// import DatePicker from "react-datepicker";

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const FormFirst = (props) => {
  const [value, setValue] = React.useState(null);

  const [formVal, setFormVal] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    age: "",
    height: "",
    weight: "",
    number: "",
    birthdate: null,
    blgroup: "",
    gender: "",
    mstatus: ""
  });

  const [efname, setEfname] = useState({ error: "", class: "" });
  const [emname, setEmname] = useState({ error: "", class: "" });
  const [elname, setElname] = useState({ error: "", class: "" });
  const [eemail, setEemail] = useState({ error: "", class: "" });
  const [eage, setEage] = useState({ error: "", class: "" });
  const [eheight, setEheight] = useState({ error: "", class: "" });
  const [eweight, setEweight] = useState({ error: "", class: "" });
  const [enumber, setEnumber] = useState({ error: "", class: "" });
  const [ebirthdate, setEbirthdate] = useState({ error: "", class: "" });
  const [eblgroup, setEblgroup] = useState({ error: "", class: "" });
  const [egender, setEgender] = useState({ error: "", class: "" });
  const [emstatus, setEmstatus] = useState({ error: "", class: "" });


  let name_regex = /^[a-zA-Z ]+$/;
  let number_regex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let blood_regex = /^(A|B|AB|O)[+-]$/;
  let height_regex = /^[3-8]{1}\'([0-9]{1}|0[0-9]{1}|1[0-1]{1})(\"|\s*((1\/4|1\/2|3\/4))\")$/;
  let weight_regex = /^(0|[1-9]\d*)(,\d+)?$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value })
  }

  const handleNextFirst = () => {
    let err_obj = {
      fname:"",
      mname: "",
      lname: "",
      email: "",
      age: "",
      height: "",
      weight: "",
      number: "",
      birthdate: "",
      blgroup: "",
      gender: "",
      mstatus: ""
    };
    if (!formVal.fname) {
      err_obj.fname = "FirstName";
      setEfname({ ...efname, error: "FirstName is a Required Field.", class: "error_input" })
    } else {
      (name_regex.test(formVal.fname)) ?
        <>{setEfname({ ...efname, error: "", class: "" })}{err_obj.fname = ""}</> :
        <>{setEfname({ ...efname, error: "Enter Valid FirstName.", class: "error_input" })}{err_obj.fname = "FirstName"}</>
    }
    if (!formVal.mname) {
      err_obj.mname = "MiddleName"
      setEmname({ ...emname, error: "MiddleName is a Required Field.", class: "error_input" })
    } else {
      (name_regex.test(formVal.mname)) ?
        <>{setEmname({ ...emname, error: "", class: "" })}{err_obj.mname = ""}</> :
        <>{setEmname({ ...emname, error: "Enter Valid MiddleName.", class: "error_input" })}{err_obj.mname = "MiddleName "}</>
    }
    if (!formVal.lname) {
      err_obj.lname = "LastName"
      setElname({ ...elname, error: "LastName is a Required Field.", class: "error_input" })
    } else {
      (name_regex.test(formVal.lname)) ?
        <>{setElname({ ...elname, error: "", class: "" })}{err_obj.lname = ""}</> :
        <>{setElname({ ...elname, error: "Enter Valid LastName.", class: "error_input" })}{err_obj.lname = "LastName"}</>
    }
    if (!formVal.email) {
      err_obj.email = "Email"
      setEemail({ ...eemail, error: "Email is a Required Field.", class: "error_input" })
    } else {
      (email_regex.test(formVal.email)) ? 
      <>{setEemail({ ...eemail, error: "", class: "" })}{err_obj.email = ""}</> : 
      <>{setEemail({ ...eemail, error: "Enter Valid Email.", class: "error_input" })}{err_obj.email = "Email"}</>
    }
    if (!formVal.age) {
      err_obj.age = "Age"
      setEage({ ...eage, error: "Age is a Required Field.", class: "error_input" })
    } else {
      (formVal.age > 0 && formVal.age < 200) ? <>{setEage({ ...eage, error: "", class: "" })}{err_obj.age = ""}</> : 
      <>{setEage({ ...eage, error: "Enter Valid Age.", class: "error_input" })}{err_obj.age = "Age."}</>
    }
    if (!formVal.height) {
      err_obj.height = "Height"
      setEheight({ ...eheight, error: "Height is a Required Field.", class: "error_input" })
    }
    else {
      (height_regex.test(formVal.height)) ? 
      <>{setEheight({ ...eheight, error: "", class: "" })}{err_obj.height = ""}</> : 
      <>{setEheight({ ...eheight, error: "Enter Valid Height.", class: "error_input" })}{err_obj.height = "Height"}</>
    }
    if (!formVal.weight) {
      err_obj.weight = "Weight"
      setEweight({ ...eweight, error: "Weight is a Required Field.", class: "error_input" })
    }
    else {
      (weight_regex.test(formVal.weight)) ? 
      <>{setEweight({ ...eweight, error: "", class: "" })}{err_obj.weight = ""}</> : 
      <>{setEweight({ ...eweight, error: "Enter Valid Weight.", class: "error_input" })}{err_obj.weight = "Weight"}</>
    }
    if (!formVal.number) {
      err_obj.number = "Mobile Number"
      setEnumber({ ...enumber, error: "Mobile Number is a Required Field.", class: "error_input" })
    }
    else {
      (number_regex.test(formVal.number)) ? 
      <>{setEnumber({ ...enumber, error: "", class: "" })}{err_obj.number = ""}</> : 
      <>{setEnumber({ ...enumber, error: "Enter Valid Number.", class: "error_input" })}{err_obj.number = "Mobile Number"}</>
    }
    if (!formVal.birthdate) {
      err_obj.number = "BirthDate"
      setEbirthdate({ ...ebirthdate, error: "BirthDate is a Required Field.", class: "error_input" })
    } else {
      err_obj.number = ""
      setEbirthdate({ ...ebirthdate, error: "", class: "" })
    }
    if (!formVal.blgroup) {
      err_obj.blgroup = "BloodGroup"
      setEblgroup({ ...eblgroup, error: "BloodGroup is a Required Field.", class: "error_input" })
    } else {
      (blood_regex.test(formVal.blgroup)) ?
        <>{setEblgroup({ ...eblgroup, error: "", class: "" })}{err_obj.blgroup = ""}</> :
        <>{setEblgroup({ ...eblgroup, error: "Enter Valid BloodGroup.", class: "error_input" })}{err_obj.blgroup = "BloodGroup"}</>
    }
    if (!formVal.gender) {
      err_obj.gender = "Gender"
      setEgender({ ...egender, error: "Gender is a Required Field.", class: "error_input" })
    } else {
      err_obj.gender = ""
      setEgender({ ...eblgroup, error: "", class: "" })
    }
    if (!formVal.mstatus) {
      err_obj.mstatus = "Mariatl Status"
      setEmstatus({ ...emstatus, error: "Mariatl Status is a Required Field.", class: "error_input" })
    } else {
      err_obj.mstatus = ""
      setEmstatus({ ...eblgroup, error: "", class: "" })
    }
    if (err_obj.mstatus == "" &&
      err_obj.fname == "" &&
      err_obj.mname == "" &&
      err_obj.lname == "" &&
      err_obj.number == "" &&
      err_obj.email == "" &&
      err_obj.height == "" &&
      err_obj.weight == "" &&
      err_obj.age == "" &&
      err_obj.birthdate == "" &&
      err_obj.blgroup == "" &&
      err_obj.gender == "") {
      props.handleNext();
      props.handle_first_data(formVal)
    }
  }

  return (
    <>
      <Box className="input_section">
        <Box className="w_49">
          <Input name="fname" className={`input ${efname.class}`} type="text" placeholder='First Name' value={formVal.fname} onChange={handleChange} />
          <p className='error'>{efname.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="mname" className={`input ${emname.class}`} type="text" placeholder='Middle Name' value={formVal.mname} onChange={handleChange} />
          <p className='error'>{emname.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">
          <Input name="lname" className={`input ${elname.class}`} type="text" placeholder='Last Name' value={formVal.lname} onChange={handleChange} />
          <p className='error'>{elname.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="number" className={`input ${enumber.class}`} type="number" placeholder='Mobile No.' value={formVal.number} onChange={handleChange} />
          <p className='error'>{enumber.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">
          <Input name="email" className={`input ${eemail.class}`} type='email' placeholder='Email' value={formVal.email} onChange={handleChange} />
          <p className='error'>{eemail.error}</p>
        </Box>
        <Box className="w_49 dates">
          <LocalizationProvider dateAdapter={AdapterDayjs} className="w_100">
            <DatePicker className={`date_picker w_100 ${ebirthdate.class}`}
              label="Birthdate"
              format="mm/dd/yyyy"
              value={formVal.birthdate}
              onChange={(newValue) => {
                setFormVal({ ...formVal, birthdate: newValue });
              }}
              renderInput={(params) => <TextField {...params} className={`${ebirthdate.class}`} />}
            />
          </LocalizationProvider>
          <p className='error date_error'>{ebirthdate.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">

          <Input type='number' name="age" className={`input ${eage.class}`} placeholder='Age' value={formVal.age} onChange={handleChange} />
          <p className='error'>{eage.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="blgroup" className={`input ${eblgroup.class}`} placeholder='Blood-Group' value={formVal.blgroup} onChange={handleChange} />
          <p className='error'>{eblgroup.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">
          <Input name="height" className={`input ${eheight.class}`} placeholder='Height' value={formVal.height} onChange={handleChange} />
          <p className='error'>{eheight.error}</p>
        </Box>
        <Box className="w_49">
          <Input name="weight" className={`input ${eweight.class}`} placeholder='Weight' value={formVal.weight} onChange={handleChange} />
          <p className='error'>{eweight.error}</p>
        </Box>
      </Box>
      <Box className="input_section">
        <Box className="w_49">
          <FormControl>
            <FormLabel id="gender_" className={`gender_label ${egender.class}`}>Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender_"
              name="gender"
              className='gender_section'
              value={formVal.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <p className='error'>{egender.error}</p>
        </Box>
        <Box className="w_49">
          <FormControl>
            <FormLabel id="maritial_status" className={`gender_label ${egender.class}`}>Martial Status</FormLabel>
            <RadioGroup
              aria-labelledby="maritial_status"
              name="mstatus"
              className='gender_section'
              value={formVal.mstatus}
              onChange={handleChange}
            >
              <FormControlLabel value="Single" control={<Radio />} label="Single" />
              <FormControlLabel value="Married" control={<Radio />} label="Married" />
              <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
              <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
            </RadioGroup>
          </FormControl>
          <p className='error'>{emstatus.error}</p>
        </Box>
      </Box>
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
        <Button variant="contained" color="primary" onClick={handleNextFirst}>
          Next
        </Button>
      </Box>
    </>
  )
}

export default FormFirst;