async function pedirTrabajos() {
    console.log("Click en boton");
  
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
  
    try {
  
      const response = await fetch('https://crud-servicios.herokuapp.com/api/works');
  
      if (!response.ok) {
  
          const message = `Error: ${response.status}`;
  
          throw new Error(message);
  
      }
      const users = await response.json();
  
      printData(users.data);
  
  } catch (error) {
  
      console.log(error)
  
  }
  }
  
  function printData(dataJSON) {
    const myList = document.getElementById("myList");
    for (const work of dataJSON) {
      console.log(work);
      const a = document.createElement("a");
      a.id += "enlace";
      a.href = `detail_work.html?${work.id}`;
  
      const figure = document.createElement("figure");
      figure.className += "imageurl";
  
      const img = document.createElement("img");
      img.id += "imageurl";
      img.src = work.attributes.imageurl;
  
      const figcaption = document.createElement("figcaption");
      const h3 = document.createElement("h3");
      h3.id ="name";
      h3.textContent = work.attributes.name;
  
      figcaption.appendChild(h3);
  
      figure.appendChild(img);
      figure.appendChild(figcaption);
      a.appendChild(figure);
  
      myList.appendChild(a);
    };
    }
  
    // <div id="lista" >
    //       <a id="enlace"> 
    //         <figure class="imageurl">
    //           <img id="imageurl" />
    //           <figcaption>
    //             <h3 id="name"></h3>
    //           </figcaption>
    //         </figure>
    //       </a>
    //     </div>
    //   </div>
  // }
  
  pedirTrabajos();
  