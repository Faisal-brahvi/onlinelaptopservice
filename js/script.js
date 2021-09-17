//for apple 
const apple_button = document.getElementById("call-apple-link");
const sec_for_apple = document.getElementById("call-apple")

apple_button.addEventListener('click', () => {
    sec_for_apple.classList.toggle('show')
})


//for hp 
const hp_button = document.getElementById("call-hp-link");
const sec_for_hp = document.getElementById("call-hp");
hp_button.addEventListener('click', () => {
    sec_for_hp.classList.toggle('show');
})

//for dell
const dell_button = document.getElementById("call-dell-link");
const sec_for_dell = document.getElementById("call-dell");
dell_button.addEventListener('click', () => {
    sec_for_dell.classList.toggle('show');
})

//for lenovo
const lenovo_button = document.getElementById("call-lenovo-link");
const sec_for_lenovo = document.getElementById("call-lenovo");
lenovo_button.addEventListener('click', () => {
    sec_for_lenovo.classList.toggle('show');
})

//for Acer

const acer_button = document.getElementById("call-acer-link");
const sec_for_acer = document.getElementById("call-acer");
acer_button.addEventListener('click', () => {
    sec_for_acer.classList.toggle('show');
})

//Asus
const asus_button = document.getElementById("call-asus-link");
const sec_for_asus = document.getElementById("call-asus");
asus_button.addEventListener('click', () => {
    sec_for_asus.classList.toggle('show');
})

//MSI
const msi_button = document.getElementById("call-msi-link");
const sec_for_msi = document.getElementById("call-msi");
msi_button.addEventListener('click', () => {
    sec_for_msi.classList.toggle('show');
})

//Razer
const razer_button = document.getElementById("call-razer-link");
const sec_for_razer = document.getElementById("call-razer");
razer_button.addEventListener('click', () => {
    sec_for_razer.classList.toggle('show');
})

//for humburgur buttom
const humburgur = document.getElementById("burgur");
const nav_bar = document.getElementById('links');

humburgur.addEventListener('click', () => {
    nav_bar.classList.toggle('show')
})