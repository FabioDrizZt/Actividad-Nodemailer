document.getElementById('validateForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const validationCode = document.getElementById('security-code').value;
  const usrId = localStorage.getItem('usrId'); // Obtenemos el ID de usuario guardado

  if (!usrId) {
    document.getElementById('responseMessage').innerText = 'No se pudo obtener el ID de usuario. Por favor, regístrese nuevamente.';
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ validationCode, usrId }) // Enviamos el código y el ID de usuario
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('responseMessage').innerText = data.message;
    } else {
      document.getElementById('responseMessage').innerText = data.message || 'Error al validar el usuario.';
    }

  } catch (error) {
    document.getElementById('responseMessage').innerText = 'Error al conectar con el servidor.';
  }
});