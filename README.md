# Règlements des activités

Application Android (Capacitor) de suivi des règlements des activités des enfants, avec justificatifs et lecture automatique des reçus (ML Kit, sur l'appareil).

- `src/app.html` : l'application (le même fichier sert aussi la version web publiée sur claude.ai).
- `src/native.js` : accès aux fonctions natives (fichiers, partage, lecture de reçu, bouton retour).
- `build.mjs` : génère `www/` pour l'application Android.
- `android/` : projet Android. `reglements.jks` + `keystore.properties` : clé de signature — **à conserver**, elle est nécessaire pour installer les mises à jour sans perdre les données. Gardez ce dépôt privé.

Chaque envoi sur `main` compile l'APK (onglet *Actions*) et le publie dans *Releases*.
