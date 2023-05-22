<?php
    $number = 12321;

    $number_str = (string) $number;

    $length = strlen($number_str);

    for ($i = 0; $i < $length / 2; $i++) {
        if ($number_str[$i] != $number_str[$length - $i - 1]) {
            echo "$number is not a palindrome.";
            exit;
        }
    }

    echo "$number is a palindrome.";
?>
