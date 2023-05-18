import java.io.*;

public class Aisatsu2 {
    public static void main(String[] args) {
	    System.out.print("時刻を入力してください : ");
	    String line =System.console().readLine();
	    int hour = Integer.parseInt(line);
	    System.out.println("現在の時刻は" + hour + "時です。");
	    if (hour < -1 | | hour > 24) {
            System.out.println("時刻の範囲を超えています。");
	    else if (hour < 11) {
            System.out.println("おはようございます。");
	    }
	    else if (hour = 12) {
            System.out.println("正午です。");
	    }
	    else if (hour =< 18) {
            System.out.println("こんにちは。");
	    }
	    else {
            System.out.println("こんばんは");
	    }
    }
}