/** security group **/
resource "aws_security_group" "ec2-sg" {
  name        = "ec2-sg"
  description = "portfolio ec2 security group"
  vpc_id      = aws_vpc.main.id

  tags = {
    Name = "portfolio-ec2-sg"
  }
}

resource "aws_security_group_rule" "web" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.ec2-sg.id
}

resource "aws_security_group_rule" "ssl" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.ec2-sg.id
}

resource "aws_security_group_rule" "ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.ec2-sg.id
}

resource "aws_security_group_rule" "all" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.ec2-sg.id
}

/** ec2 **/
data "aws_ami" "amzn2" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "state"
    values = ["available"]
  }
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-2.0.*"]
  }
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.amzn2.image_id
  instance_type = "t2.micro"

  vpc_security_group_ids      = [aws_security_group.ec2-sg.id]
  subnet_id                   = aws_subnet.public-1a.id
  key_name                    = aws_key_pair.key.id
  associate_public_ip_address = "true"

  tags = {
    Name = "study-calendar"
  }
}
