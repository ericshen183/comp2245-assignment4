document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('searchButton');
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let searchVal = document.getElementById('searchBar').value.trim();
        let cleanUrl = `superheroes.php?query=${encodeURIComponent(searchVal)}`;

        fetch(cleanUrl, { method: 'GET' })
            .then(response => response.text())
            .then(elements => {
                let resultDiv = document.getElementById('result');
                let h3El = document.createElement("h2");
                let h3Text = document.createTextNode("RESULT");
                h3El.appendChild(h3Text);
                let hrEl = document.createElement("hr");

                resultDiv.innerHTML = '';
                resultDiv.innerHTML = elements;
                resultDiv.prepend(h3El, hrEl);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('Error fetching data: ' + error.message);
            });
    });
});



    
