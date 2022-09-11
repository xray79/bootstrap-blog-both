import Link from "next/link";
import Router from "next/router";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    Router.push("/");
  };

  return (
    <div>
      <>
        <NavbarBs bg="dark" variant="dark">
          <Container>
            <Link href="/">
              <NavbarBs.Brand href="/" className="me-auto">
                Blog
              </NavbarBs.Brand>
            </Link>
            <Nav>
              <Nav.Item className="me-3">
                <Link href="/posts">
                  <Nav.Link href="/posts">Posts</Nav.Link>
                </Link>
              </Nav.Item>
              {user ? (
                <>
                  <Nav.Item className="me-3">
                    <Link href="/posts">
                      <Button href="/posts" variant="primary">
                        Create +
                      </Button>
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Button variant="danger" onClick={onLogout}>
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item className="me-3">
                    <Link href="/login">
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link href="/register">
                      <Nav.Link href="/register">Register</Nav.Link>
                    </Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Container>
        </NavbarBs>
      </>
    </div>
  );
};
export default Navbar;
