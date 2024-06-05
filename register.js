document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      console.log("näytä")

      const usernameInput = document.getElementById('username');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      // Check if any of the input fields are empty
      if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
          alert('Fill in all input fields before registering.');
          return;
      }

      const url = 'http://fisuversio2.swedencentral.cloudapp.azure.com/api/users';
      const data = {
          username: usernameInput.value,
          password: passwordInput.value,
          email: emailInput.value,
      };
      console.log("data", data)
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      };

      try {
          const response = await fetch(url, options);
          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }
          const responseData = await response.json();
          console.log(responseData);
          // Redirect user to another page after successful registration
          window.location.href = 'index.html'; // Adjust the URL as needed
      } catch (error) {
          console.error('Error:', error);
      }
  });
});
