#!/bin/bash

if [ $1 = '' ]; then
  echo "ファイル名を入力してください"
fi

DATE=$(date "+%Y-%m-%d")

cat << EOF >> contents/blog/$1
---
date: $DATE
title:
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
tags:
---
EOF
