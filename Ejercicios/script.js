// Obtener los botones y el nombre
const changeColorNameButton = document.getElementById('changeNameButton');
const toggleVisibilityButton = document.getElementById('toggleVisibilityButton');
const fullName = document.getElementById('fullName');

// Cambiar el color del nombre entre dos colores
changeColorNameButton.addEventListener('click', () => {
    console.warn("click.......");
    alert("Ahora el nombre va a cambiar de color");

    // Obtener el color actual
    const currentColor = window.getComputedStyle(fullName).color;

    // Cambiar el color entre azul y rojo
    fullName.style.color = (currentColor === 'rgb(0, 0, 255)') ? 'rgb(252, 12, 12)' : 'rgb(0, 0, 255)';
});

// Alternar la visibilidad del nombre
toggleVisibilityButton.addEventListener('click', () => {
    if (fullName.style.display === 'none') {
        fullName.style.display = 'block';
    } else {
        fullName.style.display = 'none';
    }
});