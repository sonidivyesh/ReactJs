import React, { useState } from "react";
import logo from "./Images/logo.svg";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import Select from "react-select";
import { User } from "lucide-react";

// Category Options
const categories = [
  { value: "All Categories", label: "All Categories" },
  { value: "Milk and Dairies", label: "Milk and Dairies" },
  { value: "Wines and Alcohol", label: "Wines and Alcohol" },
  { value: "Clothing and Beauty", label: "Clothing and Beauty" },
  { value: "Pet Food and Toy", label: "Pet Food and Toy" },
  { value: "Fast food", label: "Fast food" },
  { value: "Baking material", label: "Baking material" },
  { value: "Vegetables", label: "Vegetables" },
  { value: "Fresh Seafood", label: "Fresh Seafood" },
  { value: "Noodles & Rice", label: "Noodles & Rice" },
  { value: "Ice cream", label: "Ice cream" },
];

export default function Header(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="row py-3 align-items-center">
          <div className="col-md-3">
            <div className="logo logo-width-1">
              <NavLink>
                <img src={logo} alt="img" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-right">
              <div className="search-style-2">
                <Form>
                  <Select options={categories} />
                  <span className="select2 select2-container select2-container--default select2-container--below"></span>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="user-login">
              <h6 type="button" onClick={toggle}>
                Login
              </h6>
              <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup floating>
                      <Input id="email" placeholder="Email" type="email" />
                      <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                      <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                      />
                      <Label for="password">Password</Label>
                    </FormGroup>
                    <Button color="success">Submit</Button>
                  </Form>
                </ModalBody>
              </Modal>
              <h6 type="button">Register</h6>
              <User type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
