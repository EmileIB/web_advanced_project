<?php

require_once '../conn/config.php';
require_once '../helpers/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
  exit(error('Invalid request method'));
}

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if (!$id) {
  exit(error('Invalid movie id'));
}

$sql = "DELETE FROM movies WHERE id = $id";
$result = mysqli_query($link, $sql);
if (!$result) {
  exit(error(mysqli_error($link)));
}
echo success('Movie deleted successfully');
