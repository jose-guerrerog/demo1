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
  <Typography variant="h3" fontWeight={700}>Welcome to Eastside Learning Centre</Typography>
  <Typography variant="body1" mt={5} textAlign="justify" sx={{maxWidth: '100%'}}>Eastside Learning Centre is situated in the Eastern Suburbs servicing the areas of Matraville, Maroubra, Malabar, Mascot Coogee, Kensington, Kingsford, Chifley, Botany, Rosebery, Daceyville, Pagewood, Eastgardens, Randwick and Little Bay.</Typography>
  <Typography variant="body1" mt={2}>Eastside Learning Centre is here to:</Typography>

  <Box sx={{ display: 'flex', flexDirection: 'column'}} my={5}>
    {
      features.map((feature) => (
        <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}} mb={2}>
          <CheckIcon />
          <Typography variant="body1" sx={{maxWidth: '100%'}} ml={2}>{feature}</Typography>
        </Box>
      ))
    }
  </Box>

  <Typography variant="body1" textAlign="justify" sx={{maxWidth: '100%'}} mb={2}>Our individual programs are curriculum based and taught by teachers and university specialists qualified in their field.</Typography>

  <Typography variant="body1" textAlign="justify" sx={{maxWidth: '100%'}}>We provide One to One tuition for students in literacy and numeracy, from pre school through to year 12, in a caring, safe and nurturing environment, with up to date resources.</Typography>

</Layout>
)

export default IndexPage