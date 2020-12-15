export function localStorageAdd(key:string, value:any){
    window.sessionStorage.setItem(key, value)
  }

  export function localStorageRemove(key:string){
      try{
        window.sessionStorage.removeItem(key);
      }catch(error){
        console.log("error al remover ", error)
      }
    
  }

  export function localStorageGet(key:string){
      try{
        return window.sessionStorage.getItem(key);
      }catch(error){
        console.log("error al cargar",error)
      }
    
  }