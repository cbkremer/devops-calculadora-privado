provider "aws" {
  region = "us-east-1"
}

# Generate a random suffix
resource "random_id" "rand" {
  byte_length = 4
}

# S3 bucket with random suffix
resource "aws_s3_bucket" "app_bucket" {
  bucket = "sandbox-devops-cbkremer-${random_id.rand.hex}"

  # Prevent accidental destroy
  lifecycle {
    prevent_destroy = true
  }
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.app_bucket.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "error.html"
  }
}

# Public read policy
resource "aws_s3_bucket_policy" "public_policy" {
  bucket = aws_s3_bucket.app_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.app_bucket.arn}/*"
      }
    ]
  })
}

# Output the bucket name for GitHub Actions
output "bucket_name" {
  value = aws_s3_bucket.app_bucket.bucket
}
