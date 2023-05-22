<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
       <?php
        // Original array with duplicate values
        $array = array(1, 2, 3, 2, 4, 5, 3, 6, 7, 5, 8, 9, 1);

        // Remove duplicate values
        $uniqueArray = removeDuplicates($array);

        // Display the unique values
        echo "Original Array: " . implode(', ', $array) . "<br>";
        echo "Unique Array: " . implode(', ', $uniqueArray);

        // Function to remove duplicate values from an array
        function removeDuplicates($array) {
            $uniqueArray = array();
        
            foreach ($array as $value) {
                if (!in_array($value, $uniqueArray)) {
                    $uniqueArray[] = $value;
                }
            }
        
            return $uniqueArray;
        }
        ?>

</body>
</html>