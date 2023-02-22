import React from 'react';
import StepperPart from './StepperPart';
import Container from '@mui/material/Container';
const Form = () => {
    return (
        <Container maxWidth="lg" className='form_section'>
            <div className='form_part'>
                <StepperPart/>
            </div>
        </Container>
    )
}

export default Form