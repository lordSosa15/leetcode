public static String FirstReverse(String str) {
    // code goes here  

    q// use StringBuilder to concat
    // StringBuilder reversedString = new StringBuilder();
        // loop
    // for(int i = str.length()- 1; i >= 0; i--){
    //   reversedString.append(str.charAt(i));
    // }
        // turn i into a string
    // return reversedString.toString();
    StringBuffer rsb = new StringBuffer(str);

    return rsb.reverse().toString()
  }




  