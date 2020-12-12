import { infinite, returnUpForward } from "ionicons/icons"
import {database,produt,fireB} from "./UserController"

export interface store{
    id : string,
    address : string,
    name : string,
    score : number,
    idShopman : string
}

interface ProductPedido{
    idproduct : string, /*[[1,2],
                           [1,2],
                           [1,2]]*/
    cantidad : number
}

export  function compra(list:Array<ProductPedido>, idCliente: string ){
    list.forEach(async (data)=>{
        await database.collection("pedido").add({                                                   
                idCliente : idCliente,                                    
                idProducto : data.idproduct,
                cantidad : data.cantidad
            }
        )
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

export interface dataUser {
    id: string;
    name: string;
    userName: string;
    address :string;
    numberPhone: string;
    email :string
}

export async function loadData() {
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