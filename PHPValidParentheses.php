
<?php 

function isValid($s) {
    $s = trim($s);
    if (!$s) {
      return true;
    }
    if (strlen($s) === 1) {
      return false;
    }

    $brackets = [
      '[' => ']',
      '(' => ')',
      '{' => '}',
    ];

    for ($stack = [], $length = strlen($s), $i = 0; $i < $length; $i++) {
      $symbol = $s[$i];
      if (array_key_exists($symbol, $brackets)) {
        $stack[] = $symbol;
      } else {
        $lastInStack = array_pop($stack);
        if (!isset($brackets[$lastInStack]) || $symbol !== $brackets[$lastInStack]) {
          return false;
        }
      }
    }
    return (count($stack) === 0) ? true : false;
  }
?>

// rework this to be errorless
