import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'

function App() {
  return (
    < MDBContainer fluid id="drum-machine" className=' d-flex align-items-center justify-content-center px-0 bg-dark' style={{ height: '100vh' }} >
      <MDBContainer className=' border border-secondary rounded-3 d-flex justify-content-center align-items-center p-0' style={{ maxWidth: '18rem' }}>
       
        <MDBCard shadow='0' className='p-1 bg-dark' >
          <MDBContainer fluid className=' bg-secondary bg-opacity-25 bg-gradient  d-flex align-items-center justify-content-end text-light rounded-1 mt-1' style={{height: '4rem', width: '17rem'}}>123234</MDBContainer>
        <MDBCardBody className=' d-flex align-items-center justify-content-center pt-2 pb-1'>
          <MDBRow className='row-cols-1 row-cols-md-1 g-1'>
            <MDBCol className='d-flex  justify-content-center'>
              <MDBBtn size='lg' className='norm__button bg-info bg-opacity-50 shadow-0'>7</MDBBtn>
              <MDBBtn size='lg'  className='norm__button mx-1 bg-info bg-opacity-50 shadow-0'>8</MDBBtn>
              <MDBBtn size='lg'  className='norm__button me-1 bg-info bg-opacity-50 shadow-0'>9</MDBBtn>
              <MDBBtn size='lg' className='norm__button bg-warning bg-opacity-50 shadow-0'>/</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg'  className='norm__button bg-info bg-opacity-50 shadow-0' shadow-0>4</MDBBtn>
                <MDBBtn size='lg'  className='norm__button mx-1 bg-info bg-opacity-50 shadow-0'>5</MDBBtn>
                <MDBBtn size='lg'  className='norm__button me-1 bg-info bg-opacity-50 shadow-0'>6</MDBBtn>
                <MDBBtn size='lg'  className='norm__button bg-warning bg-opacity-50 shadow-0'>*</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' className='norm__button bg-info bg-opacity-50 shadow-0'>1</MDBBtn>
                <MDBBtn size='lg'  className='norm__button mx-1 bg-info bg-opacity-50 shadow-0'>2</MDBBtn>
                <MDBBtn size='lg'  className='norm__button me-1 bg-info bg-opacity-50 shadow-0'>3</MDBBtn>
                <MDBBtn size='lg'  className='norm__button bg-warning bg-opacity-50 shadow-0' >-</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg'  className='big__button bg-info bg-opacity-50 shadow-0'>0</MDBBtn>
                <MDBBtn size='lg'  className='norm__button mx-1 bg-info bg-opacity-50 shadow-0'>.</MDBBtn>
              
                <MDBBtn size='lg'  className='norm__button bg-warning bg-opacity-50 shadow-0'>+</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' className='big__button me-1 bg-danger bg-opacity-50 shadow-0'>AC</MDBBtn>
                <MDBBtn size='lg'  className='big__button bg-success bg-opacity-50 shadow-0'>=</MDBBtn>
              
              </MDBCol>
              </MDBRow>
              
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
