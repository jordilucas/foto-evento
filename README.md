# FotoEvento — Protótipo navegável

Marketplace de venda de fotos de eventos (estilo Banlek). Projeto **separado** do Transparência Canindé.

## Rodar localmente

```bash
cd /Users/jordilucas/AndroidStudioProjects/foto-evento
npm install
npm run dev
```

Abra **http://localhost:5173** no navegador.

## Fluxo para testar

1. **Início** → Ver eventos
2. Escolha um evento → Álbum → Selecione fotos (marca d'água simulada)
3. Carrinho → Checkout (Pix ou cartão simulado) → Página de sucesso
4. **Sou fotógrafo** → Painel, upload e vendas

## Publicar na web

### GitHub Pages (automático)

Push na branch `main` dispara o workflow e publica em:

**https://jordilucas.github.io/foto-evento/**

### Vercel (alternativa)

```bash
npx vercel login
npx vercel --prod
```

## Stack

- Vite + React + TypeScript
- React Router
- Tailwind CSS v4
