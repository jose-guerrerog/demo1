import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const features = [
  'Free assessments for Literacy and Maths',
  'Study skills',
  "Writing for all text types",
];

const HighSchoolPage = () => (
<Layout>
  <SEO title="Services" />
  <Typography>Tutoring for all high school subjects is available.</Typography>
  <Typography>Special emphasis is placed on completion of assignments, assistance with homework and preparation for exams.</Typography>

  <Box sx={{ display: 'flex', flexDirection: 'column'}} mt={5}>
    {
      features.map((feature) => (
        <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}} mb={2}>
          <CheckIcon />
          <Typography variant="body1">{feature}</Typography>
        </Box>
      ))
    }
  </Box>


  <Typography>Naplan Workshops</Typography>
  <Typography>A highly successful 2 day program with 2 sessions a day.</Typography>
  <Typography>Small groups,taught by qualified and experienced teachers.</Typography>


</Layout>
)

export default HighSchoolPage;