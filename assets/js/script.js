// script.js

// script.js



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sampleForm');
    const output = document.getElementById('output');

    // Load saved data from LocalStorage and display it
    loadSavedData();

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const formData = new FormData(form);
        const name = formData.get('name');
        const age = formData.get('age');
        const gender = formData.get('gender');
        const interests = formData.getAll('interests'); // Get all checked checkboxes

        const data = {
            name,
            age,
            gender,
            interests
        };

        // Save data to LocalStorage
        localStorage.setItem('formData', JSON.stringify(data));

        // Display the data
        displayData(data);
    });

    function loadSavedData() {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const data = JSON.parse(savedData);
            displayData(data);

            // Populate the form with saved data
            form.name.value = data.name;
            form.age.value = data.age;
            if (data.gender) {
                document.getElementById(data.gender).checked = true;
            }
            if (data.interests) {
                data.interests.forEach(interest => {
                    document.getElementById(interest).checked = true;
                });
            }
        }
    }

    function displayData(data) {
        output.innerHTML = `
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Interests:</strong> ${data.interests.join(', ')}</p>
        `;
    }
});

