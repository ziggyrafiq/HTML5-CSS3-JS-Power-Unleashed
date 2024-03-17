// script.js
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('changeColorBtn');
    var content = document.getElementById('content');

    button.addEventListener('click', function () {
        // Change background color on button click
        content.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
