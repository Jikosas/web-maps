function initMap() {
    // Lokasi pusat peta
    const center = { lat: -6.200000, lng: 106.816666 };

    // Membuat peta baru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: center,
    });

    // Menambahkan marker
    const marker = new google.maps.Marker({
        position: center,
        map: map,
    });
}
