# STUDY CALENDAR

自分の勉強時間を可視化するアプリです。  
勉強の予定を立てることができます。

Ruby on Rails & REACT の Web アプリケーションです。  
フロントを REACT で作成して、SPA 化しました。  
Rails の Devise を使用してログイン機能を実装しています。  
(Ruby on Rails & REACT, CRUD, SPA)
デザインは react-icons と styled-components で作成した。

URL : [http://54.168.99.68/](http://54.168.99.68/)  
Github : [https://github.com/hama404/study_calendar](https://github.com/hama404/study_calendar)

## メモ

gem devise_token_auth で web api の認証機能を実装していて、  
現在はとりあえず認証のトークンを localStrage で管理しているのだが、  
どこに保存するのが最適なのかを考える。

javascript で closest を使用しているので、IE に対しいていません。

- resdux の実装

- material ui の実装

## 使用技術

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

- MariaDB

- Nginx

- Unicorn

- AWS

  - VPC
  - EC2

## 実装した機能

- 勉強時間投稿、編集、削除

- ログイン認証

- REACT

  - カレンダー表示
  - 円グラフ

## パッケージ

- axios

- react-router-dom: ^5.2.0

- react-calendar"

- chart.js: ^2.9.4

- react-chartjs-2

- chart.piecelabel.js

- react-icons

- styled-components
