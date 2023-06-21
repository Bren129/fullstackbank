import { useEffect, useState } from "react";
import {
    Navbar,
    Nav,
    Container,
    OverlayTrigger,
    Popover,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/navbar.css";
import bankLogo from '../images/bank.png';

const PopoverStyle = {
    backgroundColor: "#b439b8b3",
    borderRadius: ".5rem",
};

export const NavBar = () => {
    const [title, setTitle] = useState("Home");

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        document.title = title;
    }, [title, user]);

    return (
        <Navbar
            collapseOnSelect
            id="navbar"
            expand="md"
            className="sticky-top navbar"
            style={{ backgroundColor: "#CBC3E3" }}
        >
            <Container>
                <Navbar.Brand>
                <h3>
                    <img
                        src={bankLogo}
                        alt="Bank Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Bank of Meyer
                </h3>
                </Navbar.Brand>
                <Navbar.Toggle
                    className="navbar-toggler fw-bolder text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                />
                <Navbar.Collapse id="collapse navbar-collapse">
                    <Nav className="me-auto navbar-collapse justify-content-end">
                        <OverlayTrigger
                            placement="bottom"
                            trigger={["hover", "focus"]}
                            overlay={
                                <Popover
                                    id="popover-basic"
                                    style={PopoverStyle}
                                >
                                    <Popover.Body>
                                        Go to home page.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Nav.Link
                                onClick={() => {
                                    setTitle("Home");
                                }}
                                href="/"
                            >
                                Home
                            </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            trigger={["hover", "focus"]}
                            overlay={
                                <Popover
                                    id="popover-basic"
                                    style={PopoverStyle}
                                >
                                    <Popover.Body>
                                        Sign up to a new account.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Nav.Link
                                onClick={() => {
                                    setTitle("Sign Up");
                                }}
                                href="/account"
                            >
                                Sign up
                            </Nav.Link>
                        </OverlayTrigger>
                        {user ? (
                            <>
                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Deposit funds into your account.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Deposit");
                                        }}
                                        href="/deposit"
                                    >
                                        Deposit
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Withdraw funds from your account.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Withdraw");
                                        }}
                                        href="/withdraw"
                                    >
                                        Withdraw
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Check your current balance.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("Balance");
                                        }}
                                        href="/balance"
                                    >
                                        Balance
                                    </Nav.Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="bottom"
                                    trigger={["hover", "focus"]}
                                    overlay={
                                        <Popover
                                            id="popover-basic"
                                            style={PopoverStyle}
                                        >
                                            <Popover.Body>
                                                Check your user information
                                                regarding your account.
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Nav.Link
                                        onClick={() => {
                                            setTitle("All Data");
                                        }}
                                        href="/userdata"
                                    >
                                        User Info
                                    </Nav.Link>
                                </OverlayTrigger>
                            </>
                        ) : (
                            <></>
                        )}
                        {user ? (
                            <OverlayTrigger
                                placement="bottom"
                                trigger={["hover", "focus"]}
                                overlay={
                                    <Popover
                                        id="popover-basic"
                                        style={PopoverStyle}
                                    >
                                        <Popover.Body>Log out.</Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link
                                    onClick={() => {
                                        setTitle("Log In");
                                    }}
                                    href="/login"
                                >
                                    Log Out
                                </Nav.Link>
                            </OverlayTrigger>
                        ) : (
                            <OverlayTrigger
                                placement="bottom"
                                trigger={["hover", "focus"]}
                                overlay={
                                    <Popover
                                        id="popover-basic"
                                        style={PopoverStyle}
                                    >
                                        <Popover.Body>
                                            Log in to an existing account.
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link
                                    onClick={() => {
                                        setTitle("Log In");
                                    }}
                                    href="/login"
                                >
                                    Log In
                                </Nav.Link>
                            </OverlayTrigger>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};