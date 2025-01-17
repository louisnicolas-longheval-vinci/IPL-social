# IPL Social - Password Validator

## Auteur
- **Nom** : Longheval
- **Prénom** : Louis-Nicolas
- **Email** : louisnicolas.longheval@student.vinci.be

## Lien GitHub
[https://github.com/louisnicolas-longheval-vinci/IPL-social](https://github.com/louisnicolas-longheval-vinci/IPL-social)

## Description du projet
Ce projet implémente un validateur de mot de passe en JavaScript qui vérifie les critères suivants :

1. **Longueur minimale** : Le mot de passe doit contenir au moins 8 caractères
2. **Caractère spécial** : Au moins un caractère spécial parmi `!@#$%^&*(),.?":{}|<>` est requis
3. **Chiffre** : Au moins un chiffre est requis
4. **Restriction IPL** : Le mot de passe ne peut pas contenir la chaîne "IPL" quelle que soit sa casse (majuscule/minuscule)
5. **Espaces** : Les espaces ne sont pas autorisés dans le mot de passe

L'implémentation suit une approche TDD (Test-Driven Development) avec des tests unitaires complets couvrant :
- Les cas de base pour chaque règle
- Les cas limites (longueur exacte de 8 caractères)
- Les différentes variations de caractères spéciaux et de chiffres
- Les différentes positions et casses de "IPL"
- Les entrées invalides (null, undefined, types non-string)

## Exécution des tests
Pour exécuter les tests, utilisez la commande suivante :
```bash
npm test
```

## Structure du projet
```
.
├── src/
│   └── passwordChecker.js    # Implémentation du validateur
├── spec/
│   └── passwordChecker.spec.js    # Tests unitaires
├── package.json              # Configuration du projet
└── README.md                # Documentation
```

## Installation
1. Clonez le repository
```bash
git clone https://github.com/louisnicolas-longheval-vinci/IPL-social.git
```

2. Installez les dépendances
```bash
npm install
```

## Développement
Le projet suit les principes du TDD :
1. Écriture des tests
2. Vérification de l'échec des tests (Red)
3. Implémentation du code pour faire passer les tests (Green)
4. Refactoring si nécessaire

## Technologies utilisées
- Node.js
- Jasmine (framework de test)
- JavaScript