document.addEventListener('DOMContentLoaded', function() {
    var selectMenu = document.getElementById('contactMethod');
    var inputEmail = document.getElementById('inputEmail');
    var inputPhone = document.getElementById('inputPhone');

    selectMenu.addEventListener('change', function() {
        if (this.value === 'Email') {
            inputEmail.style.display = 'block';
            inputPhone.style.display = 'none';
        } else if (this.value === 'Phone') {
            inputPhone.style.display = 'block';
            inputEmail.style.display = 'none';
        }
    });
});

//yes