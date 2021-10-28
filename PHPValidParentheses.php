

function isValid($s) {
        $parentheses = [
            "(" => ")",
            "[" => "]",
            "{" => "}",
        ];
        
        $stack = array();
        
        for($i = 0; $i < strlen($s); $i++) {
            if (isset($parentheses[$s[$i]])) {
                array_push($stack, $s[$i]);
            } else {
                $parenthesis = array_pop($stack);
        
                if ($s[$i] != $parentheses[$parenthesis]) {
                    return false;
                }
            }
        }
        
        return empty($stack);
}


// rework this to be errorless
