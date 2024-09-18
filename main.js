// Kích hoạt các popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

// Đảm bảo rằng sự kiện hoạt động trên mọi trang
document.addEventListener('DOMContentLoaded', () => {
    const radioBtn1 = document.querySelector("#flexRadioDefault1");
    const radioBtn2 = document.querySelector("#flexRadioDefault2");
    const radioBtn3 = document.querySelector("#flexRadioDefault3");
    const genderSelect = document.querySelector("#genderSelect");
    const hideGenderSelect = () => genderSelect.classList.add('d-none');
    const showGenderSelect = () => genderSelect.classList.remove('d-none');

    radioBtn1.addEventListener("change", hideGenderSelect);
    radioBtn2.addEventListener("change", hideGenderSelect);
    radioBtn3.addEventListener("change", showGenderSelect);

    if (radioBtn3.checked) {
        showGenderSelect();
    } else {
        hideGenderSelect();
    }
});
