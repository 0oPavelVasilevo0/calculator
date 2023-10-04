import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit'

function App() {
  return (
    < MDBContainer  id="drum-machine" className=' d-flex align-items-center justify-content-center ' style={{ height: '100vh' }} >
      <MDBContainer  className='square border bg-dark border-2 border-dark rounded-1 d-flex justify-content-center align-items-center p-0' style={{ maxWidth: '18rem' }}>
       
        <MDBCard shadow='0' className='p-1 bg-dark rounded-1' >
          {/* <MDBInput className='num__input '/> */}
          <MDBContainer fluid className='square border bg-dark d-flex align-items-center justify-content-end text-light rounded-1' style={{height: '4rem', width: '100%'}}>123234</MDBContainer>
        <MDBCardBody className=' d-flex align-items-center justify-content-center pt-2 pb-1'>
          <MDBRow className='row-cols-1 row-cols-md-1 g-1'>
            <MDBCol className='d-flex  justify-content-center'>
              <MDBBtn size='lg' color='info' className='norm__button'>7</MDBBtn>
              <MDBBtn size='lg' color='info' className='norm__button mx-1'>8</MDBBtn>
              <MDBBtn size='lg' color='info' className='norm__button me-1'>9</MDBBtn>
              <MDBBtn size='lg' color='warning' className='norm__button'>/</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' color='info' className='norm__button'>4</MDBBtn>
                <MDBBtn size='lg' color='info' className='norm__button mx-1'>5</MDBBtn>
                <MDBBtn size='lg' color='info' className='norm__button me-1'>6</MDBBtn>
                <MDBBtn size='lg' color='warning' className='norm__button'>*</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' color='info' className='norm__button'>1</MDBBtn>
                <MDBBtn size='lg' color='info' className='norm__button mx-1'>2</MDBBtn>
                <MDBBtn size='lg' color='info' className='norm__button me-1'>3</MDBBtn>
                <MDBBtn size='lg' color='warning' className='norm__button' >-</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' color='info' className='big__button'>0</MDBBtn>
                <MDBBtn size='lg' color='info' className='norm__button mx-1'>.</MDBBtn>
              
                <MDBBtn size='lg' color='warning' className='norm__button'>+</MDBBtn>
              </MDBCol>
              <MDBCol className='d-flex  justify-content-center'>
                <MDBBtn size='lg' color='danger' className='big__button me-1'>AC</MDBBtn>
                <MDBBtn size='lg' color='success' className='big__button '>=</MDBBtn>
              
              </MDBCol>
              </MDBRow>
              
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
