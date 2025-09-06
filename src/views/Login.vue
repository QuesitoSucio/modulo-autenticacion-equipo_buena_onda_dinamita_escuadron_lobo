<template>
  <div class="contenedor-principal">
    <div class="secciones-inicio">
      <div class="seccion-login">
        <div v-if="!usuarioAutenticado" class="formulario-login">
          <div class="campos-login">
            <h1>¡Bienvenido!</h1>
            <input type="email" v-model="correo" placeholder="Correo" autocomplete="email" @keyup.enter="iniciarSesion"
              @input="validarCorreo">
            <small v-if="errores.correo" class="ayuda-error">
              {{ errores.correo }}
            </small>
            <input type="password" v-model="contrasena" placeholder="Contraseña" @input="validarContrasena"
              @keyup.enter="iniciarSesion">
          </div>
          <small v-if="errores.contrasena" class="ayuda-error">
            {{ errores.contrasena }}
          </small>
          <div class="botones-login">
            <button @click="iniciarSesion">Iniciar Sesión</button>
            <button @click="crearCuenta">Crear Cuenta</button>
            <p v-if="mensajeLogin" :class="{ 'mensaje-error': esError, 'mensaje-exito': !esError }">
              {{ mensajeLogin }}
            </p>
          </div>
        </div>

        <div v-else class="info-usuario">
          <h3>¡Bienvenido {{ correoActual }}!</h3>
          <button @click="cerrarSesion">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const usuarioAutenticado = ref(false);
const correoActual = ref('');
const correo = ref('');
const contrasena = ref('');
const mensajeLogin = ref('');
const esError = ref(true);
const errores = ref({ correo: "", contrasena: "" })
const maxIntentos = 3;
const tiempoBloqueo = 60 * 1000;

function validarEmail(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function validarCorreo() {
  if (!correo.value) {
    errores.value.correo = "El correo es obligatorio";
  } else if (!validarEmail(correo.value)) {
    errores.value.correo = "El formato del correo no es válido";
  } else {
    errores.value.correo = "";
  }
}

function validarContrasena() {
  if (!contrasena.value) {
    errores.value.contrasena = "La contraseña es obligatoria";
  } else if (contrasena.value.trim().length < 8) {
    errores.value.contrasena = "La contraseña debe tener al menos 8 caracteres."
  } else {
    errores.value.contrasena = "";
  }
}

function cargarUsuarios() {
  const usuarios = localStorage.getItem('usuarios-ahorcado');
  return usuarios ? JSON.parse(usuarios) : {};
}

function guardarUsuarios(usuarios) {
  localStorage.setItem('usuarios-ahorcado', JSON.stringify(usuarios));
}

function cargarIntentos() {
  const intentos = localStorage.getItem("intentos-login");
  return intentos ? JSON.parse(intentos) : {};
}

function guardarIntentos(intentos) {
  localStorage.setItem("intentos-login", JSON.stringify(intentos));
}

function generarToken() {
  return btoa(`${correo.value}-${Date.now()}-${Math.random()}`);
}

function iniciarSesion() {
  validarCorreo();
  validarContrasena();

  if (errores.value.correo || errores.value.contrasena) {
    mensajeLogin.value = "Por favor corrige los errores antes de continuar";
    esError.value = true;
    return;
  }

  const usuarios = cargarUsuarios();
  const intentos = cargarIntentos();

  const registro = intentos[correo.value] || { contador: 0, bloqueadoHasta: null };

  if (registro.bloqueadoHasta && Date.now() < registro.bloqueadoHasta) {
    const segundosRestantes = Math.ceil((registro.bloqueadoHasta - Date.now()) / 1000);
    mensajeLogin.value = `Cuenta bloqueada. Intenta de nuevo en ${segundosRestantes} segundos.`;
    esError.value = true;
    return;
  }

  const usuario = usuarios[correo.value];

  if (usuario && usuario.contrasena === contrasena.value) {
    usuarioAutenticado.value = true;
    correoActual.value = correo.value;

    const token = generarToken(correo.value);

    localStorage.setItem('token', token);
    localStorage.setItem('sesion-activa', JSON.stringify({ correo: correo.value }));

    mensajeLogin.value = '¡Bienvenido de vuelta!';
    esError.value = false;

    intentos[correo.value] = { contador: 0, bloqueadoHasta: null };
    guardarIntentos(intentos);

    correo.value = '';
    contrasena.value = '';

    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);

  } else {
    registro.contador++;

    if (registro.contador >= maxIntentos) {
      registro.bloqueadoHasta = Date.now() + tiempoBloqueo;
      mensajeLogin.value = `Has superado el máximo de intentos. Cuenta bloqueada por ${tiempoBloqueo / 1000} segundos.`;
    } else {
      mensajeLogin.value = `Correo o contraseña incorrectos. Intento ${registro.contador} de ${maxIntentos}.`;
    }

    esError.value = true;
    intentos[correo.value] = registro;
    guardarIntentos(intentos);

  }
}

function crearCuenta() {
  if (!correo.value || !contrasena.value) {
    mensajeLogin.value = 'Por favor completa todos los campos';
    esError.value = true;
    return;
  }

  const usuarios = cargarUsuarios();

  if (usuarios[correo.value]) {
    mensajeLogin.value = 'Este correo ya está registrado';
    esError.value = true;
    return;
  }

  usuarios[correo.value] = { contrasena: contrasena.value };

  guardarUsuarios(usuarios);

  mensajeLogin.value = 'Cuenta creada exitosamente. Ahora puedes iniciar sesión.';
  esError.value = false;

  correo.value = '';
  contrasena.value = '';
}

function cerrarSesion() {
  usuarioAutenticado.value = false;
  correoActual.value = '';
  localStorage.removeItem('sesion-activa');
  mensajeLogin.value = '';
  router.push('/');
}

onMounted(() => {
  const sesion = JSON.parse(localStorage.getItem('sesion-activa'));
  if (sesion && sesion.token) {
    usuarioAutenticado.value = true;
    correoActual.value = sesion.correo;
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Luckiest Guy', cursive;
}

.contenedor-principal {
  background: linear-gradient(135deg, #9669FDFF, #031A38FF);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.secciones-inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  max-width: 1200px;
  gap: 4rem;
  flex: 1;
  max-height: 60vh;
  margin-bottom: 3rem;
}

.seccion-login,
.selector-personaje {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  align-self: stretch;

}

.formulario-login,
.info-usuario,
.selector-personaje {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  padding: 2rem;
  flex: 1;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  width: 70%;
  box-shadow: 10px 4px 6px rgba(0, 0, 0, 0.2);

}

.campos-login {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 90%;
  margin-bottom: 1.5rem;
}

.campos-login input {
  padding: 1.2rem;
  border: 2px solid #2A0250FF;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #000000;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.botones-login {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.botones-login button {
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.mensaje-error {
  color: #ff6b6b;
  margin-top: 1rem;
  font-size: 1.5rem;
}

.mensaje-exito {
  color: #55c57a;
  margin-top: 1rem;
  font-size: 1.5rem;
}

button {
  background: linear-gradient(135deg, #9669FDFF, #031A38FF);
  border: 2px solid #031A38FF;
  border-radius: 12px;
  color: #fff;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 20px rgba(250, 190, 37, 0.3);
  text-transform: uppercase;
}
</style>
