<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <div v-if="notification.visible" :class="['notification-bar', notification.type]">
        {{ notification.message }}
      </div>
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
            <input id="password" v-model="form.password" type="password" required />
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
import { useRouter } from 'vue-router'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()
const emit = defineEmits(['close'])

const form = reactive({
  fullName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  recaptchaToken: null
})

const notification = reactive({
  visible: false,
  message: '',
  type: ''
})

const showNotification = (message, type) => {
  notification.visible = true
  notification.message = message
  notification.type = type
  setTimeout(() => {
    notification.visible = false
  }, 4000)
}

const isSubmitting = ref(false)
const recaptchaContainer = ref(null)

const handleRegister = async () => {
  if (form.email !== form.confirmEmail) {
    showNotification('Los correos electrónicos no coinciden.', 'error')
    return
  }

  if (form.password !== form.confirmPassword) {
    showNotification('Las contraseñas no coinciden.', 'error')
    return
  }

  if (!form.recaptchaToken) {
    showNotification('Por favor, confirma el reCAPTCHA.', 'error')
    return
  }

  isSubmitting.value = true
  try {
    let users = JSON.parse(localStorage.getItem('users')) || []
    if (users.some(u => u.email === form.email)) {
      showNotification('Este correo ya está registrado.', 'error')
      isSubmitting.value = false
      return
    }

    const newUser = { ...form }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    showNotification('¡Registro exitoso! ✅', 'success')

    // limpiar formulario
    form.fullName = ''
    form.email = ''
    form.confirmEmail = ''
    form.password = ''
    form.confirmPassword = ''
    form.termsAccepted = false
    form.recaptchaToken = null

    emit('close')
    router.push('/menu')
  } catch (error) {
    console.error('Error durante el registro:', error)
    showNotification('Hubo un error al registrar. ❌', 'error')
  } finally {
    isSubmitting.value = false
  }
}

window.onRecaptchaSuccess = function (token) {
  console.log('✅ reCAPTCHA completado. Token:', token)
  form.recaptchaToken = token
}

onMounted(() => {
  if (!document.getElementById('recaptcha-script')) {
    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src =
      'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  } else {
    if (window.grecaptcha && recaptchaContainer.value) {
      window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: '6LeGpbkrAAAAAP_10tvF5Rg_0keRPhYu7p5nmMbJ',
        callback: window.onRecaptchaSuccess
      })
    }
  }

  window.onRecaptchaLoad = () => {
    if (recaptchaContainer.value) {
      window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: '6LeGpbkrAAAAAP_10tvF5Rg_0keRPhYu7p5nmMbJ',
        callback: window.onRecaptchaSuccess
      })
    }
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: #ffffff !important; /* ← blanco forzado */
  border-radius: 16px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  animation: fadeIn 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}
.close-btn:hover {
  color: #111827;
}

.modal input[type="text"],
.modal input[type="email"],
.modal input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 6px 0 14px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
  transition: all 0.2s ease;
}
.modal input:focus {
  border-color: #6366f1;
  background: #fff;
  outline: none;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #374151;
}

.modal button {
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
.modal button:hover {
  background: #4f46e5;
}
.modal button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.notification-bar {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
}
.notification-bar.success {
  background: #d1fae5;
  color: #065f46;
}
.notification-bar.error {
  background: #fee2e2;
  color: #991b1b;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
