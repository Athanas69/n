# Mondo × Atlas — North Star V6

Cette version matérialise le produit cible dans une seule SPA statique déployable sur Vercel.

## Mondo
- Accueil émotionnel
- Explorer des voyages
- Créer un voyage
- Demander à rejoindre
- Trip Room
- Decision Room
- Discussion
- Budget partagé
- Réservations
- Passage direct dans Atlas

## Atlas
- Accueil premium
- 10 guides villes
- Quartiers illustrés
- Hôtels en 3 gammes
- Vols
- Transport et aéroport
- eSIM
- Articles intelligents
- Before You Go
- First 24h
- Alfred Rescue
- Sources / statuts d’information

## Données
`data.json` contient les villes, quartiers, hôtels de démonstration et le voyage exemple.

## Important
Les hôtels, prix de vols, prix eSIM et certains contenus transport sont des données de démonstration.
Avant mise en production commerciale, connecter :
- Auth + DB (Supabase/Postgres)
- Booking.com Demand API ou autre inventaire hôtel
- API vols
- partenaire eSIM
- CMS
- sources officielles visa / transport
- messagerie temps réel
- paiements / redirections affiliées

## Déploiement Vercel
Projet statique :
- aucun `vercel.json`
- aucun build requis
- Framework Preset : Other
- `index.html`, `app.js`, `styles.css`, `data.json` doivent être à la racine du dépôt

## Philosophie
Mondo = avec qui et comment on organise.
Atlas = comprendre, préparer et réserver.
Alfred = cohérence invisible entre les deux.
