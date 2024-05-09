import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"

const Contacts = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="h3" fontWeight={700}>
      Get in Touch
    </Typography>

    <Grid container spacing={1} mt={5}>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1" fontWeight={700}>Opening hours</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1">Monday to Friday 2.30 – 7.30pm</Typography>
        <Typography variant="body1">Saturday 8.30 am - 5pm</Typography>
        <Typography variant="body1">Morning tuition on request</Typography>
    <Typography variant="body1">Sunday by appointment</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1" fontWeight={700}>Phone</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1">0400 142 728</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1" fontWeight={700}>Address</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
      >
        <Typography variant="body1">498 Bunnerong Rd, Matraville NSW 2036</Typography>
      </Grid>
    </Grid>
    
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13237.344339157957!2d151.2307695!3d-33.9582002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b161a2437cd3%3A0x881716a23da6b778!2sEastside%20Learning%20Centre!5e0!3m2!1sen!2sau!4v1714892477027!5m2!1sen!2sau&z=2" width="100%" height="450"  style={{ border: 0, maxWidth: 500 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </Box>


    <Grid container spacing={2} mt={5}>
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

      <Grid item xs={12}>
        <TextField
          multiline
          rows={4}
          label="Comment"
          fullWidth
          variant="outlined" 
        />
      </Grid>

    </Grid>

    <Box mt={4} sx={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="outlined" sx={{ width: '150px', height: '40px'}}>
        Send
      </Button>
    </Box>
  </Layout>
)

export default Contacts
