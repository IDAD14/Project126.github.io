document.getElementById('KhodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = ""
})
l
function generateKhodam(nama){
    const khodams = [
        'spakbor mio',
        'knalpot beat',
        'ultramen ribut',
        'Macan pemarah',
        'Buaya sunda',
        'Beruang sunda',
'Harimau birahi',
'Tutup odol',
'Tutup panci',
'Kaleng kejepit',
'Kanebo kering',
'Kapal karam',
'Gergaji mesin',
'Nyi blorong',
'Jin rawa rontek',
    ];


    const index = nama.length % khodams.length;
    return khodams[index];
}