# A tour of Go

Go向けのtutorialサイトです。
オンラインで簡単にできます。
ref: https://go-tour-jp.appspot.com/list

## ローカルでのGoの実行方法
コマンドラインでコンパイル & 即時実行する方法

```
go run xxx.go
```

コンパイルし、実行ファイルを生成する。実行ファイルを実行する方法

```
go build xxx.go
./xxx
```

## basic memo
- importsはまとめることができる

- fmt.Printfのフォーマットの方法

```go
  fmt.Printf("%v %v %v %q\n", i, f, b, s)
```

- 無限ループ

```
for {
  fmtPrintf("ok")
}
```

- ifの条件式で定義した変数はelseの中でも使える

- defer はreturnが走った後に走る。下から順番に実行される


## 参考文献
[ビルド・実行する - はじめてのGo言語](http://cuto.unirita.co.jp/gostudy/post/first-run/)

## go get って何？