import { infinite } from "ionicons/icons"
import {database,produt} from "./UserController"

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