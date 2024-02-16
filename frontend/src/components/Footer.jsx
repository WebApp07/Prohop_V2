import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-3'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Digital Oasis &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;