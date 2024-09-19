function validateEmail(email) {
  const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return re.test(String(email).toLowerCase());
}

function validateForm(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let valid = true;

  document.getElementById('emailError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';
  document.getElementById('confirmPasswordError').style.display = 'none';

  if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Format email tidak valid.';
    document.getElementById('emailError').style.display = 'block';
    valid = false;
  }

  if (password.length < 8) {
    document.getElementById('passwordError').textContent = 'Password harus terdiri dari minimal 8 karakter.';
    document.getElementById('passwordError').style.display = 'block';
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Password dan konfirmasi password tidak cocok.';
    document.getElementById('confirmPasswordError').style.display = 'block';
    valid = false;
  }

  if (valid) {
    const successMessageElement = document.getElementById('successMessage');
    let countdown = 5; // Countdown dalam detik
    
    successMessageElement.textContent = `Pendaftaran Berhasil. Halaman akan di-refresh dalam ${countdown} detik.`;
    
    const intervalId = setInterval(() => {
      countdown--;
      successMessageElement.textContent = `Pendaftaran Berhasil. Halaman akan di-refresh dalam ${countdown} detik.`;
      
      if (countdown <= 0) {
        clearInterval(intervalId);
        window.location.reload();
      }
    }, 1000); // Update countdown setiap detik
  }
  

  return false;
}
