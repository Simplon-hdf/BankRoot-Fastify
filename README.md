<h1 align="center">Welcome to Bank Root 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) 

## Contexte
Vous êtes développeur junior au sein du service informatique d’une enseigne bancaire nommée Bank Root.
Le coeur de cible de cette banque était jusqu’à maintenant de proposer des services bancaires sur site.
Elle souhaite maintenant diversifier sa clientèle, entrer de plein pied dans l’ère du numérique ( kek …) et (ENFIN) proposer à ses usagers un service bancaire en ligne renouvelé afin d’attirer de nouveaux utilisateurs et moderniser son offre.
La mission de votre équipe est de concevoir une application qui permet à votre employeur la gestion de ses comptes bancaires en ligne dans un premier temps et dans un second temps de proposer des services de gestion bancaire à vos clients (dépôts, virements, etc …).

## Critères de performance
Une API fonctionnelle doit être fournie avec la possibilité que :
- A chaque client correspond un compte avec un numéro unique (one to many)
- Chaque compte peut être débiteur ou créditeur
- Chaque compte peut faire des retraits ou dépôts
- Des transactions peuvent être effectuer entre tous les comptes via un formulaire, les montants doivent être correctement réaffectés.
- Un dashboard permet de voir le listings de tous les comptes avec leur soldes
- Chaque compte doit avoir une page avec les transactions

Technos utilisées :
 - Database : PostgreSQL
 - ORM Prisma ou celui fourni de base par le framework de votre choix
 - Framework : selon choix du groupe (Nest, Fastify, Koa ou AdonisJS)
 - Moteur de templating : selon le framework (Pug, EJS, etc …)

Optionnel :
- 2 types de comptes : admin et client
- Chaque client aura son espace dédié
- Pour chaque compte le client peut cliquer sur un lien pour demander la suppression de son compte (validée uniquement par un admin).
- Pour chaque compte le client peut via un formulaire faire un retrait d’argent.
- Pour chaque compte le client peut via un formulaire faire virement vers un autre compte
- Pour chaque compte le client peut via un formulaire faire un dépôt d’argent
- Option : Le crédit est validé par un admin

## Install

```sh
cd back-end
npm install
npm run dev
```

## Author

👤 **Hamid Berkaine**
* Github: [@IdurarDev](https://github.com/IdurarDev)

👤 **Marie Baude**
* Github: [@MarieBaude](https://github.com/MarieBaude)


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
