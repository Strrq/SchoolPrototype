function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      detectRole(user.email);
    })
    .catch((err) => alert("Register error: " + err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      detectRole(user.email);
    })
    .catch((err) => alert("Login error: " + err.message));
}

function detectRole(email) {
  let role = "unknown";
  email = email.toLowerCase();
  if (email.includes("student")) {
    role = "student";
    window.location.href = "student.html";
  } else if (email.includes("parent")) {
    role = "parent";
    window.location.href = "parent.html";
  } else if (email.includes("teacher")) {
    role = "teacher";
    window.location.href = "teacher.html";
  } else if (email.includes("admin")) {
    role = "admin";
    window.location.href = "admin.html";
  } else {
    alert("Unknown role");
  }
  localStorage.setItem("userRole", role);
}