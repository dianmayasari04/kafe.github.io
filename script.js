function hitungTotal() {
    // Mendapatkan jumlah pesanan dari input
    const nasiGorengQty = parseInt(document.getElementById("nasi-goreng").value);
    const mieAyamQty = parseInt(document.getElementById("mie-ayam").value);
    const sateAyamQty = parseInt(document.getElementById("sate-ayam").value);
    
    // Mendefinisikan harga tiap item
    const hargaNasiGoreng = 20000;
    const hargaMieAyam = 15000;
    const hargaSateAyam = 25000;
    
    // Menghitung subtotal untuk setiap item
    const totalNasiGoreng = nasiGorengQty * hargaNasiGoreng;
    const totalMieAyam = mieAyamQty * hargaMieAyam;
    const totalSateAyam = sateAyamQty * hargaSateAyam;
    
    // Menghitung total harga
    const totalHarga = totalNasiGoreng + totalMieAyam + totalSateAyam;
    
    // Memperbarui tampilan pesanan
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = ""; // Kosongkan pesanan sebelumnya
    
    if (nasiGorengQty > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = `Nasi Goreng x${nasiGorengQty} = Rp ${totalNasiGoreng}`;
        orderList.appendChild(listItem);
    }
    if (mieAyamQty > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = `Mie Ayam x${mieAyamQty} = Rp ${totalMieAyam}`;
        orderList.appendChild(listItem);
    }
    if (sateAyamQty > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = `Sate Ayam x${sateAyamQty} = Rp ${totalSateAyam}`;
        orderList.appendChild(listItem);
    }
    
    // Menampilkan total harga
    document.getElementById("total-harga").textContent = `Rp ${totalHarga}`;
}
