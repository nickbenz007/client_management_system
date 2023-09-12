import Logo from "../components/assets/mgm_sys_logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light shadow rounded">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex justify-centent-center align-items-center p-2">
            <img
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
              }}
              src={Logo}
              alt="Logo"
              className="mx-4 img-thumbnail rounded-circle"
            />
            <p className="text-center fs-3 fw-bold">Client Management System</p>
          </div>
        </a>
      </div>
    </nav>
  );
}
