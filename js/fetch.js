import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://agita.herokuapp.com/";
get(urlAPI, isiTableUndanganRapat);
function isiTableUndanganRapat(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#LOKASI#", value.undanganrapat.lokasi)
            .replace("#PHONE_NUMBER#", value.undanganrapat.phone_number)
            .replace("#DATETIME#", value.undanganrapat.datetime)
            .replace("#BIODATA#", value.undanganrapat.biodata)
            .replace("#PRODI#", value.undanganrapat.prodi)
            // .replace("#STATUS#", value.checkin)
            // .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}