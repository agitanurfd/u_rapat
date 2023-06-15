import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    console.log(getValue("location"))
    let data = {
        location : getValue("location"),
        phone_number : getValue("phone_number"),
        biodata : {
            nama : getValue("nama"),
            phone_number : getValue("phone_number"),
        },
        prodi : {
            jurusan : getValue("jurusan"),
        }
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);