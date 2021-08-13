import {database,produt,fireB} from "./UserController"
import {pedido} from "../components/Carrito";

export interface store{
    id : string,
    address : string,
    name : string,
    score : number,
    idShopman : string
}


export interface dataUser { //Interface usada para crear el objeto usuario con todos los datos
    id: string;
    name: string;
    userName: string;
    address :string;
    numberPhone: string;
    email :string
}

export async function RegisterClient(barrio:string, direccion:string, id:string) {
    await database.collection("cliente").add({
        barrio: barrio,
        direccion: direccion,
        idUsuario: id
    })
    .then(()=>{
        console.log("cliente registrado")
    })
    .catch(()=>{
        console.log("No se registro cliente")
    })
}

let idCliente:string;

//Funcion realiza el envio de datos a la BD simulacion de compra
export async function compra(list:Array<pedido>, IdTienda:string){
    console.log("mostrando llegada de carrito",  list,"id de la tienda", IdTienda);//Verificacion
    let email = fireB.auth().currentUser?.email;  //Busco email del usuario logiado
    
    if(typeof email === "string"){
       let aux  = await idUser(email)
       if(typeof aux === "string"){
            idCliente =aux;  
       }
         
    }
    alert(idCliente)
    list.forEach(async (data)=>{
        console.log("datos de los productos", data.Id," ",data.count," ",data.precio)
        await database.collection("pedido").add({    
                idCliente : idCliente,                                    
                idProducto : data.Id,
                cantidad : data.count,
                precio : data.precio,
                idTienda : IdTienda
            }
        ).then((doc)=>{
            console.log("Compra exitosa", doc.id)
            
        }).catch()
    })
}

export async function listStore() {
   //let list:Array<store> = new Array();
     let list:store[] = []
   const result =  await database.collection("tienda").get()
        .then((querySnapshot)=>{
            querySnapshot.forEach(element=>{
                list.push({
                    id : element.id,
                    address :element.data().direccion, 
                    name : element.data().nombre, 
                    score : element.data().calificacion,
                    idShopman : element.data().idTendero
                })
            });
            return list;
        })
        .catch((error)=>{
            console.log(error)
            return 0;
        })
    return result;
    
}

export async function loadData() { // Carga los datos del usuario logueado a la vista
  let user= fireB.auth().currentUser?.email;
  let aux1:dataUser;
  const result = await database.collection("usuarios").where("correo", "==", user).get()
  .then((querySnapshot)=>{
           querySnapshot.forEach((element)=>{
             aux1 = ({id:element.id,
                    name: element.data().nombre, 
                    userName: element.data().userName, 
                    address: element.data().direccion, 
                    numberPhone: element.data().celular,
                    email: element.data().correo
                 })
            })
        console.log("aux1", aux1)
        return aux1;
    })
    .catch()
    return result;
}

export async function idUser(email:string)  { 
    let aux1:string;
    const result = await database.collection("usuarios").where("correo", "==", email).get()
    .then((querySnapshot)=>{
             querySnapshot.forEach((element)=>{
               aux1 = element.id
            })
        console.log("aux1", aux1)
        return aux1;
    })
    .catch((error)=>{
          console.log(error,"error al buscar el usuario");
      return false
    })

    if(typeof result ==="string"){
        return result;
    }
}

export async function EditClient(idClient:string, barrio:string, direccion:string,nombre:string) {
    await database.collection("cliente").doc().set({
    }).then((e)=>{
        console.log("actualizacion exitosa", e);
        return true;
    }).catch((error)=>{
        console.log("error al editar", error);
        return false;
    })
}

export async function product(id:string) {
    let name:string;
    const result = await database.collection("producto").where("id", "==", id).get()
    .then((user)=>{
        user.forEach((item)=>{
            name = item.data().nombre;
        })
        return name;
    }).catch()
    return result;
}

export async function user(id:string) { // Busca usuario por id y devuelve el nombre del usuario en cuestion
    let name:string;
    const result = await database.collection("usuarios").where("id", "==", id).get().then((user)=>{
        user.forEach((item)=>{
            name= item.data().nombre;
        })
        return name;
    }).catch()
    return result;
}