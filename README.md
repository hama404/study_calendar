# STUDY CALENDAR

自分の勉強時間を可視化するアプリです。  
勉強の予定を立てることができます。

URL : [http://54.168.99.68/](http://54.168.99.68/)  
Github : [https://github.com/hama404/study_calendar](https://github.com/hama404/study_calendar)

## 機能一覧

- ログイン、ログアウト機能

- 勉強時間の一覧、追加、編集、削除

- 一日の勉強時間の割合をグラフ化

- REACT を使用して SPA 化

- 本番環境

  - aws ec2, nginx と unicorn と mysql でサーバーを作成

## メモ

- improve design

  - styled-button for component recycle
  - responsive design
  - loading animation
  - ~~devise login page~~
  - ~~implement test user~~

- message component

  - ~~改行の反映~~
  - 複数のメッセージに対応
  - error メッセージ対応、色の変更

- javascript polyfill、IE への対応

  - closest

gem devise_token_auth で web api の認証機能を実装していて、  
現在はとりあえず認証のトークンを localStrage で管理しているのだが、  
どこに保存するのが最適なのかを考える。

## 詳細

Ruby on Rails & REACT の Web アプリケーションです。  
フロントを REACT で作成して、SPA 化しました。  
Rails の Devise を使用してログイン機能を実装しています。  
インフラは aws ec2 を使用して nginx と unicorn でサーバーを構築しました。

デザインは react-icons と styled-components で作成し、  
git はコマンドライン使用していたのだが sourcetree を導入してみた。

### 使用技術

- Ruby 2.7.0

- Ruby on Rails 6.1.3

  - Web API
  - Webpacker
  - Devise

- REACT

  - React Hooks
  - axios
  - react-router-dom
  - chart.js
  - react-calendar
  - react-icons
  - styled-components
  - html-react-parser

- MariaDB

- Nginx

- Unicorn

- AWS

  - VPC
  - EC2

### 実装した機能

- 勉強時間投稿、編集、削除

- ログイン認証

- REACT

  - カレンダー表示
  - 円グラフ

### パッケージ

- axios

- react-router-dom: ^5.2.0

- react-calendar"

- chart.js: ^2.9.4

- react-chartjs-2

- chart.piecelabel.js

- react-icons

- styled-components

- html-react-parser
