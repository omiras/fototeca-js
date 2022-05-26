// Estado de la app
let fotos = ["casa1", "casa2", "casa3", "casa4", "casa5", "casa6", "casa7", "casa8"];
let galeria = [];

for (let i = 0; i < fotos.length; i++) {
    // 1. Recuperamos el nombre de la foto
    let siguienteFoto = fotos[i];
    // 2. Creamos un elemento nuevo del tipo 'img' y tenemos que llenar la propiedad .src con la ruta a la imagen
    let imagen = document.createElement("img");
    imagen.src = `/img/${siguienteFoto}.jpg`;

    imagen.addEventListener("dblclick", function (event) {
        // 1. Identificar la foto clicada (event.target.src)
        // 1.5. Añadir el valor del event.target.src en el array de galeria
        // 2. llamar a la función llenarGaleria()

        let fotoClicada = event.target.src;

        if (galeria.includes(fotoClicada)) {
            // si la galería ya tiene la foto que acabao de doble clickear
            alert(`La foto ${fotoClicada} ya está en la galería.`);
            return;
        }

        galeria.push(fotoClicada);
        llenarGaleria();

    })

    // 3. Añadir la imagen como hijo del section id=fototeca
    let sectionFototeca = document.querySelector("#fototeca");
    sectionFototeca.appendChild(imagen);
}

function llenarGaleria() {

    // 0. Limpiar todo el contenido de galeria. Lo podemos conseguir estableciendo como un string vació la propiedad innerHTML de la sectionGaleria
    let sectionGaleria = document.querySelector("#galeria");
    sectionGaleria.innerHTML = "";


    // 1. Recorrer el array galeria
    for (let i = 0; i < galeria.length; i++) {
        // 2. Crear una 'img' para cada posición del array y usar el valor galeria[i] para establecer el valor de la propiedad .src

        // Necesitamos un contenedor para albergar las dos imagenes
        let contenedorImagen = document.createElement("div");
        contenedorImagen.classList.add("imagen-galeria");

        let imagen = document.createElement("img");
        imagen.src = galeria[i];

        let aspaQuitarFoto = document.createElement("img");
        aspaQuitarFoto.src = "/img/borrar.png";
        aspaQuitarFoto.classList.add("aspa-eliminar");

        aspaQuitarFoto.addEventListener("click", function (event) {
            // Acceso a la imagen asociada al aspa que acabamos de clicar
            console.log(event.target.previousSibling);
        })

        // en el DIV , pon la imagen
        contenedorImagen.appendChild(imagen);
        // en el DIV, pon el aspa 
        contenedorImagen.appendChild(aspaQuitarFoto);

        // en la section, añade el DIV
        sectionGaleria.appendChild(contenedorImagen);

    }



}
