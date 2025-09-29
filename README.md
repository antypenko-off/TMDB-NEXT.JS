# TMDB-NEXT.JS
A small application on **Next.js + TypeScript** for viewing films from TMDB.

```bash
# 1) Install dependencies
    npm install          # or pnpm install / yarn

# 2) Create .env with TMDB key (if there is not)
    cp .env.local.test .env.local # if the file does not exist, create it manually (see below)

# 3) Start dev server
    npm run dev          # and go to http://localhost:3000

```
# .env.local content 
(if even no .env.local.test showed up)

```
TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzBmNDhiYTMyNTAzNTE1YjViYjU3YzY3MWEyYmJmZSIsIm5iZiI6MTc1NTc1MTU5OS4xOCwic3ViIjoiNjhhNmE0YWY2ODRkNmFjYWY4YTgxYjgyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GX3NgZLYBbaybqVEgipOQGH4kU6nOTuDmtMLrKNkIl4
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_URL=https://image.tmdb.org/t/p/
```