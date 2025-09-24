const cartBody = document.getElementById("cart-body");
const subTotalEl = document.getElementById("sub-total");
const discountEl = document.getElementById("discount");
const deliveryEl = document.getElementById("delivery");
const totalEl = document.getElementById("total");
const applyVoucherBtn = document.getElementById("apply-voucher");
const voucherInput = document.getElementById("voucher");

let discountPercent = 0;

function updateTotals() {
    let subTotal = 0;
    cartBody.querySelectorAll("tr").forEach(row => {
        const price = parseFloat(row.dataset.price);
        const qty = parseInt(row.querySelector(".quantity").textContent);
        row.querySelector(".item-total").textContent = (price * qty) + "$";
        subTotal += price * qty;
    });

    const discount = (subTotal * discountPercent) / 100;
    const deliveryFee = subTotal > 0 ? 5 : 0;
    const grandTotal = subTotal - discount + deliveryFee;

    subTotalEl.textContent = subTotal + "$";
    discountEl.textContent = discount.toFixed(2) + "$";
    deliveryEl.textContent = deliveryFee + "$";
    totalEl.textContent = grandTotal.toFixed(2) + "$";
}


cartBody.addEventListener("click", e => {
    if (e.target.classList.contains("plus")) {
        const qty = e.target.parentElement.querySelector(".quantity");
        qty.textContent = parseInt(qty.textContent) + 1;
    }
    if (e.target.classList.contains("minus")) {
        const qty = e.target.parentElement.querySelector(".quantity");
        if (parseInt(qty.textContent) > 1) qty.textContent--;
    }
    if (e.target.classList.contains("delete")) {
        e.target.closest("tr").remove();
    }
    updateTotals();
});


const voucherMsg = document.getElementById("voucher-msg");
applyVoucherBtn.addEventListener("click", () => {
    const code = voucherInput.value.trim().toUpperCase();

    if (code === "SAVE10") {
        discountPercent = 10;
        voucherMsg.textContent = "10% discount applied!";
        voucherMsg.style.color = "#28a745";
    } else {
        discountPercent = 0;
        voucherMsg.textContent = "Invalid voucher code.";
        voucherMsg.style.color = "#dc3545";
    }
    updateTotals();
});


const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

updateTotals();