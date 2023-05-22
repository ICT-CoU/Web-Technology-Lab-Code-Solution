<?php
class FactorialCalculator {
    public static function calculate($number) {
      if ($number < 0) {
        throw new InvalidArgumentException("Factorial is not defined for negative numbers.");
      }
      
      $factorial = 1;
      
      for ($i = 1; $i <= $number; $i++) {
        $factorial *= $i;
      }
      
      return $factorial;
    }
  }
  
  // Example usage
  $number = 5;
  $factorial = FactorialCalculator::calculate($number);
  echo "Factorial of $number is $factorial";
  

?>