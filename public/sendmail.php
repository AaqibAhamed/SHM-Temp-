<?php 
// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

if($data->pass == 93724918){
    $to_email = 'colombo@shmgroup.com';
    $name = $data->name;
    $email = $data->email;
    $message = $data->message.'<br/>name:'.$name.'<br/>email:<a href="mailto:'.$email.'">'.$email.'</a><br/>';
    $subject = 'New Contact Request';
    $headers = "From: SHM Sri Lanka\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";
    $sent = mail($to_email, $subject, $message, $headers);
    if($sent == false){
        echo "{isvalid:false}";
    }else{
        echo "{isvalid:true}";
    }
}else{
    echo "unauthorized";
}
?>