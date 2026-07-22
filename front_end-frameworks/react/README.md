# Agentic AI — Landing Page React

Landing page one-page pour présenter **Agentic AI** : agents autonomes, workflows intelligents et développement assisté par l’IA, dans le cadre de Holberton School.

## Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) (icônes)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (réseaux sociaux)

## Prérequis

- Node.js (version LTS recommandée)
- npm

## Installation

```bash
npm install
```

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement (`0.0.0.0:3000`) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualise le build |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run fix` | Corrige les problèmes ESLint automatiques |
| `npm run deploy` | Déploie sur GitHub Pages (`gh-pages`) |

## Structure du projet

```
src/
├── components/
│   ├── cards/          # FeatureCard, InsightCard, StatCard
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Features, Insights, Contact
│   └── ui/             # Brand, Button, SectionBadge, SectionTitle, SocialLink
├── data/               # Contenu statique (features, insights, steps)
├── services/           # Accès aux données (ex. getInsights)
├── App.jsx
├── main.jsx
└── global.css
public/
├── favicon.svg
└── icons.svg
```

## Sections

1. **Hero** — accroche et CTA
2. **About** — présentation et étapes
3. **Features** — fonctionnalités clés
4. **Insights** — cartes d’articles / insights
5. **Contact** — formulaire de contact

## Déploiement

Le `base` Vite est configuré pour GitHub Pages :

```
/holbertonschool-agentic_ai/front_end-frameworks/react/
```

Pour publier :

```bash
npm run deploy
```
