function clearValidation(
  emailR,
  emailI,
  passwordR,
  emailFeedback,
  passwordFeedback
) {
  emailR.classList.remove('d-block');
  emailI.classList.remove('d-block');
  passwordR.classList.remove('d-block');

  emailFeedback.style.display = 'none';
  passwordFeedback.style.display = 'none';
}

function onLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const email_required = document.getElementById('email_required');
  const email_invalid = document.getElementById('email_invalid');
  const password_required = document.getElementById('password_required');
  const emailFeedback = document.querySelector(
    '.invalid-feedback.email_feedback'
  );
  const passwordFeedback = document.querySelector(
    '.invalid-feedback.password_feedback'
  );

  clearValidation(
    email_required,
    email_invalid,
    password_required,
    emailFeedback,
    passwordFeedback
  );

  if (email === '') {
    emailFeedback.style.display = 'block';
    email_required.classList.add('d-block');
    return;
  }

  if (email !== '') {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^</>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = pattern.test(email);
    if (!res) {
      emailFeedback.style.display = 'block';
      email_invalid.classList.add('d-block');
      return;
    }
  }

  if (password === '' || password.length === 0) {
    console.log('password');
    passwordFeedback.style.display = 'block';
    password_required.classList.add('d-block');
    return;
  }
}

//
