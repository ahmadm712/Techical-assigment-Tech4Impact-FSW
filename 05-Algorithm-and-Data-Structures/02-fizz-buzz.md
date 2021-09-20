START
        STORE N with any number
        SET i = 1
        WHILE i less than or equal to N
           IF i MOD 3 is 0 THEN
             DISPLAY "Fizz"
           ELSE IF i MOD 5 is 0 THEN
             DISPLAY "Buzz"
           ELSE IF i MOD 3 is 0 AND i MOD 5 is 0 THEN
             DISPLAY "FizzBuzz"
           ELSE
             DISPLAY i
           END IF
           ADD i by 1
        END WHILE
FINISH
