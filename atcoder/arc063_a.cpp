#include <iostream>

using namespace std;

int main(void) {
  string s;
  cin>>s;
  int result = 0;
  char prev = s[0];
  for(int i = 1; i < s.size(); i ++) {
    if(prev != s[i]) {
      result ++;
      prev = s[i];
    }
  }
  cout<<result<<endl;
}
