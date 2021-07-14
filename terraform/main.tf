data "aws_s3_bucket" "selected" {
  bucket = "study-calendar"
}

resource "aws_key_pair" "key" {
  key_name   = "portfolio-key"
  public_key = file("./portfolio.rsa.pub")
}
