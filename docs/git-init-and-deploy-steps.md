# Git Init & Deploy Steps

## Git setup
Run inside the project:

```sh
git init
git add .
git commit -m "Initial Synthetic Minds website MVP"
```

Then create a GitHub repo and connect it:

```sh
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Vercel deploy
After pushing the repo:
1. Import project into Vercel
2. Add environment variables
3. Deploy
4. Test contact form on production
