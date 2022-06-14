<!DOCTYPE HTML>

<html>  

  <meta charset="UTF-8">
  <title>HTML TO PDF CIGL</title>

<body>

<?php
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.pdfshift.io/v3/convert/pdf",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode(array("source" => "https://en.wikipedia.org/wiki/PDF", "landscape" => false, "use_print" => false)),
    CURLOPT_HTTPHEADER => array('Content-Type:application/json'),
    CURLOPT_USERPWD => 'api:your_api_key'
));

$response = curl_exec($curl);
file_put_contents('wikipedia.pdf', $response);

// We also have a package to simplify your work:
// https://packagist.org/packages/pdfshift/pdfshift-php

</body>

</html>