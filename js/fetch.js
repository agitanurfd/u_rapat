import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://agita.herokuapp.com/undanganrapat";
get(urlAPI,isiTableUndanganRapat);
function isiTableUndanganRapat(results){
    console.log(results);
}