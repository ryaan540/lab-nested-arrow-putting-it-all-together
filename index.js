
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  function attemptLogin(passwordAttempt)  {

    attemptCount++;

    
    if (isLocked === true) {
      return "Account locked due to too many failed login attempts";
    }

    
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      isLocked = false;
      return "Login successful";
      }  else if(attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }

  if (attemptCount >= 3) {
    isLocked = true;
    return "Account locked due to too many failed login attempts";
  }
  }

  return attemptLogin;
}

module.exports = {
   ...(typeof createLoginTracker !== 'undefined'&& { createLoginTracker })
};