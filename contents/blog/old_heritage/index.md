---
date: 2020-02-22
title: JOI2006/2007 最古の遺跡
description: JOI2006/2007 最古の遺跡 の二分探索を用いた解法について
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
category: '競プロ'
tags: ['AtCoder', 'JOI', '全探索', '二分探索']
---

## 問題概要

複数の座標が与えられ、それらの座標を結んでできる正方形のうち面積最大となるものの面積を求めよ。

## 制約

- $1\leq n \leq 3000$
- $0 \leq x, y \leq 5000$

[問題へのリンクはこちら](https://www.ioi-jp.org/joi/2006/2007-ho-prob_and_sol/2007-ho.pdf#page=5)

## 考察

解説通り二分探索で通している人が少なかったため、解説を残します。

まず、愚直に、$4$点を全列挙する方法が浮かぶと思いますが、$O(N^4)$かかります。今回の制約では、$N \leq 3000$となっているのでこのままだと通りません。
したがって、正方形の性質をうまく活用することで、計算量を落とすことを考えます。

正方形は、$2$点$A(x_1, y_1), B(x_2, y_2)$が定まると、残りの$2$点を求めることが可能です。

具体的には、上のような点$A, B$があるとき、

$$
C(x2-y2+y1, y2+x2-x1) \\
D(x1-y2+y1, y1+x2-x1)
$$

となります。つまり、残り$2$点の候補を全ての 2 点の組み合わせから調べ、候補が元の配列の中に含まれていれば良いということになります。

今回は、含まれているかどうかの判定に二分探索を使用しています。使用するために予め配列を sort しておきます。

以下がサンプルコードです。

```cpp:title=sample.cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
typedef pair<int, int> P;

int main() {
  int n; cin >> n;
  vector<P> p(n);
  for(int i = 0; i < n; i++) {
    cin >> p[i].first >> p[i].second;
  }
  sort(p.begin(), p.end());
  int ans = 0;
  for(int i = 0; i < n; i++) {
    for(int j = i+1; j < n; j++) {
      int xi, yi; xi = p[i].first, yi = p[i].second;
      int xj, yj; xj = p[j].first, yj = p[j].second;
      int xdif, ydif; xdif = xi - xj; ydif = yi - yj;
      P q = make_pair(xi + ydif, yi - xdif);
      P r = make_pair(xj + ydif, yj - xdif);
      if(binary_search(p.begin(), p.end(), q) && binary_search(p.begin(), p.end(), r)) {
        ans = max(ans, xdif*xdif + ydif*ydif);
      }
    }
  }
  cout << ans << endl;
  return 0;
}
```
