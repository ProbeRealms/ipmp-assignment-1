#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& a) {
    int n = a.size();
    vector<int> bits(32);
    vector<int> negbits(32);
    for(int i=0; i<n; i++){
        if(a[i] >= 0){
        for(int j=0; j<32; j++){
            if(a[i] & (1 << j)){
                bits[j]++;
            }
        }
        }else{
            long long x = abs(1LL*a[i]);
            for(int j=0; j<32; j++){
                if(x & (1 << j)){
                    negbits[j]++;
                }
            }
        }
    }

    long long ans = 0;
    for(int i=0; i<32; i++){
        if(negbits[i] % 3){
            ans += powl(2, i);
        }
    }
    if(ans){
        return -ans;
    }
    for(int i=0; i<32; i++){
        if(bits[i] % 3){
            ans += pow(2, i);
        }
    }
    
    return ans;
}