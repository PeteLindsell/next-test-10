import { useState } from 'react'
import {
  Heading,
  Box,
  Button,
  Step,
  Icon,
} from "@cruk/cruk-react-components";

const Home = () => {
  const [step, setStep] = useState(1);
  const steps = ['Account','Details','Activity','Motivation','Page'];

  return (
    <>
    <Box>
        <Heading h1 marginTop="m">Test ie11 ssr</Heading>
        <Step current={step} steps={steps} />
        <Heading>{steps[step - 1]} Page</Heading>
        <Button onClick={() => setStep(step - 1)}>Prev</Button>
        <Button onClick={() => setStep(step + 1)} appearance="primary">Next</Button>
      </Box>
    </>
  );
}

export default Home
