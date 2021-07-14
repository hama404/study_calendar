/** vpc **/
resource "aws_vpc" "main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "portfolio"
  }
}

/** subnet **/
resource "aws_subnet" "public-1a" {
  vpc_id            = aws_vpc.main.id
  availability_zone = "ap-northeast-1a"
  cidr_block        = "10.0.1.0/24"

  tags = {
    Name = "portfolio-public-1a"
  }
}

/** internet gateway **/
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "portfolio-igw"
  }
}

/** route table **/
resource "aws_route_table" "rtb" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "portfolio-rtb"
  }
}

resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.public-1a.id
  route_table_id = aws_route_table.rtb.id
}
