// Save user to localStorage
export function saveUser(user) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  // Get all users
  export function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
  
  // Check if user credentials are valid
  export function authenticate(email, password) {
    const users = getUsers();
    return users.find((u) => u.email === email && u.password === password);
  }
  