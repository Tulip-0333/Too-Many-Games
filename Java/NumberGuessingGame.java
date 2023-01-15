import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int targetNumber = rand.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("Guess a number between 1 and 100:");
            int guess = scanner.nextInt();
            if (guess == targetNumber) {
                System.out.println("Congratulations, you guessed the number!");
                break;
            } else if (guess < targetNumber) {
                System.out.println("The number is higher.");
            } else {
                System.out.println("The number is lower.");
            }
        }
    }
}
