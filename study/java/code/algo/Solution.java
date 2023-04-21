
class Solution {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split(" ");
        for(int i = 0; i < arr.length; i++){
            String w = arr[i];
            
            if(w.length() == 0){
                answer += " ";
            }else{
                answer += w.substring(0, 1).toUpperCase();
                answer += w.substring(1, w.length()).toLowerCase();
                answer += " ";
            }
            
            if (s.substring(s.length() - 1, s.length()).equals(" ")){
                return answer;
            }
            
        }
        return  answer.substring(0, answer.length()-1);
    }
}