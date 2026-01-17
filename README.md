# json解析

## 概要
deno + honoによるapiお試しプロジェクト  
渡されたjsonを解析して、結果を返却する

## テスト
deno test
または
~~~
deno serve main.ts
curl -X POST -H  "Content-Type: application/json" -d '{"message1":"hello","message2":"konichiwa"}' http://localhost:8000/ ; echo
~~~