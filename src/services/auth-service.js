export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin@admin.com' && password === 'admin') {
        resolve({ success: true, token: 'lit-token', message: 'Login success' });
      } else {
        reject({ success: false, token: '', message: 'Invalid credentials' });
      }
    }, 2000); // Simula una espera de 2 segundos
  });
}

export function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Logout success' });
    }, 2000); // Simula una espera de 1 segundo
  });
}
