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
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  recaptchaToken: null
})

const isSubmitting = ref(false)
const recaptchaContainer = ref(null)

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    alert('Las contraseñas no coinciden.')
    return
  }

  if (!form.recaptchaToken) {
    alert('Por favor, confirma el reCAPTCHA.')
    return
  }

  isSubmitting.value = true
  try {
    let users = JSON.parse(localStorage.getItem('users')) || []

    if (users.some(u => u.email === form.email)) {//revisar existencia 
      alert('Este correo ya está registrado.')//cambiar alert
      isSubmitting.value = false
      return
    }

    const newUser = { ...form }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))//actualizar usuario

    alert('¡Registro exitoso! ✅')
    router.push('/')
    // Clear the form and close the modal after a successful registration
    form.fullName = ''
    form.email = ''
    form.password = ''
    form.confirmPassword = ''
    form.termsAccepted = false
    form.recaptchaToken = null
    emit('close')

  } catch (error) {
    alert('Hubo un error al registrar. ❌')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (window.grecaptcha) {
    window.grecaptcha.ready(() => {
      window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: '6LeLsL4rAAAAAO_LoGLI03_GLZx9nBZoIXL29fgM',
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: rgb(85, 62, 62);
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}
button {
  width: 100%;
  padding: 12px;
}
</style>
