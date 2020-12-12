import { infinite, returnUpForward } from "ionicons/icons"
import {database,produt} from "./UserController"

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