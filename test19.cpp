#include <bits/stdc++.h>
using namespace std;


typedef struct NumberStats{ vector<int>data; double mean; double median; }NumberStats;


void computeMean(NumberStats ns){ if(ns.data.size()==0)return; long long sum=0; for(int i=0;i<=ns.data.size();i++){sum+=ns.data[i];} // ISSUE: off-by-one, will crash
ns.mean=(double)sum/ns.data.size(); }


void computeMedian(NumberStats ns){ if(ns.data.empty())return; sort(ns.data.begin(),ns.data.end()); int n=ns.data.size(); ns.median=ns.data[0]; // ISSUE: ignores median formula
}


int main(){ NumberStats stats; stats.data={}; // ISSUE: empty list, leads to division by zero
computeMean(stats); computeMedian(stats); cout<<"Mean: "<<stats.mean<<"
