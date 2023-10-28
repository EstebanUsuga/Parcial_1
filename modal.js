function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>¿Está seguro que desea ver las demás secciones?</h2>
                <button id="buttonAceptar">Aceptar</button>
                <button id="buttonCancelar">Cancelar</button>
            </div>
        </div>
    `;
};



const mostrarsecc2=document.getElementById('secc2');
const mostrarsecc3=document.getElementById('secc3');
const seccionServicios=document.getElementById("seccion-dos");
const seccionColaboradores=document.getElementById("seccion-tres");
const botonVerMas=document.querySelector('.boton_vermas'); 




function abrirModal(){
    
    botonVerMas.addEventListener('click',() => ejecutarModal());

}


function ejecutarModal(){

    document.body.insertAdjacentHTML('beforeend', crearModal());
    const buttonAceptar = document.getElementById("buttonAceptar");
    const buttonCancelar = document.getElementById("buttonCancelar");
    const modal = document.querySelector(".contenedor-modal");

    buttonAceptar.addEventListener('click',() => aceptar(modal));

    buttonCancelar.addEventListener('click',()=> modal.remove());


}



function aceptar(modal){

    modal.remove();
    mostrarsecc2.classList.remove("oculto");
    mostrarsecc3.classList.remove("oculto");
    seccionServicios.classList.remove("oculto");
    seccionColaboradores.classList.remove("oculto");
    botonVerMas.remove();
}

export {abrirModal};