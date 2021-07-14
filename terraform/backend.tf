terraform {
  required_version = "0.12.31"
  backend "s3" {
    bucket  = "study-calendar"
    region  = "ap-northeast-1"
    profile = "terraform"
    key     = "network/terraform.tfstate"
  }
}

provider "aws" {
  version = "2.69.0"
  region  = "ap-northeast-1"
  profile = "terraform"
}
