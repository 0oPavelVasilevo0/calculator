import { useState } from 'react';
import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'

function App() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');




  const handleNumberClick = (num) => {
    // If there's a result from the previous calculation, start a new input
    if (output === 'Error' || (input === '' && output !== '0')) {
      setInput(num);
      setOutput(num);
    } else {
      setInput((prevInput) => prevInput + num);
      setOutput((prevOutput) => prevOutput === '0' ? num : prevOutput + num);
    }
  };


  const handleOperatorClick = (operator) => {
    // If there's a result from the previous calculation, start a new input with the result as the initial value
    if (output === 'Error' || (input === '' && output !== '0')) {
      setInput(output + operator);
      setOutput(output + operator);
    } else if (!isNaN(input[input.length - 1]) || input[input.length - 1] === '.') {
      setInput((prevInput) => prevInput + operator);
      setOutput((prevOutput) => prevOutput + operator);
    } else if (operator === '-') {
      setInput((prevInput) => prevInput + operator);
      setOutput((prevOutput) => prevOutput + operator);
    } else {
      let newInput = input;
      let newOutput = output;

      // Remove all consecutive operators before adding the new one
      while (['+', '-', '*', '/'].includes(newInput[newInput.length - 1])) {
        newInput = newInput.slice(0, -1);
        newOutput = newOutput.slice(0, -1);
      }

      newInput += operator;
      newOutput += operator;

      setInput(newInput);
      setOutput(newOutput);
    }
  };




  const handleDecimalClick = () => {
    const lastNumber = input.split(/[-+*/]/).pop(); // Get the last number in the input

    if (input === '' || (lastNumber && !lastNumber.includes('.'))) {
      setInput((prevInput) => prevInput + '.');
      setOutput((prevOutput) => prevOutput + '.');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setOutput('0');
  };

  const handleEqualsClick = () => {
    try {
      // eslint-disable-next-line no-eval
      let result = eval(input);

      // Round the result to a specific number of decimal places
      result = parseFloat(result.toFixed(4)); // Round to 4 decimal places

      setInput(result.toString());
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    < MDBContainer fluid  className=' d-flex align-items-center justify-content-center px-0 bg-dark' style={{ height: '100vh' }} >
      <MDBContainer className=' border border-secondary rounded-3 d-flex justify-content-center align-items-center p-0' style={{ maxWidth: '17.2rem' }}>
        <MDBCard shadow='0' className=' bg-dark rounded-3'>
          <MDBContainer id='display' fluid className=' bg-secondary  bg-opacity-25 bg-gradient rounded-top border-bottom border-secondary d-flex align-items-center justify-content-end text-light  mt-0 ' style={{ height: '5rem', width: '17.1rem', fontSize: `${output.length > 9 ? 28 / output.length : 3}rem`, fontWeight: 'lighter' }}>
            {output}
          </MDBContainer>
          <MDBCardBody className=' d-flex align-items-center justify-content-center p-0'>
            <MDBRow className='row-cols-1 row-cols-md-1 g-0'>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='seven' size='lg' className='norm__button bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('7')}>7</MDBBtn>
                <MDBBtn id='eight' size='lg' className='norm__button mx-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('8')}>8</MDBBtn>
                <MDBBtn id='nine' size='lg' className='norm__button me-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('9')}>9</MDBBtn>
                <MDBBtn id='divide' size='lg' className='norm__button text-white-50  bg-warning bg-opacity-50 shadow-0' onClick={() => handleOperatorClick('/')}>/</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='four' size='lg' className='norm__button bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('4')}>4</MDBBtn>
                <MDBBtn id='five' size='lg' className='norm__button mx-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('5')}>5</MDBBtn>
                <MDBBtn id='six' size='lg' className='norm__button me-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('6')}>6</MDBBtn>
                <MDBBtn id='multiply' size='lg' className='norm__button text-white-50 bg-warning bg-opacity-50 shadow-0'  onClick={() => handleOperatorClick('*')}>*</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='one' size='lg' className='norm__button bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('1')}>1</MDBBtn>
                <MDBBtn id='two' size='lg' className='norm__button mx-0 bg-secondary  text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('2')}>2</MDBBtn>
                <MDBBtn id='three' size='lg' className='norm__button me-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('3')}>3</MDBBtn>
                <MDBBtn id='subtract' size='lg' className='norm__button text-white-50  bg-warning bg-opacity-50 shadow-0'  onClick={() => handleOperatorClick('-')} >-</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='zero' size='lg' className='big__button bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleNumberClick('0')}>0</MDBBtn>
                <MDBBtn id='decimal' size='lg' className='norm__button mx-0 bg-secondary text-white-50 bg-opacity-50 shadow-0' onClick={() => handleDecimalClick('.')}>.</MDBBtn>
                <MDBBtn id='add' size='lg' className='norm__button text-white-50  bg-warning bg-opacity-50 shadow-0'  onClick={() => handleOperatorClick('+')}>+</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='clear' size='lg' className='big__button bottom__left me-0 bg-danger text-white-50 bg-opacity-50 shadow-0' onClick={() => handleClearClick()}>AC</MDBBtn>
                <MDBBtn id='equals' size='lg' className='big__button bottom__right bg-success text-white-50 bg-opacity-50 shadow-0' onClick={() => handleEqualsClick()}>=</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;