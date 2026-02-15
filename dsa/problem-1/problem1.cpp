#include <bits/stdc++.h>
using namespace std;

void rotate(vector<int>& a, int k) {
    if(k == 0) return;
    int n = a.size();
    k = k % n;
    for(int i=0; i < n/2; i++){
        swap(a[i], a[n - i - 1]);
    }
    for(int i=0; i < k/2; i++){
        swap(a[i], a[k - i - 1]);
    }
    for(int i=k; i < k + (n - k)/2; i++){
        swap(a[i], a[n - (i - k) - 1]);
    }
}