<?php

require_once '../conn/config.php';
require_once '../helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  exit(error('Invalid request method'));
}

$data = json_decode(file_get_contents("php://input"));
$title = isset($data->title) ? $data->title : '';
$year = (int) isset($data->year) ? $data->year : 0;
$genre = isset($data->genre) ? $data->genre : '';
$director = isset($data->director) ? $data->director : '';
$poster = isset($data->poster) ? $data->poster : '';

if (!$title || !$year || !$genre || !$director || !$poster) {
  exit(error('All fields are required'));
}

$sql = "INSERT INTO movies (title, year, genre, director, poster) VALUES ('$title', $year, '$genre', '$director', '$poster')";
$result = mysqli_query($link, $sql);
if (!$result) {
  exit(error(mysqli_error($link)));
}
// get inserted movie id
$movieId =  mysqli_insert_id($link);
echo success([
  'id' => $movieId,
  'title' => $title,
  'year' => $year,
  'genre' => $genre,
  'director' => $director,
  'poster' => $poster,
]);
