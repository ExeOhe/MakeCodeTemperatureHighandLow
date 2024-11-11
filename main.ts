//  Start with defining initial placeholder temperature values
let current_temp2 = input.temperature()
let current_temp = input.temperature()
let lowest_temp = 0
// WILL OVERWRITE LATER
let highest_temp = 0
// WILL OVERWRITE LATER
//  A low value to make sure the first temp is higher
highest_temp = -100
//  A low value to make sure the first temp is lower
lowest_temp = 1000
//  Define function to execute when Button A is pressed (show highest temp)
//  Pause for 1 second
//  Assign the function to Button A
// Invoke Function by Pressing "A" Button
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    //  Access the global highest_temp variable
    
    //  NOT NECCASARY; PREDEFINED ABOVE; PURPOSE: Get the current temperature
    current_temp = input.temperature()
    //  If current temperature is higher than the highest recorded
    if (current_temp > highest_temp) {
        //  Update highest temperature
        highest_temp = current_temp
    }
    
    //  Convert to Fahrenheit and show it
    basic.showNumber(highest_temp * 1.8 + 32)
    //  Label the display
    basic.showString("F - Highest Temp")
    //  Pause 1 second
    basic.pause(1000)
})
//  Function to execute when Button B is pressed (show lowest temp)
//  Pause for 1 second
//  Assign the function to Button B
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    //  Access the global lowest_temp variable
    current_temp2 = input.temperature()
    //  Get the current temperature
    if (current_temp2 < lowest_temp) {
        //  If current temperature is lower than the lowest recorded
        lowest_temp = current_temp2
    }
    
    //  Update lowest temperature
    basic.showNumber(lowest_temp * 1.8 + 32)
    //  Convert to Fahrenheit and show it
    basic.showString("F - Lowest Temp")
    //  Label the display
    basic.pause(1000)
})
//  Defining the 'on_every_interval' function, which will be invoked at intervals later defined by 'loops.every_interval'.
//  'basic' is the namespace for default functions for the BBC micro:bit, including 'show_number', which is invoked here.
//  'basic.show_number' is a function that displays the passed argument (the temperature in Fahrenheit) on the micro:bit screen.
//  The 'input' namespace contains functions for reading input data, such as 'temperature()', which retrieves the current temperature.
//  The temperature value (in Celsius) is passed as an argument to 'basic.show_number', which then displays the Fahrenheit value.
//  The algebraic equation correctly converts the Celsius temperature to Fahrenheit: (C * 1.8) + 32.
//  The 'loops' namespace defines the 'every_interval' function, which sets up a repeating task.
//  'loops.every_interval(60000, on_every_interval)' calls the 'on_every_interval' function every 60000 ms (1 minute) and repeats indefinitely.
loops.everyInterval(60000, function on_every_interval() {
    basic.showNumber(input.temperature() * 1.8 + 32)
})
