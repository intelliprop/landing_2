# Build and push Docker image to Azure Container Registry
# Make sure Docker Desktop is running before executing this script

Write-Host "Building Docker image..." -ForegroundColor Green
docker build -t intellipropacr.azurecr.io/landing:1.0.0 .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker build failed. Make sure Docker Desktop is running." -ForegroundColor Red
    exit 1
}

Write-Host "`nLogging into Azure Container Registry..." -ForegroundColor Green
az acr login --name intellipropacr

if ($LASTEXITCODE -ne 0) {
    Write-Host "ACR login failed. Make sure you're logged into Azure CLI." -ForegroundColor Red
    Write-Host "Run: az login" -ForegroundColor Yellow
    exit 1
}

Write-Host "`nPushing image to ACR..." -ForegroundColor Green
docker push intellipropacr.azurecr.io/landing:1.0.0

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Successfully pushed to intellipropacr.azurecr.io/landing:1.0.0" -ForegroundColor Green
} else {
    Write-Host "`nPush failed." -ForegroundColor Red
    exit 1
}

