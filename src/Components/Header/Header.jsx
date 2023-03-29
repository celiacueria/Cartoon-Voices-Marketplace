import Seeker from "../Seeker/Seeker";
import "./Header.css"
import logo from "../../Assets/img/Img1.png"
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img class="navbar-brand" src={logo} style={{height:"7vh", borderRadius:"0" }}/>
          <a class="navbar-brand" href="/">Cartoon Voices</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li class="nav-item text-dark">
                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/create">Publica tu anuncio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/cards">Anuncios</a>
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