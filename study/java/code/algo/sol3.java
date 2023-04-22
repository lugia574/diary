
class sol3
{
    public int solution(int n, int a, int b)
    {
        int answer = 0;
        float A = (float) a;
        float B = (float) b;
        for(int i = 0; i < n; i++) {
			A = Math.round(A/2.0);
			B = Math.round(B/2.0);
			answer ++;
			if (A == B) break;
		}
        return answer;
    }
}

