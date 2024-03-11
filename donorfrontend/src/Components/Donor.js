import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Donor() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[blood_group,setBlood_Group]=useState('')
    const[phone,setPhone]=useState('')
    const[donors,setDonors]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const donor={name,address,blood_group,phone}
    console.log(donor)
    fetch("http://localhost:8080/donor/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(donor)

  }).then(()=>{
    console.log("New Donor added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/donor/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setDonors(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Donor</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Donor Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Donor Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <TextField id="outlined-basic" label="Donor Blood_Group" variant="outlined" fullWidth 
      value={blood_group}
      onChange={(e)=>setBlood_Group(e.target.value)}
      />
      <TextField id="outlined-basic" label="Donor Phone_no." variant="outlined" fullWidth 
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Donors</h1>

    <Paper elevation={3} style={paperStyle}>

      {donors.map(donor=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={donor.id}>
         Id:{donor.id}<br/>
         Name:{donor.name}<br/>
         Address:{donor.address}<br/>
         Blood_Group:{donor.blood_group}<br/>
         Phone_no:{donor.phone}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}