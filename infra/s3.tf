resource "aws_s3_bucket" "bucket" {
  bucket = "${local.bucket}"
  acl    = "private"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = [
      "http://localhost:8080",
      "https://www.codesoom.com",
      "https://codesoom.com"
    ]
    max_age_seconds = 3000
  }
}
