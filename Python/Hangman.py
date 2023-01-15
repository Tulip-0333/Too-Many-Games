import random

def play_hangman():
    word_list = ["python", "programming", "language", "computer", "science"]
    word = random.choice(word_list)
    word = word.upper()
    word_letters = set(word)
    alphabet = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    used_letters = set()
    word_guessed = set()
    tries = 6
    print("Welcome to Hangman!\n")
    while (len(word_letters) > len(word_guessed)) and tries > 0:
        print("You have", tries, "tries left")
        print("Used letters: ", " ".join(used_letters))
        print("Word: ", " ".join(letter if letter in word_guessed else "_" for letter in word))
        user_letter = input("Guess a letter: ").upper()
        if user_letter in alphabet - used_letters:
            used_letters.add(user_letter)
            if user_letter in word_letters:
                word_guessed.add(user_letter)
            else:
                tries -= 1
                print("Incorrect!")
        else:
            print("You have already used that letter, try again!")
    if len(word_letters) == len(word_guessed):
        print("You win!")
        print("The word was", word)
    else:
        print("You lose!")
        print("The word was", word)

play_hangman()
