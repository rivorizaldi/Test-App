import React from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Alert,
  Spinner,
  Image,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toAbsoluteUrl } from "../../util/util";
import styled from "styled-components";
import { userLogin } from "./redux/AuthAPI";

const AuthCard = styled(Card)`
  width: 30%;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
`;

function Auth() {
  const dispatch = useDispatch();

  const { message, loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <Container
      fluid
      className="d-flex flex-column h-100 justify-content-center align-items-center"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <Image
        src={toAbsoluteUrl("/assets/images/logo.png")}
        height={180}
        className="mb-4"
      />
      <AuthCard className="mt-0 border-0 shadow-sm rounded rounded-3 p-4">
        <Card.Body>
          {message && <Alert variant="danger">{message}</Alert>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Username</strong>
              </Form.Label>
              <Form.Control
                type="text"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p
                  className="fst-italic text-danger"
                  style={{ fontSize: ".8rem" }}
                >
                  Harap Masukkan Username
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p
                  className="fst-italic text-danger"
                  style={{ fontSize: ".8rem" }}
                >
                  Harap Masukkan Password
                </p>
              )}
            </Form.Group>
            <Row className="mx-4 mt-5">
              <Button variant="primary" type="submit">
                Login {loading && <Spinner animation="border" size="sm" />}
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </AuthCard>
    </Container>
  );
}

export default Auth;
