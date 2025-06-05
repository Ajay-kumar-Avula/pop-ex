import  { useState } from "react";
import styled from "styled-components";
import { saveUser } from "./utils";
import { useNavigate } from "react-router-dom";
import { MobileWrapper } from './MobileWrapper';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #7C3AED;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "no",
  });

  const navigate = useNavigate();

const handleSubmit = () => {
  if (form.email && form.password) {
    saveUser(form);
    alert("User registered successfully!");
    navigate("/login");
  } else {
    alert("Email and password are required.");
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <MobileWrapper>
    <Wrapper>
      <Title>Create your PopX account</Title>
      <Input name="name" placeholder="Full Name" onChange={handleChange} />
      <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <Input name="email" placeholder="Email Address" onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <Input name="company" placeholder="Company Name" onChange={handleChange} />

      <p>Are you an agency?</p>
      <RadioGroup>
        <Label>
          <input
            type="radio"
            name="isAgency"
            value="yes"
            checked={form.isAgency === "yes"}
            onChange={handleChange}
          />
          Yes
        </Label>
        <Label>
          <input
            type="radio"
            name="isAgency"
            value="no"
            checked={form.isAgency === "no"}
            onChange={handleChange}
          />
          No
        </Label>
      </RadioGroup>

      <Button onClick={handleSubmit}>Create Account</Button>
    </Wrapper>
    </MobileWrapper>
  );
}
