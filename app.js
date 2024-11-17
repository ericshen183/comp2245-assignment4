window.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById('searchButton');
    btn.addEventListener("click", function() {
        fetch("http://localhost/comp2245-assignment4/superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data)
            })
            .catch(error => {
                alert(error);
            });
    });
});