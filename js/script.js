document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    document.getElementById("confirmation-message").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("confirmation-message").classList.add("hidden");
    }, 3000); // إخفاء الرسالة بعد 3 ثوانٍ
});

document.getElementById("remove-service").addEventListener("click", function() {
    document.getElementById("service").selectedIndex = -1; // إلغاء تحديد أي خدمة
});
