// ==UserScript==
// @name         milyoudas PHP-secured checker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  سكربت يعمل فقط إذا تم التحقق من الهوية من سيرفر PHP 🔐 (GitHub repo: Mouad0006/auth)
// @author       Mouad
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // رابط التحقق من الهوية على سيرفرك (غيّره إلى رابط حقيقي بعد رفع auth.php إلى استضافة)
  const AUTH_URL = "https://yourdomain.com/secure/auth.php?token=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";

  fetch(AUTH_URL)
    .then(res => res.json())
    .then(data => {
      if (data.access === true) {
        console.log("✅ تم التحقق بنجاح");
        startScript();
      } else {
        console.warn("❌ فشل التحقق. السكربت لن يعمل.");
      }
    })
    .catch(err => {
      console.error("🚫 فشل الاتصال بالسيرفر:", err);
    });

  function startScript() {
    // ✅ الكود الحقيقي يبدأ هنا بعد التحقق
    const btn = document.createElement("button");
    btn.innerText = "تشغيل مخصص";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = 99999;
    btn.style.padding = "10px 20px";
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";
    btn.style.border = "none";
    document.body.appendChild(btn);

    btn.onclick = () => alert("✅ تم التحقق من الهوية بنجاح!");
  }
})();
