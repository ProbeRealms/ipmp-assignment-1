#include <bits/stdc++.h>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    vector<int> a;
    int n = nums2.size();
    int m = nums1.size();
    for(int i=0; i<m; i++){
        a.push_back(nums1[i]);
    }
    for(int i=0; i<n; i++){
        a.push_back(nums2[i]);
    }
    sort(a.begin(), a.end());
    int nx = a.size();
    if(nx & 1){
        return a[nx/2];
    }else{
        return (double)(a[nx/2] + a[nx/2 - 1])/2;
    }
}