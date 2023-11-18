// import {Container , Navbar, Nav} from "react-bootstrap"
import { Container, Row, Col } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ccLogo1 from "../../assets/img/cc-logo1.png";
import imgdoctor from "../../assets/img/3dokter.png";
import imggoogle from "../../assets/img/google.png";
import "../../assets/style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const linkDaftar= useNavigate();
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={6} className="box box-white">
            <div className="  card-1">
              <img className="logo" src={ccLogo1} alt="logo" />
              <div className="card-lingkar">
                <img className="img-dc" src={imgdoctor} alt="" />
              </div>
              <div className="card-title">
                <p>#cegahkankerserviks</p>
              </div>
            </div>
          </Col>

          <Col md={6} className="box-2 box-red">
            <div className=" card-2">
              <h2 className="mx-4 mt-4 teks-title-judul">Masuk Akun</h2>
              <div className="mx-4">
                <div className="hr mb-4"></div>
              </div>
              <Form>
                <Form.Group className="mb-3 mx-4" controlId="formGroupEmail">
                  <Form.Label className="teks-title">Alamat Email</Form.Label>
                  <Form.Control className=" custom-input " type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 mx-4 " controlId="formGroupPassword">
                  <Form.Label className="teks-title">Password</Form.Label>
                  <Form.Control className="custom-input" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3 mx-4 ">
                  <Button className="costum-button ">Masuk</Button>
                </Form.Group>
                <div className="mt-4 mx-4 row-line">
                  <div className=" line-1"></div>
                  <p className="atau">Atau</p>
                  <div className="line-1"></div>
                </div>

                <Form.Group className="mb-3 mx-4 ">
                  <Button className="costum-button-google ">
                    <img className="img-google" src={imggoogle} alt="" /> Masuk dengan Google
                  </Button>
                </Form.Group>
              </Form>
              <p className="teks-login-daftar">
                Belum punya akun?<a onClick={()=> linkDaftar ('/daftar')} href="" >  Daftar sekarang</a>
              </p>
              <p className="teks-login-daftar">
                Lupa password?<a href=""> Reset password sekarang</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;