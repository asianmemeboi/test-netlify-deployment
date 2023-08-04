import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitSample() {
  return (
    <>
      <style type="text/css">
        {`
          .btn-login {
            background: linear-gradient(to right, darkblue, aqua);
            margin-top: 20px;
            margin-bottom: 40px;
            color: white;
            font-weight: bold;
          }

          .btn-signup {
            background: linear-gradient(to right, darkblue, aqua);
            margin-top: 5px;
            color: white;
            font-weight: bold;
          }
        `}
      </style>
      <div
        style={{
          backgroundImage: `linear-gradient(darkblue, aqua)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "95vh",
        }}
      ></div>

      <div
        style={{
          backgroundColor: "white",
          marginTop: "-80vh",
          marginLeft: "15vw",
          width: "70vw",
          height: "70vh",
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {" "}
        <h1 style={{ textAlign: "center" }}> Login </h1>
        <Form>
          <Form.Group style={{ paddingBottom: "30px" }}>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your username"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Type your password"
              aria-describedby="passwordHelp"
            ></Form.Control>
            <Form.Text id="passwordHelp" muted>
              Your password must be 8-20 characters long.
            </Form.Text>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="login">Login</Button>
          </div>
        </Form>
        <p style={{ textAlign: "center" }}> Don't have an account yet? </p>
        <div className="d-grid gap-2">
          <Button variant="signup">Sign-Up</Button>
        </div>
      </div>
    </>
  );
}

export default SubmitSample;