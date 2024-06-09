// JavaScript code to handle form submission and display saved passwords
document.addEventListener('DOMContentLoaded', function() {
    var passwordForm = document.getElementById('passwordForm');
    var passwordList = document.getElementById('passwordList');

    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var website = passwordForm.elements['website'].value;
        var username = passwordForm.elements['username'].value;
        var password = passwordForm.elements['password'].value;

        // Save password to local storage
        var storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
        storedPasswords.push({ website: website, username: username, password: password });
        localStorage.setItem('passwords', JSON.stringify(storedPasswords));

        // Clear form fields
        passwordForm.reset();

        // Display saved passwords
        displayPasswords();
    });

    function displayPasswords() {
        passwordList.innerHTML = '';
        var storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
        storedPasswords.forEach(function(entry, index) {
            var listItem = document.createElement('div');
            listItem.textContent = 'Website: ' + entry.website + ', Username: ' + entry.username + ', Password: ' + entry.password;
            passwordList.appendChild(listItem);
        });
    }

    // Initial display of saved passwords
    displayPasswords();
});
