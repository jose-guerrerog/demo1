import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Grid, TextField, Typography } from "@mui/material"

const Contacts = () => (
  <Layout>
    <Typography variant="h3">
      Get in Touch
    </Typography>

    <Typography variant="h5">Opening hours</Typography>
    <Typography variant="body1">Morning tuition on request</Typography>
    <Typography variant="body1">Afternoon tuition 2.30 – 7.30 Monday to Friday</Typography>
    <Typography variant="body1">Saturday 8.30 am-5pm</Typography>
    <Typography variant="body1">Sunday by appointment</Typography>


    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}
      >
        <TextField id="outlined-basic" variant="outlined" label="First Name" fullWidth />
      </Grid>

      <Grid item xs={12} sm={6}
      >
        <TextField id="outlined-basic" variant="outlined" label="Last Name" fullWidth />
      </Grid>

      <Grid item xs={12} sm={6}
      >
        <TextField id="outlined-basic" variant="outlined" label="Email" fullWidth />
      </Grid>

      <Grid item xs={12} sm={6}
      >
        <TextField id="outlined-basic" variant="outlined" label="Mobile" fullWidth />
      </Grid>

      <Grid item xs={12} sm={6}
      >
        <TextField id="outlined-basic" variant="outlined" label="Suburb" fullWidth />
      </Grid>

    </Grid>

    <Button variant="contained" sx={{ width: '120px'}}>
      Send
    </Button>
  </Layout>
)

export default Contacts
