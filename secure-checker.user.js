// ==UserScript==
// @name         milyoudas secure checker
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  يتحقق من الهوية بطريقة سرية من خلال صفحة وسيطة data.html 🔐
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const LOCAL_USERNAME = "admin";
  const LOCAL_PASSWORD = "123456";
  const DATA_PAGE_URL = "https://mouad0006.github.io/auth/data.html"; // صفحة مخفية

  fetch(DATA_PAGE_URL)
    .then(res => res.text())
    .then(raw => {
      const data = JSON.parse(raw.trim());
      if (data.username === LOCAL_USERNAME && data.password === LOCAL_PASSWORD) {
        console.log("✅ تم التحقق بنجاح");
        startScript();
      } else {
        console.warn("❌ بيانات غير مطابقة. السكربت لن يعمل.");
      }
    })
    .catch(err => {
      console.error("❌ فشل الاتصال:", err);
    });

  function startScript() {
    createButton();
    setInterval(createButton, 1000);
  }

  function createButton() {
    if (!document.getElementById('milyoudas-url-button')) {
      const button = document.createElement('button');
      button.id = 'milyoudas-url-button';
      button.textContent = 'اختبار الرابط';
      button.style.position = 'fixed';
      button.style.top = '20px';
      button.style.right = '20px';
      button.style.padding = '10px 20px';
      button.style.backgroundColor = '#4CAF50';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.zIndex = 999999999;
      document.body.appendChild(button);

      button.addEventListener('click', function () {
        const url = `https://www.blsspainmorocco.net/MAR/Appointment/ApplicantSelection?data=${encodeURIComponent(new URLSearchParams(location.search).get('data'))}`;
        fetch(url, { method: 'GET', redirect: 'manual' })
          .then(response => {
            const statusCode = response.status;
            alert(`📥 Status Code: ${statusCode}`);
            if (statusCode === 200) window.location.href = url;
          })
          .catch(error => {
            console.error('❌ Error:', error);
            alert('⚠️ فشل التحقق من الرابط.');
          });
      });
    }
  }
})();
