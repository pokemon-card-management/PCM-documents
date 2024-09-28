---
sidebar_position: 1
---

# はじめに

ここは、PokemonCardManagement(PCM)に関するドキュメントの管理サイトです。

## 作った目的

- 何が目的でこの機能を開発しようとしたのか
- なぜ開発にその技術を使うのか
- どのようなバックエンドシステムで構築されているのか

を一まとめにしたかったからです。

## 動かし方

###  パッケージのインストール
```zsh
$ npm i
```

### ローカルホストで動かす
```zsh
$ npm start
```

### ビルド
```zsh
$ npm run build
```

### デプロイ

SSHを使う場合
```zsh
$ USE_SSH=true yarn deploy
```

SSHを使わない場合:
```zsh
$ GIT_USER=<Your GitHub username> yarn deploy
```
