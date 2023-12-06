# 入門者向けアプリ

## URLs

- [アプリケーション: https://localhost:3000/](https://localhost:3000/)

## 環境構築の手順

### 1. コンテナの立ち上げ

以下コマンドを実行し、プログラムを動かすためのコンテナを立ち上げる

```
make up
```

### 2. コンテナのシステムにログインする

1 で立ち上げたコンテナにログインするため、以下のコマンドを実行する

```
make bash
```

こちらのコマンドを実行して、ご自身のターミナルの表記が `nodeuser@cd649f7d8d99:/var/www$` のようになっていればログイン成功です。

※ **cd649f7d8d99** の部分はランダムで設定されるため、文字列が一致していなくても問題はありません。

### 3. アプリケーションに必要なプログラムをインストールする

コンテナへのログインが完了したら、以下コマンドを実行してコンテナのシステムにプログラムをインストールしてください。

```
nodeuser@cd649f7d8d99:/var/www$ npm ci
```

※ コンテナにログインしている状態で実行する必要があります。

### 4. データベースの作成をする

アプリで使用するデータベースを作成します。
本アプリではデータベースを用意するためのコードはすでに作成済みなので、以下のコマンドを実行してください。

```
nodeuser@cd649f7d8d99:/var/www$ npm run migrate
```

上記が成功したら、今度は下記のコマンドを実行してください。

```
nodeuser@cd649f7d8d99:/var/www$ npm run seed
```

### 5. アプリケーションを起動する

プログラムのインストールが完了したら、以下コマンドを実行してコンテナのシステム上でアプリケーションを起動してください。

```
nodeuser@cd649f7d8d99:/var/www$ npm run dev
```

※ コンテナにログインしている状態で実行する必要があります。

### 6. ブラウザでアプリケーションにアクセスする

次のURL http://localhost:3000 を Chromeなどのブラウザに入力し、表示させてください。

## よくある質問

### コンテナからログアウトするにはどうすればいいですか？

`exit` コマンドを実行してください。

### 作業を中断するためにコンテナを停止させるにはどうすればいいですか？

以下のコマンドを実行することでコンテナを停止させることができます。

```
make stop
```

一度停止したあとでも `make up` を再度実行することでコンテナを再度立ち上げることができます。<br>
再度立ち上げたあとは「2. コンテナのシステムにログインする」「4. アプリケーションを起動する」の手順を実行することで、<br>
再度ブラウザでアプリを動かすことができます。

※ 「3. アプリケーションに必要なプログラムをインストールする」については初回のみ必要な作業になるため、<br>
2回目以降は特に実行する必要はありません。

### コンテナを削除したい場合はどうすればいいですか？

以下のコマンドを実行することでコンテナを削除することができます。

```
make destroy
```

コンテナを削除する判断がわからない場合は講師にお問い合わせください。

### git コマンドを実行しようとするとエラーとなります。

自分が現在、コンテナにログインしている状態なのかどうかを確認してみてください。<br>
コンテナはアプリケーションを動かすためシステムとなっているため、 git コマンドは実行できません。<br>
ログインしてしまっている場合は `exit` コマンドを実行してログアウトするか、別ウィンドウで新たにターミナルを起動して実行してみてください。
