document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for "Book Now" button
  const bookNowBtn = document.querySelector('.cta');
  const bookingForm = document.querySelector('.booking-form');

  if (bookNowBtn && bookingForm) {
    bookNowBtn.addEventListener('click', () => {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Booking form validation
  const form = document.querySelector('.booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('#name').value.trim();
      const contactNo = form.querySelector('#contactno').value.trim();
      const pickup = form.querySelector('#pickup').value.trim();
      const destination = form.querySelector('#destination').value.trim();
      const datetime = form.querySelector('#datetime').value;

      // Validate name
      if (!name) {
        alert('Please enter your name.');
        e.preventDefault();
        return;
      }

      // Validate contact number (10-digit Indian number)
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(contactNo)) {
        alert('Please enter a valid 10-digit Indian contact number.');
        e.preventDefault();
        return;
      }

      // Validate pickup
      if (!pickup) {
        alert('Please enter your pickup location.');
        e.preventDefault();
        return;
      }

      // Validate destination
      if (!destination) {
        alert('Please enter your destination.');
        e.preventDefault();
        return;
      }

      // Validate date & time (not in past)
      if (!datetime) {
        alert('Please select date and time.');
        e.preventDefault();
        return;
      }
      const selectedDate = new Date(datetime);
      const now = new Date();
      if (selectedDate < now) {
        alert('Please select a future date and time.');
        e.preventDefault();
        return;
      }
    });
  }
});
