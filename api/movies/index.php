<?php

require_once '../conn/config.php';
require_once '../helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  exit(error('Invalid request method'));
}

$genre = isset($_GET['genre']) ? $_GET['genre'] : null;

$sql = "SELECT * FROM movies";
if ($genre) {
  $sql .= " WHERE genre = '$genre'";
}
$result = mysqli_query($link, $sql);
if (!$result) {
  exit(error(mysqli_error($link)));
}
$movies = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo success($movies);
