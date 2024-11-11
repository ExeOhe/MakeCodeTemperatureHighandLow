# Start with defining initial placeholder temperature values
current_temp2 = input.temperature()
current_temp = input.temperature()
lowest_temp = 0 #WILL OVERWRITE LATER
highest_temp = 0 #WILL OVERWRITE LATER

# A low value to make sure the first temp is higher
highest_temp = -100
# A low value to make sure the first temp is lower
lowest_temp = 1000

# Define function to execute when Button A is pressed (show highest temp)
# Pause for 1 second
# Assign the function to Button A
def on_button_pressed_a():
    # Access the global highest_temp variable
    global current_temp, highest_temp
    # NOT NECCASARY; PREDEFINED ABOVE; PURPOSE: Get the current temperature
    current_temp = input.temperature()
    # If current temperature is higher than the highest recorded
    if current_temp > highest_temp:
        # Update highest temperature
        highest_temp = current_temp
    # Convert to Fahrenheit and show it
    basic.show_number(highest_temp * 1.8 + 32)
    # Label the display
    basic.show_string("F - Highest Temp")
    # Pause 1 second
    basic.pause(1000)
#Invoke Function by Pressing "A" Button
input.on_button_pressed(Button.A, on_button_pressed_a)

# Function to execute when Button B is pressed (show lowest temp)
# Pause for 1 second
# Assign the function to Button B
def on_button_pressed_b():
    global current_temp2, lowest_temp
    # Access the global lowest_temp variable
    current_temp2 = input.temperature()
    # Get the current temperature
    if current_temp2 < lowest_temp:
        # If current temperature is lower than the lowest recorded
        lowest_temp = current_temp2
    # Update lowest temperature
    basic.show_number(lowest_temp * 1.8 + 32)
    # Convert to Fahrenheit and show it
    basic.show_string("F - Lowest Temp")
    # Label the display
    basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

# Defining the 'on_every_interval' function, which will be invoked at intervals later defined by 'loops.every_interval'.
# 'basic' is the namespace for default functions for the BBC micro:bit, including 'show_number', which is invoked here.
# 'basic.show_number' is a function that displays the passed argument (the temperature in Fahrenheit) on the micro:bit screen.
# The 'input' namespace contains functions for reading input data, such as 'temperature()', which retrieves the current temperature.
# The temperature value (in Celsius) is passed as an argument to 'basic.show_number', which then displays the Fahrenheit value.
# The algebraic equation correctly converts the Celsius temperature to Fahrenheit: (C * 1.8) + 32.
# The 'loops' namespace defines the 'every_interval' function, which sets up a repeating task.
# 'loops.every_interval(60000, on_every_interval)' calls the 'on_every_interval' function every 60000 ms (1 minute) and repeats indefinitely.

def on_every_interval():
    basic.show_number(input.temperature() * 1.8 + 32)
loops.every_interval(60000, on_every_interval)
