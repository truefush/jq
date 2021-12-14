// Array 
class producto{
    constructor(id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}
const camisa = new producto(1,"camisa",100);
const pantalon = new producto(2,"pantalon",300);
const saco = new producto(3,"saco",500);
const tenis = new producto(4,"tenis",200);

const muda=[camisa,pantalon,saco,tenis]

// relacion del evento al dom
$(document).ready(() => {
    $(".btnComprar").click((e) => { 
        
        let hijos = $(e.target).parent().children();
        console.log(hijos[0].value);
        $(e.target).parent().slideUp("slow");
    });
});

producto.forEach(elemento => {
    $("#app").append(`<div>
        <input value="${elemento.id}" type="hidden">
        <h4>  Producto: ${elemento.nombre}</h4>
        <b> $ ${elemento.precio}</b>
        <button class="btnComprar">Comprar</button>
    </div>`);    
});

