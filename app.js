let images = [
    "./images/rasm-1.jpg",
    "./images/rasm-2.jpg",
    "./images/rasm-3.jpg",
    "./images/rasm-4.jpg",
    "./images/rasm-5.jpg",
    "./images/rasm-6.jpg",
    "./images/rasm-7.jpg",
    "./images/rasm-8.jpg",
    "./images/rasm-9.jpg",
    "./images/rasm-10.jpg",
    "./images/rasm-11.jpg",
    "./images/rasm-12.jpg",
    "./images/rasm-13.jpg",
    "./images/rasm-14.jpg",
    "./images/rasm-15.jpg",
    "./images/rasm-16.jpg",
    "./images/rasm-17.jpg",
    "./images/rasm-18.jpg",
    "./images/rasm-19.jpg",
    "./images/rasm-20.jpg"
];

const kattaRasm = document.querySelector(".katta-rasm img");
const kichikRasmlarQutisi = document.querySelector(".kichik-rasmlar");

images.forEach((src) => {
    // 1. Rasmni brauzer xotirasiga oldindan yuklab olamiz (bosganda kechikmasligi uchun)
    const preloadImg = new Image();
    preloadImg.src = src;

    // 2. Pastki ramka uchun rasm yaratamiz
    const img = document.createElement("img");
    img.src = src;

    // Bosilganda darhol katta rasmni o'zgartirish
    img.addEventListener("click", () => {
        kattaRasm.src = src;
    });

    kichikRasmlarQutisi.appendChild(img);
kichikRasmlarQutisi.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        kichikRasmlarQutisi.scrollLeft += e.deltaY*3;
    }
}, { passive: false });
});
