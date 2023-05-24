document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
  
    restoreFormData();
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      if (!validateEmail(email)) {
        // Emailul este invalid
        alert('Adresa de e-mail este invalidă!');
        return;
      }
  
      if (!validatePhone(phone)) {
        // Numărul de telefon este invalid
        alert('Numărul de telefon este invalid!');
        return;
      }
  
      saveFormData(name, surname, email, phone, message);
      clearForm();
  
      setTimeout(function() {
        submitButton.textContent = 'Trimite';
        submitButton.disabled = false;
      }, 5000);
  
      submitButton.textContent = 'Formular transmis';
      submitButton.disabled = true;
    });
  });
  
  function saveFormData(name, surname, email, phone, message) {
    const formData = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      message: message
    };
  
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData);
  }
  
  function restoreFormData() {
    if (localStorage.getItem('formData')) {
      const jsonData = localStorage.getItem('formData');
      const formData = JSON.parse(jsonData);
  
      document.getElementById('name').value = formData.name;
      document.getElementById('surname').value = formData.surname;
      document.getElementById('email').value = formData.email;
      document.getElementById('phone').value = formData.phone;
      document.getElementById('message').value = formData.message;
    }
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }
  