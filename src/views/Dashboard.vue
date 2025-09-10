<template>
  <div class="contenido">

    <div class="encabezado">
      <h1 class="titulo-saludo">
        Good morning, <span>Filip</span>
      </h1>
      <input type="search" class="barra-busqueda" placeholder="Search for Projects">
    </div>

    <div class="grid-estadisticas">

      <div class="tarjeta-ganancias">
        <img src="../assets/linea.png" alt="linea" class="linea">
        <div class="contenido-tarjeta">
          <h2 class="titulo-tarjeta">Earnings</h2>
          <p class="tarjeta-valor">€8,350</p>
          <span class="tarjeta-subtitulo1">
            +10% since last month
          </span>
        </div>
      </div>

      <div class="tarjetas-estadisticas">
        <div class="tarjeta-ranking">
          <div class="valor-ranking">98</div>
          <div class="contenido-tarjeta">
            <h2 class="titulo-tarjetas">Rank</h2>
            <p class="tarjeta-subtitulo">In top 30%</p>
          </div>
        </div>

        <div class="tarjeta-proyectos">
          <div class="proyectos-info">
            <div class="valor-proyectos">32</div>
            <div class="contenido-interno">
              <h2 class="titulo-tarjetas">Projects</h2>
              <p class="tarjeta-subtitulo">8 this month</p>
            </div>
          </div>
          <div class="tags-proyectos">
            <span>mobile app</span>
            <span>branding</span>
          </div>
        </div>

      </div>

      <div class="seccion-lista-proyectos">
        <h2>Your Projects</h2>
        <div class="proyectos-lista">
          <img src="../assets/avatar1.jpg" alt="avatar1" class="avatar">
          <div class="proyectos-informacion">
            <span>Logo design for Bakery</span>
            <p>1 day remainig</p>
          </div>
        </div>
        <div class="proyectos-lista">
          <img src="../assets/avatar2.jpg" alt="avatar2" class="avatar">
          <div class="proyectos-informacion">
            <span>Personal branding project</span>
            <p>5 days remainig</p>
          </div>
        </div>
        <div class="ver-proyectos">
          <span>See all projects</span>
        </div>
      </div>
    </div>

    <div class="grid-secciones">

      <div class="seccion-izquierda">

        <h2>Recent Invoices</h2>
        <div class="seccion-facturas">
          <div class="lista-facturas">
            <div class="informacion">
              <img src="../assets/avatar3.jpeg" alt="avatar3" class="avatar">
              <div class="nombre">
                <span>Alexander Williams</span>
                <p>JQ Holdings</p>
              </div>
              <div class="estado01">
                <p>Paid</p>
              </div>
              <div class="valor01">
                <span>€ 1,200.87</span>
              </div>
            </div>
            <div class="lista-facturas">
              <div class="informacion">
                <img src="../assets/avatar4.jpg" alt="avatar4" class="avatar">
                <div class="nombre">
                  <span>John Philips</span>
                  <p>Inchor Techs</p>
                </div>
                <div class="estado02">
                  <p>Late</p>
                </div>
                <div class="valor02">
                  <span>€ 12,989.88</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="seccion-clientes">
          <img src="../assets/icono1.png" alt="Icono Hashtag" class="icono1">
          <div class="texto-clientes">
            <h2>Engage with clients</h2>
            <p>Join slack channel!</p>
          </div>
          <button class="boton-unirse">Join now</button>
        </div>
      </div>

      <div class="seccion-derecha">

        <h2>Recommended Project</h2>
        <div class="seccion-proyecto-recomendado">
          <div class="nombre-recomendado">
            <img src="../assets/avatar5.jpeg" alt="avatar5" class="avatar">
            <div class="nombre">
              <span>Tomas Martin</span>
              <p>Updated 10m ago</p>
            </div>
            <button class="boton-diseño">Design</button>
          </div>
          <div class="contenido-seccion">
            <p>
              Need a designer to form branding essentials for my bussiness.
            </p>
            <span>
              Looking for a talented brand designer to create all the branding materials for my new startup.
            </span>
            <div class="precio">
              <p>€ <span>8,700</span>/month</p>
              <button class="boton-recomendado">Full time</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>
.contenido {
  padding: 1.5rem 4rem 1.5rem 4rem;
  background: linear-gradient(to bottom, white, #ededed);
  border-radius: 0 20px 20px 0;
  width: 100%;
}

.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
}

.titulo-saludo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #242944;
}

.titulo-saludo span {
  color: #A09F9FFF;
}

.barra-busqueda {
  position: relative;
  width: 250px;
  background-color: #f1f8f9;
  border: 0;
  padding: 15px 0 15px 50px;
  border-radius: 5px;
  background-image: url('@/assets/lupa.png');
  background-repeat: no-repeat;
  background-position: 20px center;
  background-size: 16px;
}

.espacio-busqueda {
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  background-color: #f7f9fa;
  font-size: 0.9rem;
}

.espacio-busqueda::placeholder {
  color: #a0a0a0;
}

.grid-estadisticas {
  display: grid;
  grid-template-columns: 1fr 1fr 1.8fr;
  gap: 2rem;
  margin-top: 43px;
}

.tarjeta-ganancias,
.tarjeta-ranking,
.tarjeta-proyectos {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;

}

.tarjeta-proyectos {
  display: flex;
  flex-direction: column;
}

.proyectos-info {
  display: flex;
  align-items: center;
}

.proyectos-informacion {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.proyectos-informacion span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #242944;
  padding-top: 5px;
}

