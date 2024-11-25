document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove 'active' class from all links
      document.querySelectorAll('nav a').forEach(navLink => {
          navLink.classList.remove('active');
      });
      
      // Add 'active' class to the clicked link
      this.classList.add('active');
      
      // Hide all sections first
      document.querySelectorAll('.rightbox > div').forEach(section => {
          section.classList.add('noshow');
      });

      // Show the selected section
      const activeSection = this.id;
      document.querySelector(`.${activeSection}`).classList.remove('noshow');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Load the saved profile image on the profile page
  const savedProfileImage = localStorage.getItem('profileImage');
  if (savedProfileImage) {
      document.getElementById('profileImage').src = savedProfileImage;
  }

  // Handle profile picture change
  document.getElementById('profilePicture').addEventListener('change', function() {
      const input = this;
      const profileImage = document.getElementById('profileImage');

      const file = input.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              const imageDataUrl = e.target.result;
              profileImage.src = imageDataUrl;

              // Save the new image to localStorage
              localStorage.setItem('profileImage', imageDataUrl);
          };
          reader.readAsDataURL(file);
      }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const paymentSelect = document.getElementById('payment-method');
  const paymentInput = document.getElementById('paymentmethod');

  paymentSelect.addEventListener('change', function() {
      // Get the selected option's text
      const selectedOptionText = paymentSelect.options[paymentSelect.selectedIndex].text;

      // Update the input placeholder with the selected option
      paymentInput.placeholder = selectedOptionText;

      // Optionally, set the input value to the selected payment method
      paymentInput.value = selectedOptionText;
  });
});




document.addEventListener('DOMContentLoaded', function() {
  // Load the saved profile data on page load
  document.getElementById('name').value = localStorage.getItem('profileName') || '';
  document.getElementById('age').value = localStorage.getItem('profileAge') || '';
  document.getElementById('gender').value = localStorage.getItem('profileGender') || '';
  document.getElementById('email').value = localStorage.getItem('profileEmail') || '';
  document.getElementById('password').value = localStorage.getItem('profilePassword') || '';
});

// Function to save profile changes based on the field
function saveProfile(field) {
  let value;

  // Get the value of the corresponding input field
  switch (field) {
      case 'name':
          value = document.getElementById('name').value;
          localStorage.setItem('profileName', value); // Save name
          break;
      case 'age':
          value = document.getElementById('age').value;
          localStorage.setItem('profileAge', value); // Save age
          break;
      case 'gender':
          value = document.getElementById('gender').value;
          localStorage.setItem('profileGender', value); // Save gender
          break;
      case 'email':
          value = document.getElementById('email').value;
          localStorage.setItem('profileEmail', value); // Save email
          break;
      case 'password':
          value = document.getElementById('password').value;
          localStorage.setItem('profilePassword', value); // Save password
          break;
      default:
          console.log('Invalid field');
          return;
  }

  // Optional: Show a confirmation message
  alert(`${field.charAt(0).toUpperCase() + field.slice(1)} saved!`);
}


function savePayment() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const billingAddress = document.getElementById('billingAddress').value;
  const zipcode = document.getElementById('zipcode').value;
  const billingHistory = document.getElementById('billingHistory').value;

  console.log(`Saved Payment Info: ${paymentMethod}, ${billingAddress}, ${zipcode}, ${billingHistory}`);
  // Implement saving logic here
}

function saveSubscription() {
  const paymentDate = document.getElementById('paymentDate').value;
  const nextCharge = document.getElementById('nextCharge').value;
  const huluPlan = document.getElementById('huluPlan').value;
  const addons = document.getElementById('addons').value;
  const monthlyTotal = document.getElementById('monthlyTotal').value;

  console.log(`Saved Subscription Info: ${paymentDate}, ${nextCharge}, ${huluPlan}, ${addons}, ${monthlyTotal}`);
  // Implement saving logic here
}

function savePrivacy() {
  const emailNotifications = document.getElementById('emailNotifications').value;
  const privacySettings = document.getElementById('privacySettings').value;

  console.log(`Saved Privacy Info: ${emailNotifications}, ${privacySettings}`);
  // Implement saving logic here
}

// Add your existing JavaScript for section switching here...

function goBack() {
  window.history.back();  // This will navigate to the previous page in browser history
}
