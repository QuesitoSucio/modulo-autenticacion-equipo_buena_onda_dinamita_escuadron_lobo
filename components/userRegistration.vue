<template>
  <div class="register-container">
    <h2>Crear cuenta</h2>
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

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Registrando...' : 'Registrarme' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  recaptchaToken: null
})

const isSubmitting = ref(false)

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    alert('Las contraseñas no coinciden.')
    return
  }

  try {
    // Ejecutar reCAPTCHA v3 al enviar
    const token = await window.grecaptcha.execute(
      '6LeGpbkrAAAAAP_10tvF5Rg_0keRPhYu7p5nmMbJ',
      { action: 'submit' }
    )
    form.recaptchaToken = token
  } catch (e) {
    alert('Error con reCAPTCHA ❌')
    return
  }

  if (!form.recaptchaToken) {
    alert('Por favor, confirma el reCAPTCHA.')
    return
  }

  isSubmitting.value = true
  try {
    let users = JSON.parse(localStorage.getItem('users')) || []

    if (users.some(u => u.email === form.email)) {
      alert('Este correo ya está registrado.')
      isSubmitting.value = false
      return
    }

    const newUser = { ...form }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    alert('¡Registro exitoso! ✅')
    form.fullName = ''
    form.email = ''
    form.password = ''
    form.confirmPassword = ''
    form.termsAccepted = false
    form.recaptchaToken = null
  } catch (error) {
    alert('Hubo un error al registrar. ❌')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.form-group {
  margin-bottom: 15px;
}
button {
  width: 100%;
  padding: 12px;
}
</style>
