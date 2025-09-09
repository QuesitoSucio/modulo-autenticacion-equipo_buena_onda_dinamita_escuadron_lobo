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
                <div class="contenido-tarjeta">
                    <h2 class="titulo-tarjeta">Earnings</h2>
                    <p class="tarjeta-valor">€8,350</p>
                    <span class="tarjeta-subtitulo">
                        % since last month
                    </span>
                </div>
            </div>

            <div class="tarjetas-estadisticas">
                <div class="tarjeta-ranking">
                    <div class="valor-ranking">98</div>
                    <div class="contenido-tarjeta">
                        <h2 class="titulo-tarjeta">Rank</h2>
                        <p class="tarjeta-subtitulo">In top 30%</p>
                    </div>
                </div>

                <div class="tarjeta-proyectos">
                    <div class="valor-proyectos">32</div>
                    <div class="contenido-tarjeta">
                        <h2 class="titulo-tarjeta">Projects</h2>
                        <div class="tags-proyectos">
                            <span>mobile app</span>
                            <span>branding</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="seccion-lista-proyectos">
                <h2>Your Projects</h2>
                <ul>
                    <li>
                        <div class="flex items-center gap-3">
                            <!-- <img :src="" class="avatar" /> -->
                            <span></span>
                        </div>
                        <span> days left</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="grid-secciones">

            <div class="seccion-izquierda">

                <h2>Recent Invoices</h2>
                <div class="seccion-facturas">
                    <ul>
                        <li>
                            <div class="flex items-center gap-3">
                                <!-- <img :src="" class="avatar" /> -->
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>

                            <div>
                                <p>€</p>
                                <span>

                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="seccion-clientes">
                    <h2>Engage with clients</h2>
                    <p>Join slack channel!</p>
                    <button class="boton-unirse">Join now</button>
                </div>
            </div>

            <div class="seccion-derecha">

                <h2>Recommended Project</h2>
                <div class="seccion-proyecto-recomendado">
                    <p></p>
                    <p></p>
                    <div>
                        <span>Budget: €</span>
                        <span></span>
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
}

.encabezado {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
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
    background-image: url('../assets/lupa.png');
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
    margin-bottom: 2rem;
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

.tarjeta-ganancias {
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

.tarjeta-valor {
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem 0;
}

.tarjeta-subtitulo {
    font-size: 0.8rem;
    color: #c9cce0;
    padding-top: 10px;
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
    font-size: 2rem;
    font-weight: bold;
    color: #6042ef;
    margin-right: 1rem;
}

.tags-proyectos span {
    background-color: #e6e9f5;
    color: #6042ef;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-size: 0.7rem;
    margin-right: 0.5rem;
}

.grid-secciones {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
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

.boton-unirse {
    background-color: #6042ef;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
}
</style>