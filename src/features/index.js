import React, { useEffect } from "react";
import { Navbar, Container, Row, Nav, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { unauthorize } from "./Auth/redux/AuthSlice";

import { getAllBranch } from "./Branch/redux/BranchAPI";

const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.branch);

  useEffect(() => {
    dispatch(getAllBranch());
  }, []);

  return (
    <Container>
      <Row>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand onClick={() => history.push("/")}>
              ASIAN Technology Solution{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-between">
              <Nav>
                <Link
                  to={"/branch"}
                  className="text-decoration-none text-secondary"
                >
                  Branch
                </Link>
              </Nav>
              <a
                type="button"
                className="text-primary"
                onClick={() => {
                  dispatch(unauthorize());
                }}
              >
                Logout
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Container>
        <Row>
          {loading ? (
            <Spinner />
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th rowSpan={2} className="v-align-middle">
                    No
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    Branch ID
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    Branch Name
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    Branch Nbr
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    LastSync
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    ScreenNo
                  </th>
                  <th rowSpan={2} className="v-align-middle">
                    LastModifiedDateTime
                  </th>
                  <th colSpan={16}>Branch Details</th>
                </tr>
                <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                  <th>DefaultCountry</th>
                  <th>AccessRole</th>
                  <th>AddressLine1</th>
                  <th>AddressLine2</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>Attention</th>
                  <th>Email</th>
                  <th>AccountName</th>
                  <th>Web</th>
                  <th>EntityUsageType</th>
                  <th>LegalName</th>
                  <th>TaxRegistrationID</th>
                  <th>ScreenNo</th>
                  <th>LastModifiedDateTime</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{el?.BranchID}</td>
                      <td>{el?.BranchName}</td>
                      <td>{el?.BranchNbr}</td>
                      <td>{el?.LastSync}</td>
                      <td>{el?.ScreenNo}</td>
                      <td>{el?.LastModifiedDateTime}</td>
                      <td>{el?.BranchDetails?.DefaultCountry}</td>
                      <td>{el?.BranchDetails?.AccessRole}</td>
                      <td>{el?.BranchDetails?.AddressLine1}</td>
                      <td>{el?.BranchDetails?.AddressLine2}</td>
                      <td>{el?.BranchDetails?.City}</td>
                      <td>{el?.BranchDetails?.Country}</td>
                      <td>{el?.BranchDetails?.State}</td>
                      <td>{el?.BranchDetails?.Attention}</td>
                      <td>{el?.BranchDetails?.Email}</td>
                      <td>{el?.BranchDetails?.AccountName}</td>
                      <td>{el?.BranchDetails?.Web}</td>
                      <td>{el?.BranchDetails?.EntityUsageType}</td>
                      <td>{el?.BranchDetails?.LegalName}</td>
                      <td>{el?.BranchDetails?.TaxRegistrationID}</td>
                      <td>{el?.BranchDetails?.ScreenNo}</td>
                      <td>{el?.BranchDetails?.LastModifiedDateTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default MainPage;
