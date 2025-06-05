import { useState } from "react";
import { MobileWrapper } from './MobileWrapper';
import styled from "styled-components";
import { authenticate } from "./utils";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  top: 0px;
  left: 0px;
  width: 375px;
  height: 812px;
  background: #F7F8F9 0% 0% no-repeat padding-box;
  opacity: 1;

`;

const Title = styled.h2`
  top: 40px;
  left: 20px;
  width: 188px;
  height: 69px;
  text-align: left;
  font: normal normal medium 28px/36px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 1;
`;

const Input = styled.input`
  top: 204px;
  left: 20px;
  width: 335px;
  height: 40px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  opacity: 1;
  margin-bottom: 0.75rem;
`;
const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6c63ff; /* Violet like your design */
  margin-bottom: 5px;
`;

const Button = styled.button`
   top: 321px;
  left: 20px;
  width: 335px;
  height: 46px;
  padding: 0.75rem;
  background-color: ${(props) => (props.disabled ? "#CBCBCB" : "#7C3AED")};
  color: ${(props) => (props.disabled ? "#666" : "white")};
  border: none;
  border-radius: 6px;
  opacity: 1;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;
  const navigate = useNavigate();
  
  const handleLogin = () => {
    const user = authenticate(email, password);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <MobileWrapper>
    <Wrapper>
      <Title>Sign in to your PopX account</Title>
      <div>
        <Label>Email Address</Label>
      <Input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      
      <Button onClick={handleLogin} disabled={!isFormValid}>Login</Button>
    </Wrapper>
  </MobileWrapper>

  );
}
