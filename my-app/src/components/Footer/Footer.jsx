import icon from '../../assets/img/icon.png';

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
              <img src={icon} alt='logo'/>
              <div>
                <h1>KANBUN</h1> 
              </div>
          </div>
          <p className='footer__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tenetur.
          </p>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categoria</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'></Col>
          <Col lg='3'></Col>
        </Row>
      </Container>
    </footer>
  )
}
