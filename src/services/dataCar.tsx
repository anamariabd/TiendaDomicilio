import {database} from "../Controller/UserController"
import {produt} from "../Controller/UserController"
//import { listCard } from "../SingleComponents/ProductCard";



export function dataCar(list :Array<Number>) {
 let listProduct = Array<produt>();
 list.forEach(element => {
     database.collection("producto").where("id", "==", element).get()
                .then((querySnapshop)=>{
                    querySnapshop.forEach((element : any)=>{
                        let id = element.id;
                        let name = element.data().nombre;
                        let medida = element.data().medida;
                        let marca = element.data().marca;
                        let img  = element.data().imagen;
                        listProduct.push({id : id, name : name, img : img, medida : medida, marca : marca });
                    })
                })
 });
 console.log(listProduct);
}