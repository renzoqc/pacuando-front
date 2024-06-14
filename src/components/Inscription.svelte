<script>
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
  /** @type {{ value: string; error: boolean }} */
  const name = { value: '', error: false }
  /** @type {{ value: string; error: boolean }} */
  const mail = { value: '', error: false }
  /** @type {boolean} */
  let isLoading = false
  /** @type {string} */
  let errorMessage

  const { PUBLIC_API_URL, PUBLIC_KEY } = import.meta.env

//  409
//   {
//  "error": "Mail already exists",
//  "errorCode": "MAIL_ALREADY_EXISTS"
// }

//  400
// {
//   "error": "Could not save user",
//   "errorCode": "COULD_NOT_SAVE"
// }

  async function submitHandler() {
    if (isLoading) return
    if (!validateInputs()) return

    isLoading = true

    const body = JSON.stringify({
      name: name.value,
      mail: mail.value,
      sector: 'desconocido',
      lastName: 'desconocido'
    })

    const options = {
      body,
      method: 'POST',
      headers: {
        secret: PUBLIC_KEY,
        'Content-Type': 'application/json'
      }
    }

    try {
      await fetch(PUBLIC_API_URL, options)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading = false
    }
  }

  function validateInputs() {
    name.error = false
    mail.error = false
    errorMessage = ''

    if (!name.value || !mail.value) {
      !name.value ? name.error = true : null
      !mail.value ? mail.error = true : null
      errorMessage = 'Ambos campos son obligatorios'
      return false
    }

    if (!mail.value.match(EMAIL_REGEX)) {
      mail.error = true
      errorMessage = 'No es un correo válido'
      return false
    }

    return true
  }
</script>

<form class="grid w-full max-w-sm justify-items-center gap-y-4 rounded-lg bg-white p-8 text-black">
  <input
    type="text"
    placeholder="Nombre"
    bind:value={name.value}
    class:border-error={name.error}
    class:border-light-gray={!name.error}
    class="w-full max-w-[24rem] rounded-lg border px-4 py-3"
  />
  <input
    type="text"
    placeholder="Email"
    bind:value={mail.value}
    class:border-error={mail.error}
    class:border-light-gray={!mail.error}
    class="w-full max-w-[24rem] rounded-lg border px-4 py-3"
  />

  <span class="block text-sm font-semibold text-error" class:invisible={!errorMessage}>{errorMessage}</span>

  <button
    class="mx-auto w-max rounded-2xl border border-primary bg-primary px-4 py-3 font-bold text-white hover:scale-105 active:scale-95"
    on:click|preventDefault={submitHandler}
  >
    ¡Regístrate ahora!
  </button>
</form>
