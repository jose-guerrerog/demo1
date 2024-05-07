import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Button, Container, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const features = [
  'How can I help? Education is so different today!',
  'Help, my child can’t read!',
  "How can I encourage my child to read?",
  'My child is in a big class and seems to be lost!',
  'My child has such low self esteem and struggles with confidence.',
  'My child does not know basic maths!',
];

const HighSchoolPage = () => (
<Layout>
  <SEO title="Services" />
  <Typography variant="h3">Services</Typography>


  <Link to="/page-2/">High School</Link>
  <Link to="/page-2/">HSC Subjects</Link>
  <Link to="/page-2/">School Readiness</Link>
  <Link to="/page-2/">K-12 tutoring</Link>


  <Typography variant="body1">
    Education is ever changing and many parents have concerns and questions about the system in general, such as:
  </Typography>

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

  <Typography variant="body1">
Our programs and tuition will help answer these concerns.</Typography>
  <Typography variant="body1">We provide One to One tuition for students in literacy and numeracy, from pre school through to year 12, in a caring, safe and nurturing environment, with up to date resources.</Typography>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

</Layout>
)

export default HighSchoolPage;