<template>
  <div class="register-container">
    <h2>Crear cuenta</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="fullName">Nombre completo</label>
        <input id="fullName" v-model="form.fullName" type="text" required />
        <small v-if="errors.fullName" class="error">{{ errors.fullName }}</small>
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input id="email" v-model="form.email" type="email" required />
        <small v-if="errors.email" class="error">{{ errors.email }}</small>
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input id="password" v-model="form.password" type="password" required />
        <small v-if="errors.password" class="error">{{ errors.password }}</small>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmar contraseña</label>
        <input id="confirmPassword" v-model="form.confirmPassword" type="password" required />
        <small v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</small>
      </div>

      <div class="form-group checkbox-group">
        <input id="terms" type="checkbox" v-model="form.termsAccepted" required />
        <label for="terms">Acepto los <a href="#">términos y condiciones</a></label>
        <small v-if="errors.termsAccepted" class="error">{{ errors.termsAccepted }}</small>
      </div>

      <div class="form-group">
        <div ref="recaptchaContainer"></div>
        <small v-if="errors.recaptcha" class="error">{{ errors.recaptcha }}</small>
      </div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Registrando...' : 'Registrarme' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Estado del formulario
const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  recaptchaToken: null
});

// Lo de los errores
const errors = reactive({});
const isSubmitting = ref(false);
const recaptchaContainer = ref(null);

// Logica de validacion
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key]);
  
  let isValid = true;

  if (!form.fullName.trim()) {
    errors.fullName = 'El nombre completo es obligatorio.';
    isValid = false;
  }
  if (!validateEmail(form.email)) {
    errors.email = 'Formato de correo inválido.';
    isValid = false;
  }
  if (!validatePassword(form.password)) {
    errors.password = 'Debe tener mínimo 8 caracteres, mayúscula, minúscula, número y símbolo.';
    isValid = false;
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden.';
    isValid = false;
  }
  if (!form.termsAccepted) {
    errors.termsAccepted = 'Debes aceptar los términos y condiciones.';
    isValid = false;
  }
  if (!form.recaptchaToken) {
    errors.recaptcha = 'Por favor, confirma el reCAPTCHA.';
    isValid = false;
  }

  return isValid;
};

// para manejar el envío del formulario
const handleRegister = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  
  try {
    // obtener usuarios previos del localStorage y tambien si ya existe 
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.email === form.email)) {
      errors.email = 'Este correo ya está registrado.';
      isSubmitting.value = false;
      return;
    }

    const newUser = {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
      termsAccepted: form.termsAccepted,
      recaptchaToken: form.recaptchaToken
    };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    console.log('Registro exitoso:', newUser);
    alert('¡Registro exitoso! ✅');

    form.fullName = '';
    form.email = '';
    form.password = '';
    form.confirmPassword = '';
    form.termsAccepted = false;
    form.recaptchaToken = null;

  } catch (error) {
    console.error('Error de red o inesperado:', error);
    alert('Hubo un error al registrar. Inténtalo de nuevo. ❌');
  } finally {
    isSubmitting.value = false;
  }
};

// Cargar e inicializar reCAPTCHA al montar el componente, no me cambies el sitekey pls
onMounted(() => {
  if (window.grecaptcha) {
    window.grecaptcha.ready(() => {
      window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: '6LeGpbkrAAAAAP_10tvF5Rg_0keRPhYu7p5nmMbJ',
        callback: (token) => {
          form.recaptchaToken = token;
          delete errors.recaptcha;
        }
      });
    });
  }
});
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  margin-right: 8px;
}

.error {
  color: #d9534f;
  font-size: 0.8em;
  margin-top: 5px;
  display: block;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
