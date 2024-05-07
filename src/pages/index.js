import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Button, Container, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const features = [
  'Start your child on the road to success.',
  'Turn Non-Readers into Readers!',
  "Unlock your child's full potential by building their self esteem and confidence.",
  'Support your children, they do not need to fail.',
  'Provide your child with early intervention and support, using explicit teaching methods and individual programs that will improve their literacy and numeracy skills.',
  'Supply you with regular progress reports.',
  'Design individual ﬂexible programs based on diagnostic assessments of your child',
];

const IndexPage = () => (
<Layout>
  <SEO title="Home" />
  <Typography variant="h3">Welcome to Eastside Learning Centre</Typography>
  <Typography variant="body1" mt={5}>Eastside Learning Centre is situated in the Eastern Suburbs servicing the areas of Matraville, Maroubra, Malabar, Mascot Coogee, Kensington, Kingsford, Chifley, Botany, Rosebery, Daceyville, Pagewood, Eastgardens, Randwick and Little Bay.</Typography>
  <Typography variant="body1">Eastside Learning Centre is here to:</Typography>

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

  <Typography variant="body1">Our individual programs are curriculum based and taught by teachers and university specialists qualified in their field.</Typography>

  <Typography variant="body1">We provide One to One tuition for students in literacy and numeracy, from pre school through to year 12, in a caring, safe and nurturing environment, with up to date resources.</Typography>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13237.344339157957!2d151.2307695!3d-33.9582002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b161a2437cd3%3A0x881716a23da6b778!2sEastside%20Learning%20Centre!5e0!3m2!1sen!2sau!4v1714892477027!5m2!1sen!2sau&z=2" width="100%" height="450"  style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</Layout>
)

export default IndexPage