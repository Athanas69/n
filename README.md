# Mondo × Atlas

Plateforme de voyage combinant Mondo (organisation de voyage en groupe) et Atlas (guides de destination, hôtels, vols).

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- CSS custom (pas de framework utilitaire) — voir `src/app/globals.css`
- Déployé sur [Vercel](https://vercel.com)

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — routes (App Router). `mondo/` et `atlas/` sont deux sections avec leur propre nav.
- `src/components/` — composants partagés (Nav, Footer, cartes, panneau Alfred, toast).
- `src/lib/data.ts` — couche d'accès aux données (actuellement lue depuis `src/data/mondo-atlas.json`).
- `src/data/mondo-atlas.json` — données de démonstration : villes, quartiers, hôtels, voyage exemple.
- `legacy/mondo-atlas-north-star-v6/` — prototype statique HTML/JS d'origine (conservé pour référence, non déployé).

## État actuel

Ceci est toujours une démonstration produit ("North Star") : aucune donnée n'est persistée, aucun compte n'est réel,
aucune réservation n'est réelle. Toutes les actions de réservation/paiement affichent un toast "à connecter".

## Prochaines étapes (roadmap)

1. **Base de données + Auth** (Supabase/Postgres) — remplacer `src/data/mondo-atlas.json` par de vraies tables,
   ajouter l'authentification et de vrais profils utilisateurs.
2. **Mondo fonctionnel** — création de voyage, demandes pour rejoindre, Trip Room persistée (décisions, chat, budget).
3. **Réservations réelles** — intégrer une API hôtels (ex. Booking.com Demand API), une API vols, un partenaire eSIM.
4. **Paiements** — Stripe ou redirections affiliées selon le modèle économique choisi.
5. **CMS éditorial** — pour les articles/guides villes, aujourd'hui statiques.
