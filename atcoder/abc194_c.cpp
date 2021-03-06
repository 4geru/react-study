#include <iostream>
#include <set>
#include <vector>

using namespace std;

int main(void)
{
    int n;
    cin >> n;
    long a;
    long sum = 0;
    long sum1 = 0;
    for (long i = 0; i < n; i++)
    {
        cin >> a;
        sum += a;
        sum1 += a * a;
    }
    cout << n * sum1 - sum * sum << endl;
    return 0;
}
