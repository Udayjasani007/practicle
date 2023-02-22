import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import FormFirst from './FormFirst';
import FormThird from './FormThird';
import FormSecond from './FormSecond';


const StepperPart = () => {
    const steps = ['User Information', 'Address Details', 'Thankyou'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [process1, setProcess1] = React.useState("");
    const [process2, setProcess2] = React.useState("");

    const handle_first_data = (process_1) => {
        setProcess1(process_1);
    }

    const handle_second_data = (process_2) => {
        setProcess2(process_2);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <>
            <Box className="stepper_section">
                <form>
                    <Container maxWidth="md">
                        <Stepper activeStep={activeStep} className="stepper_part">
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label} className="step_label">
                                        <StepLabel className='stepper_label'></StepLabel>
                                        <p className='label_text'>{label}</p>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Container>

                    {activeStep === steps.length ? (
                        <>
                            <Typography className='completed_section'>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box className="reset_btn">
                                <Box />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <div className='form_sub_parts'>
                                {
                                    (activeStep === steps.length - 1) ?
                                        <FormThird data ={[process1, process2]}/> :
                                        <>
                                            {
                                                (activeStep === 0) ?
                                                    <FormFirst
                                                        handle_first_data={handle_first_data}
                                                        handleNext={handleNext}
                                                        activeStep={activeStep}
                                                        handleBack={handleBack} /> :
                                                    <FormSecond
                                                        handle_second_data={handle_second_data}
                                                        handleNext={handleNext}
                                                        activeStep={activeStep}
                                                        handleBack={handleBack} />
                                            }
                                        </>
                                }
                            </div>
                            {/* <Box className="stepper_btn">
                                <Button
                                    color="grey"
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="mr_2"
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box> */}
                        </>
                    )}
                </form>
            </Box>
        </>
    )
}

export default StepperPart