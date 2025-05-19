const qrText = document.getElementById('qr-text');
const sizeSelect = document.getElementById('size');
const generateBtn = document.getElementById('Generate');
const downloadBtn = document.getElementById('downloadbtn');
const qrBody = document.querySelector('.qr-body');

let qrCode; // Hold the QRCode object

generateBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent anchor tag default behavior
    const text = qrText.value.trim();
    const size = parseInt(sizeSelect.value);

    if (!text) {
        alert("Please enter some text or a URL");
        return;
    }

    // Clear previous QR code
    qrBody.innerHTML = "";

    // Generate new QR code
    qrCode = new QRCode(qrBody, {
        text: text,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    // Wait for QR code to render before setting up download
    setTimeout(() => {
        const img = qrBody.querySelector('img');
        if (img) {
            downloadBtn.href = img.src;
            downloadBtn.download = "qrcode.png";
        }
    }, 300); // Small delay to let QR code render
});
