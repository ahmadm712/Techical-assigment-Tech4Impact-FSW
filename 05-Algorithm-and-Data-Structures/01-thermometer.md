START

    INPUT temp as NUMBER
    INPUT type as STRING

    IF type == "Fahrenheit" 
		THEN
        DISPLAY temp = temp - 32 * (5/9)
    ELSE IF type == "Kelvin" 
		THEN
        DISPLAY temp = temp - 273.15
    ELSE IF type == "celcius" 
		THEN
        DISPLAY temp

END