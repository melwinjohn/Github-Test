# How to Create Pull Request

## Current Status
✅ Created main branch with 3 commits  
✅ Created Test-feature branch with 2 additional commits  
✅ Test-feature is 2 commits ahead of main

## To Create the PR:

### Option 1: Using GitHub CLI (if installed)
```powershell
gh repo create Github-Test --public
git push -u origin main
git push origin Test-feature
gh pr create --base main --head Test-feature --title "Add mathematical operations feature"
```

### Option 2: Using GitHub Web Interface

1. **Create a new repository on GitHub:**
   - Go to: https://github.com/new
   - Name it: `Github-Test`
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Github-Test.git
   git push -u origin main
   git push origin Test-feature
   ```

3. **Create the Pull Request:**
   - After pushing, GitHub will show a banner saying "Test-feature had recent pushes"
   - Click "Compare & pull request"
   - Or go directly to: https://github.com/YOUR_USERNAME/Github-Test/compare/main...Test-feature
   - Add a title: "Add mathematical operations feature"
   - Add description about the changes
   - Click "Create pull request"

## What's in the Test-feature branch?
- Added `feature.js` with multiply and subtract functions
- Updated `package.json` with new scripts and version bump
- Updated README with new features list

