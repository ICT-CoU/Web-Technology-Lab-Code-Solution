<?php
    $number = 12345;

    $number_str = (string) $number;

    $sum = 0;

    for ($i = 0; $i < strlen($number_str); $i++) {
        $digit = (int) $number_str[$i];
        $sum += $digit;
    }

    echo "The sum of the digits in $number is $sum.";
?>
