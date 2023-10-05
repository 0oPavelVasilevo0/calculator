import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'

function App() {
  return (
    < MDBContainer fluid id="drum-machine" className=' d-flex align-items-center justify-content-center px-0 bg-dark' style={{ height: '100vh' }} >
      <MDBContainer className=' border border-secondary rounded-3 d-flex justify-content-center align-items-center p-0' style={{ maxWidth: '17.2rem' }}>

        <MDBCard shadow='0' className=' bg-dark rounded-3' >
          <MDBContainer fluid className=' bg-secondary  bg-opacity-25 bg-gradient rounded-top border-bottom border-secondary d-flex align-items-center justify-content-end text-light  mt-0 ' style={{ height: '5rem', width: '17.1rem', fontSize: '1.6rem' }}>{'num'}</MDBContainer>
          <MDBCardBody className=' d-flex align-items-center justify-content-center p-0'>
            <MDBRow className='row-cols-1 row-cols-md-1 g-0'>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='seven' size='lg' className='norm__button bg-secondary text-info bg-opacity-50 shadow-0'>7</MDBBtn>
                <MDBBtn id='eight' size='lg' className='norm__button mx-0 bg-secondary text-info bg-opacity-50 shadow-0'>8</MDBBtn>
                <MDBBtn id='nine' size='lg' className='norm__button me-0 bg-secondary text-info bg-opacity-50 shadow-0'>9</MDBBtn>
                <MDBBtn id='divide' size='lg' className='norm__button text-warning  bg-secondary bg-opacity-50 shadow-0'>/</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='four' size='lg' className='norm__button bg-secondary text-info bg-opacity-50 shadow-0' shadow-0>4</MDBBtn>
                <MDBBtn id='five' size='lg' className='norm__button mx-0 bg-secondary text-info bg-opacity-50 shadow-0'>5</MDBBtn>
                <MDBBtn id='six' size='lg' className='norm__button me-0 bg-secondary text-info bg-opacity-50 shadow-0'>6</MDBBtn>
                <MDBBtn id='multiply' size='lg' className='norm__button text-warning  bg-secondary bg-opacity-50 shadow-0'>*</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='one' size='lg' className='norm__button bg-secondary text-info bg-opacity-50 shadow-0'>1</MDBBtn>
                <MDBBtn id='two' size='lg' className='norm__button mx-0 bg-secondary text-info bg-opacity-50 shadow-0'>2</MDBBtn>
                <MDBBtn id='three' size='lg' className='norm__button me-0 bg-secondary text-info bg-opacity-50 shadow-0'>3</MDBBtn>
                <MDBBtn id='subtract' size='lg' className='norm__button text-warning  bg-secondary bg-opacity-50 shadow-0' >-</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='zero' size='lg' className='big__button bg-secondary text-info bg-opacity-50 shadow-0'>0</MDBBtn>
                <MDBBtn id='decimal' size='lg' className='norm__button mx-0 bg-secondary text-info bg-opacity-50 shadow-0'>.</MDBBtn>
                <MDBBtn id='add' size='lg' className='norm__button text-warning  bg-secondary bg-opacity-50 shadow-0'>+</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn id='clear' size='lg' className='big__button bottom__left me-0 bg-secondary text-danger bg-opacity-50 shadow-0'>AC</MDBBtn>
                <MDBBtn id='display' size='lg' className='big__button bottom__right bg-secondary text-success bg-opacity-50 shadow-0'>=</MDBBtn>

              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
