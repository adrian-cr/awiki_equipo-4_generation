const headElement = document.getElementsByTagName("head")[0];
const bodyElement = document.getElementsByTagName("body")[0];

const cssLinksHTML = `
  <link rel="stylesheet" href="../styles/components/header.css"/>
  <link rel="stylesheet" href="../styles/components/footer.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>`;
const userHeaderHTML = `
  <header>
    <nav class="navbar navbar-expand-lg">
      <!-- nb = navbar -->
      <div class="container-fluid">
        <img class="nb-logo" src="../images/Logo_de_pagina.webp" href="#home" alt="Logo" width="100" height="24" class="logo d-inline-block align-text-top"/>
        <button class="nb-collapse-button navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon nb-collapse-button-icon"></span>
        </button>
        <!--
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        -->
        <div class="nb-main-container justify-content-end ms-auto collapse navbar-collapse" id="navbarSupportedContent">
          <form class="nb-search-form d-flex search-form mx-auto" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar restaurantes, hoteles, personas..." aria-label="Search"/>
            <button class="nb-search-button btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <div class="nb-icon-menu">
            <a class="nb-icon-menu-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" title="Amigos" width="40" height="40" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </a>
            <a class="nb-icon-menu-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" title="Notificaciones" width="36" height="36" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
              </svg>
            </a>
            <a class="nb-icon-menu-link" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" title="Perfil" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </a>
          </div>
          <div class="nb-text-menu" style="display:none">
            <a href="#" class="nb-text-menu-link">Mis Conexiones</a>
            <a href="#" class="nb-text-menu-link">Mis Notificaciones</a>
            <a href="#" class="nb-text-menu-link">Mi Perfil</a>
          </div>
        </div>
      </div>
    </nav>
  </header>`;
const nonUserHeaderHTML = `
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img class="nb-logo" src="../images/Logo_de_pagina.webp" href="#home" alt="Logo" width="100" height="24" class="logo d-inline-block align-text-top">
        <button class="nb-collapse-button navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nb-main-container justify-content-end ms-auto collapse navbar-collapse" id="navbarSupportedContent">
          <form class="nb-search-form d-flex search-form mx-auto" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar restaurantes, hoteles, personas..." aria-label="Search">
            <button class="nb-search-button btn btn-outline-success" type="submit">Buscar</button>
          </form>
          <div class="nb-text-menu nb-text-menu-nu">
            <a class="nb-text-menu-link" href="./sobreNosotros.html" title="Sobre Nosotros">Sobre Nosotros</a>
            <a class="nb-text-menu-link" href="./contacto.html" title="Contacto">Contacto</a>
            <a class="nb-text-menu-link" href="./login" title="Registrate">Registrate</a>
          </div>
        </div>
      </div>
    </nav>
  </header>`;
const footerHTML = `
<footer id="footer" class="footer text-center text-lg-start >
      <section class="Links">
        <div class="container text-left text-md-start mt-5 mb-4">
          <div class="row mt-3">
            <div class="ft-logo-container content-column d-flex justify-content-md-center justify-content-lg-start col-sm-12 col-md-3 col-lg-5 col-xl-5 mx-auto mb-4">
              <img class="ft-logo" src="../images/Logo_de_pagina.webp" alt="Logo"/>
            </div>
            <div class="ft-menu-section col-sm-4 col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 class="ft-menu-section-title">Awiki</h6>
              <hr class="ft-menu-section-rule mx-auto" />
              <p class="ft-menu-section-item">
                <a href="./contacto.html">Contacto</a>
              </p>
              <p class="ft-menu-section-item">
                <a href="./sobreNosotros.html">Sobre Nosotros</a>
              </p>
            </div>
            <div class="ft-menu-section col-sm-4 col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 class="ft-menu-section-title">Explora</h6>
              <hr class="ft-menu-section-rule mx-auto"/>
              <p class="ft-menu-section-item">
                <a href="#">Lugares</a>
              </p>
              <p class="ft-menu-section-item">
                <a href="#">Personas</a>
              </p>
            </div>
            <div class="ft-menu-section col-sm-4 col-md-3 col-lg-3 col-xl-3 mx-auto">
              <h6 class="ft-menu-section-title">Síguenos</h6>
              <hr class="ft-menu-section-rule mx-auto"/>
              <p class="ft-menu-section-item"><a href="mailto:awiki@gmail.com"><i class="fas fa-envelope"></i> awiki@gmail.com</a></p>
              <div class="ft-sm-icon-container">
                <a class="ft-sm-icon" href="#" class="me-4">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="ft-sm-icon" href="#" class="me-4">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="ft-sm-icon" href="#" class="me-4">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </footer>`;

const userPages = ["home","mi-blog", "mis-resenas", "main", "dummyUserPage"];
/* userPages.push("contacto"); */
const currentURL = window.location.href;
const splitURL = currentURL.slice(0, currentURL.indexOf(".html")).split("/");
const currentPage = splitURL[splitURL.length - 1];

window.addEventListener("load", e => {
  headElement.insertAdjacentHTML("beforeend", cssLinksHTML);
  bodyElement.insertAdjacentHTML("afterbegin", userPages.includes(currentPage) ? userHeaderHTML : nonUserHeaderHTML);
  bodyElement.insertAdjacentHTML("beforeend", footerHTML);
}

)
