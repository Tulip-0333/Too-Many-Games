import random

while True: 
    # Generate a random number between 1 and 100
    number = random.randint(1, 100)
    # Ask the user to guess the number
    guess = int(input("Guess a number between 1 and 100: "))
    # Keep track of the number of guesses
    guesses = 1

    # Loop until the user guesses the number
    while guess != number:
        # Give the user a hint
        if guess < number:
            print("Too low!")
        else:
            print("Too high!")
        guess = int(input("Guess again: "))
        guesses += 1

    # Print a message when the user guesses the number
    print("You guessed the number in", guesses, "tries!")
    play_again = input("Do you want to play again? (Y/N)")
    if play_again.lower() != "y":
        break
