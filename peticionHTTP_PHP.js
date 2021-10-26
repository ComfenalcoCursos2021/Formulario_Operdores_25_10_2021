let ajax = async({...arg})=>{
    let peticion = await fetch(arg.url, arg.parametros);
    let data = await peticion.json();
    console.log(data);
}


export default ajax;