import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/tabel.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#LOKASI#", value.lokasi)
            .replace("#NOHP#", value.phone_number)
            .replace("#TAMU#", value.biodata.nama)
            .replace("#NO_HP_TAMU#", value.biodata.phone_number)
            .replace("#JURUSAN#", value.prodi.jurusan)
            .replace("#DATE_TIME#", value.datetime)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}