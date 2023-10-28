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
    {titulo:"Reparación de dispositivos", descripcion: "Proporcionamos servicios de reparación, incluyendo la reparación de pantallas, reemplazo de baterías, solución de problemas de software y hardware, y reparación de daños por agua"},
    {titulo:"Servicio al cliente", descripcion: "Ofrecemos un canal de atención al cliente para resolver consultas, proporcionar soporte técnico y ayudar a los usuarios con problemas relacionados con dispositivos móviles."},
    {titulo:"Asesoramiento y guías", descripcion: "guías y tutoriales para ayudar a los usuarios a configurar sus dispositivos, transferir datos, resolver problemas comunes y optimizar el rendimiento."},
    {titulo:"Comparación de dispositivos", descripcion: "Ofrecemos herramientas para comparar las especificaciones y características de diferentes dispositivos móviles, lo que ayuda a los usuarios a tomar decisiones informadas."},
    
];



const contenedor=document.querySelector('.cuadros_2');

function mostrarServicios(){

    for(let cuadro of data){

        const servicioHtml= crearServicio(cuadro);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml);
        
    };    

};

export {mostrarServicios};