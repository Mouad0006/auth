<?php
// 🔐 ملف PHP سري للتحقق من بيانات الدخول

header("Content-Type: application/json");

// تحقق من التوكن
$validToken = "ABC123"; // 👈 غيّره لتوكن سري خاص بك

if (!isset($_GET['token']) || $_GET['token'] !== $validToken) {
    http_response_code(403);
    echo json_encode(["error" => "Forbidden: Invalid token"]);
    exit;
}

// ✅ بيانات المصادقة (يمكنك جعلها مشفرة لاحقاً)
$data = [
  "username" => "admin",
  "password" => "123456"
];

echo json_encode($data);
exit;
?>
