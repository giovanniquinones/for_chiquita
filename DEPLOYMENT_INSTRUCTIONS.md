# Deployment Instructions

## Enable GitHub Pages

To deploy this website, you need to enable GitHub Pages in your repository settings:

### Steps to Enable GitHub Pages:

1. Go to your repository on GitHub: `https://github.com/giovanniquinones/for_chiquita`

2. Click on **Settings** (in the repository menu)

3. In the left sidebar, click on **Pages** (under "Code and automation")

4. Under **Source**, select **GitHub Actions** as the deployment source

5. The website will automatically deploy when you push to the main/master branch

6. After the deployment completes, your website will be available at:
   - `https://giovanniquinones.github.io/for_chiquita/`

### Automatic Deployment

Once GitHub Pages is enabled with GitHub Actions as the source:

- Every push to the `main` or `master` branch will trigger an automatic deployment
- You can also manually trigger a deployment from the "Actions" tab
- The deployment workflow is defined in `.github/workflows/deploy.yml`

### Check Deployment Status

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow
3. Click on any workflow run to see the deployment details and logs
4. Once completed successfully, the website will be live

### Testing Locally

To test the website locally before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server -p 8000
   ```
3. Open `http://localhost:8000` in your browser

## Troubleshooting

### If the website doesn't deploy:

1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify that the source is set to "GitHub Actions"
3. Check the Actions tab for any workflow errors
4. Ensure the repository has the correct permissions for GitHub Pages

### If images don't load:

- Make sure all images are in the `images/` directory
- Check that image filenames in `index.html` match the actual files

## Additional Notes

- The website is completely static (HTML, CSS, JS)
- No build process is required
- All dependencies are loaded from CDNs (Google Fonts)
- Images are stored directly in the repository
