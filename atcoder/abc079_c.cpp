#include <iostream>

using namespace std;

int main(void) {
	int in;
	cin >> in;
	int a = in / 1000, b = in / 100 % 10, c = in / 10 % 10, d = in % 10;

	int tb, tc, td;
	int i;

	for(i = 0 ; i < (1<<3); i ++) {
		tb = ((i >> 2) % 2 ? 1 : -1) * b;
		tc = ((i >> 1) % 2 ? 1 : -1) * c;
		td = ((i >> 0) % 2 ? 1 : -1) * d;

		if (a + tb + tc + td == 7){
			cout<<a;
			cout<<(tb > 0 ? "+" : "-")<<b;
			cout<<(tc > 0 ? "+" : "-")<<c;
			cout<<(td > 0 ? "+" : "-")<<d;
			cout<<"=7"<<endl;
			break;
		}
	}
}
