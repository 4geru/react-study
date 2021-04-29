#include <iostream>
#include <vector>

using namespace std;

int main(void)
{
    int n;
    cin >> n;

    int ret = 0, prev = 0, now, c = 0;
    for (int i = 0; i < n; i++)
    {
        cin >> now;
        if (prev >= now)
            c++;
        else
            ret = (ret > c ? ret : c), c = 0;
        prev = now;
    }
    ret = (ret > c ? ret : c);
    cout << ret << endl;
}
