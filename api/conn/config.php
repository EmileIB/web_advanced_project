<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'me_movies');

$link = mysqli_connect(constant('DB_SERVER'), constant('DB_USERNAME'), constant('DB_PASSWORD'), constant('DB_NAME'));

if ($link === false) {
  die("ERROR: Could not connect. " . mysqli_connect_error());
}
