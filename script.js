function crearServicio({titulo,descripcion}) {
    return `
        <div class="cuadros-1">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}





const data =[
    {titulo:"Venta de dispositivos", descripcion: "plataforma de comercio electrónico para comprar teléfonos móviles, tabletas u otros dispositivos relacionados con la telefonía móvil"},
    {titulo:"Accesorios para dispositivos", descripcion: "Venta de accesorios fundas, protectores de pantalla, auriculares, cargadores, baterías adicionales"},
    {titulo:"Seccion Tres", descripcion: "Descripcion de la Seccion Tres"},
    {titulo:"Seccion Cuatro", descripcion: "Descripcion de la Seccion Cuatro"},
    {titulo:"Seccion Cinco", descripcion: "Descripcion de la Seccion Cinco"},
    {titulo:"Seccion Seis", descripcion: "Descripcion de la Seccion Seis"},
    {titulo:"Seccion Siete", descripcion: "Descripcion de la Seccion Siete"}
];

const contenedor=document.querySelector('.contenedor-cuadros-1');

for(cuadro of data){

    const servicioHtml= crearServicio(cuadro);
    contenedor.insertAdjacentHTML('beforeend', servicioHtml)
    
};
