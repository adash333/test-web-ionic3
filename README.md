# Rails5 APIと通信するIonic3アプリtest-web-ionic3 (Rails5 APIサーバとセット)

Rails5 API + ionic3によるアプリの例の、Ionic3の方のコードです。

詳細は以下  
Rails5＠HerokuとIonic3アプリで通信  
http://twosquirrel.mints.ne.jp/?p=18600

Rails5APIサーバのコードは、以下のリンク  
https://github.com/adash333/rails5_test_api

## Requirement

- Node.js 6.11.0
- Ionic CLI 3.4.0

## Installation

    $ git clone https://github.com/adash333/test-web-ionic3.git
    $ cd test-web-ionic3
    $ npm install
    $ ionic serve

androidアプリの作成(ionic-cli version3.xの場合、通常はこちら)

    $ ionic cordova platform add android
    $ ionic cordova build android

エラーが出てうまくいかない場合は、エラーの内容をGoogle検索したり、  
http://qiita.com/567000/items/dc4917027cf060a3e2ea  
を参考になさったりしてください。  

## Anything Else

このコードは、以下のサイトのソースコードを参考にしています。

angular4とrails5をスッと使ってみる  
kanadai  
2017年05月06日に更新  
http://qiita.com/kanadai/items/0034f0c0fe26efab2f2b

## Author

adash333
