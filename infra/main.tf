provider "aws" {
  region = "us-east-1"
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "app_bucket" {
  bucket = "sandbox-devops-cbkremer-${random_id.suffix.hex}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

output "bucket_name" {
  value = aws_s3_bucket.app_bucket.id
}
