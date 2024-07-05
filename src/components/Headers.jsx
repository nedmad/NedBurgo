import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <div id="container-fluid" className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://images.vexels.com/media/users/3/136310/isolated/preview/d1eae9198d7a766247d7cf52ac43fb73-hamburgueria-com-logotipo-fast-food-by-vexels.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/cardapio-listagem"}
              >
                Cardapio
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