.proyectos-informacion p {
  font-size: 0.8rem;
  color: #8a90a6;
  margin-top: 5px;
}

.ver-proyectos {
  display: flex;
  justify-content: end;
  color: #575b68;
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 0;
  padding-right: 20px;
  padding-top: 10px;
  cursor: pointer;
}

.tarjeta-ganancias {
  display: flex;
  flex-direction: column;
  background-color: #6042ef;
  color: white;
  justify-content: flex-start;
}

.cuadro-icono {
  width: 50px;
  height: 50px;
  margin-right: 1.5rem;
  stroke: white;
}

.contenido-tarjeta {
  display: flex;
  flex-direction: column;
}

.titulo-tarjeta {
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  color: white;
  padding-bottom: 10px;
}

.titulo-tarjetas {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  color: black;
  padding-bottom: 0;
  padding-top: 10px;
}

.tarjeta-valor {
  font-size: 2rem;
  font-weight: bold;
  margin: 0.2rem 0;
}

.tarjeta-subtitulo1 {
  font-size: 0.8rem;
  color: #c9cce0;
  padding: 4px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #2709bb;
  font-size: 0.75rem;
}

.tarjeta-subtitulo {
  font-size: 0.8rem;
  color: #8a90a6;
  padding-top: 1px;
  margin-top: 10px;
}

.tarjetas-estadisticas {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.tarjeta-ranking {
  height: 40%;
}

.tarjeta-ranking,
.tarjeta-proyectos {
  background-color: white;
}

.valor-ranking,
.valor-proyectos {
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  background-color: #6042ef;
  margin-right: 1rem;
  font-family: 'Montserrat', sans-serif;
  padding: 0.7rem 0.7rem;
  border-radius: 13px;
}

.valor-ranking {
  margin-left: 10px;
}

.tags-proyectos span {
  background-color: #e6e9f5;
  color: #6042ef;
  padding-left: 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.grid-secciones {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin-top: 60px;
}

.seccion-izquierda,
.seccion-derecha {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.seccion-izquierda h2,
.seccion-derecha h2 {
  margin-bottom: 0;
  margin-top: 7px;
}

.seccion-izquierda h2 {
  font-size: 1.3rem;
  margin-top: 7px;
}

.seccion-derecha h2 {
  font-size: 1.3rem;
}

.seccion-facturas,
.seccion-clientes,
.seccion-lista-proyectos,
.seccion-proyecto-recomendado {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.seccion-facturas h2,
.seccion-clientes h2,
.seccion-lista-proyectos h2,
.seccion-proyecto-recomendado h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
}

.proyectos-lista {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;
}

.lista-facturas {
  display: flex;
  flex-direction: column;
}

.informacion {
  display: grid;
  grid-template-columns: 0.1fr 3fr 0.5fr 2fr;
  gap: 2rem;
  margin-top: 10px;
}

.informacion span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #242944;
  padding-top: 5px;
}

.informacion p {
  font-size: 0.8rem;
  color: #8a90a6;
  margin-top: 5px;
}

.estado01 p {
  background-color: rgb(176, 245, 176);
  color: rgb(14, 167, 14);
  padding: 5px 6px 5px 6px;
  font-size: 0.7rem;
  border-radius: 9px;
}

.estado02 p {
  background-color: rgb(247, 212, 212);
  color: rgb(245, 78, 78);
  padding: 5px 6px 5px 6px;
  font-size: 0.7rem;
  border-radius: 9px;
}

.valor01 {
  padding-left: 9px;
}

.icono1 {
  width: 40px;
  height: 40px;
}

.linea {
  width: 110px;
  height: 80px;
  margin-right: 50px;
}

.texto-clientes {
  padding-right: 40px;
}

.seccion-clientes {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--sidebar);
  color: white;
  align-items: center;
}

.seccion-clientes h2 {
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.seccion-clientes p {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 0.8rem;
  font-weight: 100;
  color: #b2bad1;
}

.boton-unirse {
  background-color: #6042ef;
  font-size: 0.8rem;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin: 0.5rem;
}

.nombre-recomendado {
  display: grid;
  grid-template-columns: 0.1fr 3fr 0.5fr;
  gap: 2rem;
  margin-top: 10px;
}

.nombre-recomendado span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #242944;
  padding-top: 5px;
}

.nombre-recomendado p {
  margin-top: 5px;
  color: #8a90a6;
  font-size: 0.8rem;
}

.boton-diseño {
  background-color: #6042ef;
  font-size: 0.7rem;
  color: white;
  border: none;
  padding: 0.4rem 0.7rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  margin: 0.8rem;
  margin-top: 0.5rem;
}

.contenido-seccion {
  text-align: justify;
}

.contenido-seccion p {
  font-weight: bolder;
  font-size: 0.95rem;
  line-height: 22px;
  margin-bottom: 10px;
}

.contenido-seccion span {
  font-size: 0.85rem;
  color: #8a90a6;
  ;
}

.precio {
  display: flex;
  background-color: #f1f8f9;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  height: 3.5rem;
}

.precio p {
  padding-left: 20px;
  color: #8a90a6;
  font-size: 0.8rem;
}

.precio span {
  font-weight: bold;
  font-size: 1.4rem;
  color: rgb(68, 67, 67);
}

.precio button {
  background-color: white;
  font-size: 0.7rem;
  color: gray;
  border: 1px solid gray;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bolder;
  margin: 25px;
  cursor: pointer;
}
</style>