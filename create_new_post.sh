#!/bin/bash

if [[ $1 = "" ]]; then
  echo "フォルダ名を入力してください"
  exit 1
fi

DATE=$(date "+%Y-%m-%dT%H:%M:%S+09:00")

mkdir -p contents/blog/$1

cat << EOF >> contents/blog/$1/index.md
---
date: $DATE
title:
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
category:
tags:
---
EOF
