window.onload = () => {
  const form = document.querySelector('form');
  const alertBox = document.querySelector('.alert-danger');
  const paymentInputs = document.getElementsByName('paymentMethod');
  const paymentGroup = document.querySelector('.payment-methods');

  alertBox.style.display = 'none';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    const requiredFields = [
      'cardNumber',
      'cvc',
      'amount',
      'firstName',
      'lastName',
      'city',
      'state',
      'postalCode'
    ];

    requiredFields.forEach(id => {
      const input = document.getElementById(id);
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    const paymentSelected = Array.from(paymentInputs).some(radio => radio.checked);
    if (!paymentSelected) {
      isValid = false;
      paymentGroup.classList.add('border', 'border-danger', 'p-2', 'rounded');
    } else {
      paymentGroup.classList.remove('border', 'border-danger', 'p-2', 'rounded');
    }

    if (!isValid) {
      alertBox.style.display = 'block';
    } else {
      alertBox.style.display = 'none';
      console.log('Form validated successfully!');
      // Uncomment to submit for real:
      // form.submit();
    }
  });
};
