---
date: 2020-02-23
title: Square869120 B-AtCoder Markets
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
category: '競プロ'
tags: ['AtCoder']
---

## 問題概要

$N$人の買い物客がそれぞれマス$A_i$にある品物とマス$B_i$にある品物を購入する。入り口と出口を設置する時、買い物客は次のように行動する。

- まず入り口からスタートし、マス$A_i, B_i$を経由して、出口でゴールする。

隣り合ったマス目の移動に$1$秒かかる時、最適に入り口と出口を定めた時の「全ての買い物客の移動時間の合計」の最小値を求めよ。

## 制約

- $1 \leq N \leq 30$
- $1 \leq A_i < B_i \leq 1,000,000,000$

[問題へのリンクはこちら](https://atcoder.jp/contests/s8pc-6/tasks/s8pc_6_b)

## 考察

最短となるスタートとゴールの組み合わせは、$A(N), B(N)$それぞれの中央値になる。

したがって、中央値を求め、それらをそれぞれ start, goal とする時、$A_i, B_i$との距離をそれぞれ計算してあげると良い。

それぞれの距離は、$abs(B-A)+abs(start-A)+abs(goal-B)$となる。

```cpp:title=answer.cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int main() {
  int N; cin >> N;
  vector<long long> a(N), b(N);
  long long start, goal;
  for(int i = 0; i < N; i++) {
    cin >> a[i] >> b[i];
  }
  sort(a.begin(), a.end());
  sort(b.begin(), b.end());
  start = a[N/2], goal = b[N/2];
  long long ans=0;
  for(int i = 0; i < N; i++) {
    ans += abs(a[i] - b[i]);
    ans += abs(start-a[i]);
    ans += abs(goal-b[i]);
  }
  cout << ans << endl;
  return 0;
}
```
