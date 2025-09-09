<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Crear cuenta</h2>
        <button @click="$emit('close')" class="close-btn">×</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="fullName">Nombre completo</label>
            <input id="fullName" v-model="form.fullName" type="text" required />
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>
          <div class="form-group">
            <label for="confirmEmail">Confirmar correo electrónico</label>
            <input id="confirmEmail" v-model="form.confirmEmail" type="email" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input 
              id="password" 
              v-model="form.password" 
              type="password" 
              required
            />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmar contraseña</label>
            <input id="confirmPassword" v-model="form.confirmPassword" type="password" required />
          </div>
          <div class="form-group checkbox-group">
            <input id="terms" type="checkbox" v-model="form.termsAccepted" required />
            <label for="terms">Acepto los <a href="#">términos y condiciones</a></label>
          </div>
          <div class="form-group">
            <div ref="recaptchaContainer"></div>
          </div>
          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Registrando...' : 'Registrarme' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const router=useRoute()

const emit = defineEmits(['close'])

const form = reactive({
  fullName: '',
  email: '',
  confirmEmail:'',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  recaptchaToken: null
})

const isSubmitting = ref(false)
const recaptchaContainer = ref(null);
let recaptchaRendered = false;

const handleRegister = async () => {
  if (form.email !== form.confirmEmail) {
    Swal.fire({
      icon: 'error',
      title: 'Correos no coinciden',
      text: 'Verifica que ambos correos sean iguales',
      confirmButtonColor: '#0077b6'
    })
    return
  }

  if (form.password !== form.confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseñas no coinciden',
      text: 'Debes ingresar la misma contraseña en ambos campos',
      confirmButtonColor: '#0077b6'
    })
    return
  }

  isSubmitting.value = true
  try {
    let users = JSON.parse(localStorage.getItem('users')) || []

    if (users.some(u => u.email === form.email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Correo ya registrado',
        text: 'Intenta con otro correo electrónico',
        confirmButtonColor: '#0077b6'
      })
      isSubmitting.value = false
      return
    }

    const newUser = { ...form }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada correctamente',
      confirmButtonColor: '#0077b6'
    }).then(() => {
      router.push('/')
      emit('close')
    })

    form.fullName = ''
    form.email = ''
    form.confirmEmail = ''
    form.password = ''
    form.confirmPassword = ''
    form.termsAccepted = false
    form.recaptchaToken = null

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el registro',
      text: 'Hubo un problema al registrar tu cuenta',
      confirmButtonColor: '#0077b6'
    })
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (window.grecaptcha) {
    window.grecaptcha.ready(() => {
      window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: '6LeGpbkrAAAAAP_10tvF5Rg_0keRPhYu7p5nmMbJ',
        callback: (token) => {
          form.recaptchaToken = token
        }
      })
    })
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 50, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #0077b6;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.modal-header h2 {
  color: #003366;
  font-size: 1.4rem;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #003366;
  transition: transform 0.2s ease;
}
.close-btn:hover {
  color: #0077b6;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #003366;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #90e0ef;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;
}
input:focus {
  border-color: #0077b6;
  box-shadow: 0 0 4px rgba(0, 119, 182, 0.5);
}

.checkbox-group {
  display: flex;
  align-items: center;
}
.checkbox-group label {
  margin-left: 8px;
  font-size: 0.9rem;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #0077b6;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #005f8a;
}
button:disabled {
  background-color: #90e0ef;
  cursor: not-allowed;
}
</style>

