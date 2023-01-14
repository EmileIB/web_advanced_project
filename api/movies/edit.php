<?php

require_once '../conn/config.php';
require_once '../helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
  exit(error('Invalid request method'));
}

$data = json_decode(file_get_contents("php://input"));
$id = (int) isset($data->id) ? $data->id : 0;
$title = isset($data->title) ? $data->title : '';
$year = (int) isset($data->year) ? $data->year : 0;
$genre = isset($data->genre) ? $data->genre : '';
$director = isset($data->director) ? $data->director : '';
$poster = isset($data->poster) ? $data->poster : '';

if (!$id || !$title || !$year || !$genre || !$director || !$poster) {
  exit(error('All fields are required'));
}

$sql = "UPDATE movies SET title = '$title', year = $year, genre = '$genre', director = '$director', poster = '$poster' WHERE id = $id";
$result = mysqli_query($link, $sql);
if (!$result) {
  exit(error(mysqli_error($link)));
}
echo success('Movie updated successfully');
