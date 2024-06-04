export function alerta(){
    document.getElementById("AInicio") 
        window.alert("Está siendo dirigido a la pestaña Inicio");
}

export function alerta1(){
    document.getElementById("AConfiguración") 
        window.alert("Está siendo dirigido a la pestaña Configuración");
}

export function alerta2(){
    document.getElementById("AEditarpregunta") 
        window.alert("Está siendo dirigido a la pestaña Editar Preguntas");
}

export function alerta3(){
    document.getElementById("ACrearpregunta") 
        window.alert("Está siendo dirigido a la pestaña Crear Preguntas");
}

export function alerta4(){
    document.getElementById("ACategorias") 
        window.alert("Está siendo dirigido a la pestaña Categorías");
}


export const botones = [
    { id: "AInicio", texto: "Inicio", onClick: alerta, href: "#" },
    { id: "AConfiguración", texto: "Configuración", onClick: alerta1,  href: "#" },
    { id: "AEditarpregunta", texto: "Editar preguntas", onClick: alerta2,  href: "#"},
    { id: "ACrearpregunta", texto: "Crear preguntas", onClick: alerta3,  href: "#" },
    { id: "ACategorias", texto: "Categorías", onClick: alerta4,  href: "#" }
];

export function hacerClick() {
    let temaNuevo = prompt("Ingrese el tema que quiere modificar: ");
    console.log("El tema modificado es: " + temaNuevo);
   
};

export function hacerClick2() {
    let temaAgregado = prompt("Ingrese el tema que quiere agregar: ");
    console.log("El tema agregado es: " + temaAgregado);
   
};