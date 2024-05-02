<?php

// ENTER YOUR EMAIL
$emailTo = "malofauchetpro@gmail.com";

// ENTER IDENTIFIER
$emailIdentifier =  "Message sent via contact form from me";


$name = "Malo Fauchet";
$clientEmail = "malofauchet@gmail.com";
$message = "test43";
$fhp_input = "";

$array = array("nameMessage" => "", "emailMessage" => "", "messageMessage" => "","succesMessage" => "");

if($name == "") {
    $array["nameMessage"] = "x";
}

if(!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
    $array["emailMessage"] = "x";
}

if($message == "") {
    $array["messageMessage"] = "x";
}

if($name != "" && filter_var($clientEmail, FILTER_VALIDATE_EMAIL) && $message != "" && $fhp_input == "") {
    
    $array["succesMessage"] = "";
    
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $name . " <" . $clientEmail .">\r\n";
    $headers .= "Reply-To: " . $clientEmail;
    
    mail($emailTo, $emailIdentifier, $message, $headers);
    
}

echo json_encode($array);

?>