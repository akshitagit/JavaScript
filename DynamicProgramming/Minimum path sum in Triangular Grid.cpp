int f(int i, int j, int &n, vector<vector<int>> &t, vector<vector<int>> &dp){
    if(i >= n)
        return 0;
    if(dp[i][j] != -1)
        return dp[i][j];
    return dp[i][j] = t[i][j] + min(f(i+1, j, n, t, dp), f(i+1, j+1, n, t, dp));
}
int minimumPathSum(vector<vector<int>>& triangle, int n){
	vector<int> dp(n, 0);
    for(int i=0; i<n; ++i){
        dp[i] = triangle[n-1][i];
    }
    for(int i=n-2; i>=0; --i){
        for(int j=0; j<=i; ++j){
            dp[j] = triangle[i][j] + min(dp[j], dp[j+1]);
        }
    }
    return dp[0];
}