function crearColaborador({titulo,imagen,descripcion}) {
    return `
        <div class="div_colaborador">
            <h1>${titulo}</h1>
            <div class="imagen_colaborador"><img src=${imagen} alt=""> </div>
            
            <h3 class=>${descripcion}</h3>
        </div>
    `;
}





const data =[
    {titulo:"Juan Esteban Castaño López",imagen:"imagen_logo/Juan.jpg", descripcion: "Vendedor"},
    {titulo:"Miguel Francisco Betancour",imagen:"imagen_logo/miguel.jpg", descripcion: "Técnico"},
    {titulo:"Juliana Vanessa Alvarez",imagen:"imagen_logo/vanessa.jpg", descripcion: "Asesora"},
    
    
];


const contenedor=document.querySelector('.contenedor-cuadros-2');


function mostrarColaboradores(){

    for(let cuadro of data){

        const servicioHtml= crearColaborador(cuadro);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml);
        
    };

};

export {mostrarColaboradores};