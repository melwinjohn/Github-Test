# Script to push repository to GitHub and create PR
param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername
)

Write-Host "`n=== Pushing to GitHub ===" -ForegroundColor Cyan

# Add remote
git remote add origin "https://github.com/$GitHubUsername/Github-Test.git"

# Push main branch
Write-Host "`nPushing main branch..." -ForegroundColor Yellow
git push -u origin main

# Push Test-feature branch
Write-Host "`nPushing Test-feature branch..." -ForegroundColor Yellow
git push origin Test-feature

Write-Host "`n✓ Successfully pushed both branches!" -ForegroundColor Green
Write-Host "`nCreate Pull Request at:" -ForegroundColor Cyan
Write-Host "https://github.com/$GitHubUsername/Github-Test/compare/main...Test-feature" -ForegroundColor Yellow

