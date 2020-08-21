// BOOLEAN
function isLogged(user) {
  if (user.Logged === true) {
    return true;
  } else {
    return false;
  }
}
function isLogged(user) {
  return user.Logged; // Essa avaliação retorna true ou false
}

// ARROW
const phoneIsValid = ({ phone }) => phone.length;

// OR
function getUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return "Anonymous";
  }
}

function getUserName(user) {
  return user.name || "Anonymous";
}

const getUserName = ({ name }) => name || "Anonymous";
