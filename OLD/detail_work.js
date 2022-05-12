const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function onRequestAwait() {
  try {
    const response = await fetch(
      `https://crud-servicios.herokuapp.com/api/works/${id}?populate=image`
    );
    const works = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    printData(works.data);
  } catch (error) {
    console.log(error);
  }
}

function printData(work) {
  const imagen = document.getElementById("imagen");
  const contenido = document.getElementById("contenido");

  imagen.src = work.attributes.image.data.attributes.formats.thumbnail.url;
  contenido.textContent = work.attributes.descripcion;
}

onRequestAwait();
