import Seeker from "../Seeker/Seeker";
import "./Header.css"

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Cartoon Voices</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li class="nav-item text-dark">
                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Publica tu anuncio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Disney</a></li>
                  <li><a class="dropdown-item" href="#">Pixar</a></li>
                  <li><a class="dropdown-item" href="#">Estudio Ghibli</a></li>
                </ul>
              </li>
            </ul>
            <Seeker />
          </div>
        </div>
      </nav>
      <div class="navbar-bottom-line"></div>
    </div>
  );
}

export default Header;