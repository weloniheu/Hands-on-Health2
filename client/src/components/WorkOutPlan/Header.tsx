import "./css/Header.css";
import logo from "../../logos/small_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { logout, isGuest } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const isLoginPage = pathname === "/login";
    const isRegisterPage = pathname === "/register";

    return (
        <div className="header">
            <div className="header-title" onClick={() => navigate("/")}>
                Hands on Health
            </div>
            <div className="header-controls">
                {!isLoginPage && !isRegisterPage && (
                    <button className="logout-button-header" onClick={handleLogout}>
                        {isGuest ? "Exit Guest" : "Log Out"}
                    </button>
                )}
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>

            </div>
        </div>
    );
};

export default Header;
