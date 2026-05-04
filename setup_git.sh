#!/bin/bash
# Remove all .env files
rm -f .env*

# Initialize git
git init

# 1. Update README and make first commit
echo "# B13-A8" >> README.md
git add README.md
git commit -m "first commit"
git branch -M main

# 2. Config files
git add package.json package-lock.json next.config.mjs postcss.config.mjs eslint.config.mjs jsconfig.json
git commit -m "Initialize project with Next.js and config files"

# 3. Base styles and layout
git add app/globals.css app/layout.js
git commit -m "Add public assets and global styles"

# 4. Lib and database
git add lib/
git commit -m "Set up database connection and auth lib"

# 5. UI Components
git add app/components/
git commit -m "Create UI components (Navbar, Footer, TileCard)"

# 6. Home page
git add app/page.js app/not-found.js
git commit -m "Develop Home page and layout"

# 7. Auth pages
git add app/login/ app/register/
git commit -m "Implement Auth pages (Login, Register)"

# 8. Profile pages
git add app/my-profile/
git commit -m "Build Profile update functionality"

# 9. API Routes
git add app/api/
git commit -m "Add API routes for authentication and tiles"

# 10. Remaining features and polish
git add app/all-tiles/ app/tile/ data/ proxy.js
git commit -m "Final polish and responsiveness fixes"

# 11. Catch-all for any stragglers
git add .
git commit -m "chore: ensure all files are tracked and formatted"

git remote add origin https://github.com/mahmudunnabifahim29/B13-A8.git
git push -u origin main
