document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('responseMessage').innerText = data.message;
      // Si el registro es exitoso, puedes redirigir a validationcode.html con el ID de usuario
      localStorage.setItem('usrId', data.userData.usrId); // Guardamos el ID de usuario en localStorage
      window.location.href = 'validationcode.html';
    } else {
      document.getElementById('responseMessage').innerText = data.error || 'Ocurrió un error al registrar el usuario.';
    }

  } catch (error) {
    document.getElementById('responseMessage').innerText = 'Error al conectar con el servidor.';
  }
});