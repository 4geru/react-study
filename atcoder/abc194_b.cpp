#include <iostream>
#include <vector>

using namespace std;

int main(void)
{
    int n;
    cin >> n;
    vector<int> a(n), b(n);

    int ans = 200000;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i] >> b[i];
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == j)
            {
                int task = a[i] + b[j];
                ans = ans > task ? task : ans;
                continue;
            }

            int task = a[i] > b[j] ? a[i] : b[j];
            ans = ans > task ? task : ans;
        }
    }

    cout << ans << endl;
}
