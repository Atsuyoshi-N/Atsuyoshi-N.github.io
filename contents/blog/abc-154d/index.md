---
date: 2020-02-10
title: ABC154D-Dice in Line
description: ABC154D-Dice in Line の累積和を用いた解法について
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
category: '競プロ'
tags: ['AtCoder', 'ABC', 'ABC154', '累積和']
---

## 問題概要

$N$個のサイコロから連続する$K$個選んだときの出る目の合計の期待値の最大値を求めよ。

## 制約

- $1 \leq K \leq 200000$
- $1 \leq K \leq p_i \leq 1000$

[問題へのリンクはこちら](https://atcoder.jp/contests/abc154/tasks/abc154_d)

## 考察

連続する$K$個の期待値の最大値を求めれば良いので、`累積和`を応用してあげると良い。

それぞれの期待値は、

$$
\frac{1}{2}(N+1) \times N \div N = \frac{1}{2}(N+1)
$$

と求められることを使うと良い。

```cpp:title=d.cpp
#include <iostream>
#include <cmath>
#include <algorithm>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
  int N, K; cin >> N >> K;
  vector<double> a(N);
  vector<double> S(N+1, 0.);
  for(int i = 0; i < N; i++) {
    double b; cin >> b;
    a[i] = (b+1) / 2;
    S[i+1] = S[i] + a[i];
  }
  double ans = 0.;
  for(int i = 0; i < N-K+1; i++) {
    ans = max(ans, S[i+K] - S[i]);
  }
  cout << setprecision(10);
  cout << ans << endl;
  return 0;
}
```
