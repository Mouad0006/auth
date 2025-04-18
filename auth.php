<?php

header("Content-Type: application/json");

// تحقق من التوكن
$validToken = "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"; 

if (!isset($_GET['token']) || $_GET['token'] !== $validToken) {
    http_response_code(403);
    echo json_encode(["error" => "Forbidden: Invalid token"]);
    exit;
}

$data = [
  "username" => "Mouad",
  "password" => "Mouad2006"
];

echo json_encode($data);
exit;
?>
