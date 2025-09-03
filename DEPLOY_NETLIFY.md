# Deploy no Netlify

## Passo a Passo:

1. **Acesse**: https://netlify.com
2. **Login** com sua conta GitHub
3. **New site from Git** → GitHub → `franciscasouza/Maria-Paz`
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Environment variables**:
   - `GEMINI_API_KEY` = `AIzaSyA8aytFeNmV2OKtpScOeHcKWsWeBkO1pQ0`
6. **Deploy site**

## Configuração de Redirects:
Crie um arquivo `_redirects` na pasta `public/`:
```
/*    /index.html   200
```

## URL final:
`https://maria-paz-franciscasouza.netlify.app`
