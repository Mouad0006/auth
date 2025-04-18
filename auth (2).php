<?php
// 🔐 ملف PHP سري للتحقق من الهوية لتشغيل السكربت من Tampermonkey
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// بيانات الدخول الحقيقية (لا يتم كشفها للسكربت)
$validUser = "Mouad";
$validPass = "Mouad2006";

// التوكن المطلوب للمصادقة
$expectedToken = "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";

// التحقق من التوكن القادم من السكربت
$token = $_GET['token'] ?? '';
if ($token !== $expectedToken) {
    http_response_code(403);
    echo json_encode(["access" => false, "reason" => "Invalid token"]);
    exit;
}

// ✅ التحقق ناجح، دون كشف أي بيانات
echo json_encode(["access" => true]);
exit;
?>
