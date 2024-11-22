export function login(email, password) {
  if (email == 'admin@admin.com' && password == 'admin') {
    return 'lit-token';
  }
  return false; // Asumiendo que el backend devuelve un token
}