input = parseInt(prompt('Banyak bintang ?'))
// inisiasi
let bintang;
if (input < 1 || input > 20) {
    console.log('Input must 1 - 20')
} else {
    bintang = input * 2 + 2
}

// sebanyak bintang yang di inginkan
for (i = 1; i < bintang; i++) {
    for (j = 1; j < bintang; j++) {
        // buat bintang yang menyerong kiri
        if (i == j) {
            document.write('*')
        } else if ((i + j) == bintang) {
            // bintang yang menyerong kanan
            document.write('*')
        } else {
            // sisanya whitespace
            document.write('&nbsp;&nbsp;')
        }
    }
    document.write('<br>')
}
