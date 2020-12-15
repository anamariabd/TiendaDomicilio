import {fireB, database} from "./UserController"
import "firebase/auth"
import {DatosTienda} from "../SingleComponents/TiendaCard"
import {user,product} from "./clienteController"
export async function registerShopman(id:string ){//Registro del usuario como tendero
  await database.collection('tendero').add({ idUsuario: id})
  .then(()=>{console.log("Tendero nuevo")})
  .catch(()=>{console.log("no hay tendero nuevo")})
}

interface pedidoTienda{
  cliente:string;
  producto:string;
  cantidad: number;
  precio: number;
}
//Crea y agrega una tienda a la bd
export async function DataStore(name: string, idTendero : string, localizacion: string) { //Registro datos de la tienda en BD
        registerShopman(idTendero);
        await database.collection("tienda").add({
            nombre : name,
            localizacion : localizacion,
            idTendero : idTendero,
            calificacion :<number> 0 
        })
        .then(()=>{console.log("tienda registrada")})
        .catch(()=>{console.log("No se logró registrar")})
}

export function loadphotoStore(file : File){ //Carga foto o archivo de la tienda en Storage
    const result = fireB.storage().ref(`/tiendas/${file.name}`)
    .put(file)
    .then((querySnapshot)=>{
      console.log(querySnapshot);
    }).catch((e:any) => {
      console.log(e);
    })
}  

//Editar datos de la tienda
export async function editStore(idTienda:string, nameStore : string, addressStore : string){
  //  let idTienda = fireB.auth().currentUser?.email;//
    await database.collection("tienda").doc(idTienda).set({
        nombre : nameStore,
        direccion : addressStore  
    }).then((e)=>{
        console.log("actualizacion exitosa")
        return true;
    }).catch((error)=>{
            console.log("Error al editar",error);
            return false 
        }
        
    )
}
let aux1 ="";
export async function loadDataStore(){ // Carga los datos de la tienda para mostrar y luego editar

  let user= fireB.auth().currentUser?.email ///
 
  const idTienda = await database.collection("usuarios").where("correo", "==", user).get()
  .then((user)=>{
    user.forEach((element)=>{
       aux1 = element.id;
    })
    console.log("aux1", aux1)
    return aux1;
  }).catch()
  let aux:DatosTienda;
  const result = await database.collection("tienda").where("idTienda", "==", idTienda).get()
    .then((querySnapshot)=>{
        querySnapshot.forEach((elemet)=>{
            console.log(elemet.id, elemet.data().direccion, elemet.data().nombre)
            aux = {Id: elemet.id, name : elemet.data().nombre, Localizacion: elemet.data().direccion, Calificacion:elemet.data().calificacion,UrlImg :""}
        })
      console.log("carga de datos")
        return aux;
    }).catch((error)=>{
            console.log("Error al editar",error);
            return false 
    })
  return result; 
}

//devuelve la lista de todos los pedidos que se hicieron a la tienda
let listPedido: pedidoTienda[];
export async function ListPedido(idTienda : string) {
  let idclient:string ,idproduct : string;

  console.log(idTienda);

  const result = await database.collection("pedido").where("idTienda", "==", idTienda).get()
  .then(
    (querySnapshot)=>{
    let producto:string, cliente:string;
    querySnapshot.forEach((element)=>{
      idclient = element.data().idCliente; //id cliente
      idproduct  =element.data().idProducto; //id producto
      producto = String(async ()=>{
        const result = await product(idproduct)
        return result;
      })
      cliente = String(async ()=> {
        const result = await user(idclient)
        return result;
      })
      listPedido.push({cliente:cliente, producto: producto, cantidad: element.data().cantidad,precio:element.data().precio})
    })
    return listPedido
  })
  .catch(/*()=>{console.log("error")}*/)
  return result;
}