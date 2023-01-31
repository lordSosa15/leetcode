class Main {

    public static int SimpleAdding(int num) {
      // initialize a variable of sum to hold new value
      int sum = 0;
      // for loop to iterate 1 - num adding it to sum
      for(int i = 1; i <= num; i++){
        sum += i;
      }
      // return SUM not num
      return sum;
    }
  
    public static void main (String[] args) {  
      // keep this function call here     
      Scanner s = new Scanner(System.in);
      System.out.print(SimpleAdding(s.nextLine())); 
    }
  
  }