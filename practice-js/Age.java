import java.io.*;

public class Nenrei {
    public static void main(String[] args) {
		System.out.print("何歳ですか？");
		String line =  System.console().readLine();
		int age = Integer.parseInt(line);
		if (age < 6) {
		System.out.println("幼児ですね。");
		}
		if (age < 12) {
			System.out.println("小学生ですね。");
		}
		if (age < 15) {
			System.out.println("中学生ですね。");
		}
		if (age < 18) {
			System.out.println("高校生ですね。");
		}
		if (age == 20) {
			System.out.println("成人式には行きましたか？");
		}
		else {
			System.out.println("りっぱな大人ですね。");
		}
	}
}