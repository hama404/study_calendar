# STUDY CALENDAR

自分の勉強時間を可視化するアプリです。  
勉強の予定を立てることができます。

URL : [http://study-calendar.tk/](http://study-calendar.tk/)  
Github : [https://github.com/hama404/study_calendar](https://github.com/hama404/study_calendar)

## 機能一覧

- ログイン、ログアウト機能

  - devise, devise-token-auth を使用して、web api 認証

- 勉強時間の一覧、追加、編集、削除

- 一日の勉強時間の割合をグラフ化

- REACT を使用して SPA 化

- 本番環境

  - aws ec2, nginx と unicorn と mysql でサーバーを作成

## 詳細

Ruby on Rails & REACT の Web アプリケーションです。  
フロントを REACT で作成して、SPA 化しました。  
Rails の Devise を使用してログイン機能を実装しています。  
インフラは aws ec2 を使用して nginx と unicorn でサーバーを構築しました。

デザインは react-icons と styled-components で作成し、  
git は CLI と sourcetree で管理をした。

github issue の活用、circleci の導入、  
docker-compose で、frontend と backend を分けて環境構築しています。

[test-app](https://github.com/hama404/divide-dev-server) で環境構築をしていて、  
設定の記述から作成して使用することができます。

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

  - VPC, subnet
  - EC2
  - RDS, S3
  - IAM, iam role

### 実装した機能

- 勉強時間投稿、編集、削除

- ログイン認証

- REACT

  - カレンダー表示
  - 円グラフ

### gem

- rspec test

  - 'rspec-rails', '~> 4.1.0'
  - 'factory_bot_rails'
  - 'faker'

- rubocop

  - 'rubocop', require: false
  - 'rubocop-rails'

- devise authentication

  - 'devise', '4.7.3'
  - 'devise_token_auth'

### パッケージ

- axios

- react-router-dom: ^5.2.0

- react-calendar

- chart.js: ^2.9.4

- react-chartjs-2

- chart.piecelabel.js

- react-icons

- styled-components

- html-react-parser
