<?php

function success($data = null)
{
  return json_encode(array(
    "success" => 1,
    "data" => $data,
  ));
}

function error($message)
{
  return json_encode(array(
    "success" => 0,
    "message" => $message
  ));
}
