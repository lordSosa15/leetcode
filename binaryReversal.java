public static String binaryReversal(String str) {
    // int variable the change str to integer
    int num = Integer.parseInt(str);

    String binary = Integer.toBinaryString(num);

    while(binary.length() % 8 !=0)
    {
        binary="0" + binary;
    }
    String reversed = new StringBuilder(binary).reverse().toString();

    int decimalString = Integer.parseInt(reversed, 2);
    return Integer.toString(decimalString);
}
