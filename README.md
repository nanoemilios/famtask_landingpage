# FamTask Landingpage

Eigenständige Ablage der öffentlichen FamTask-Landingpage aus dem Hauptrepository.

## Inhalt

- `index.html` – Landingpage mit responsivem Layout und integrierter Seitenlogik
- `my/i18n.js` und `my/lang/` – Übersetzungslogik und Sprachdateien
- `install-config.js` – Zielkonfiguration für den Link zur FamTask-App

## Bereitstellung

Die Seite ist statisches HTML und kann auf einem Webserver oder über GitHub Pages bereitgestellt werden. Für die App- und Rechtstext-Links muss die FamTask-Installation unter dem in `install-config.js` festgelegten Pfad verfügbar sein. Die Standardkonfiguration erwartet die Installation unter `/my`; für eine App auf einer Subdomain kann `type` auf `subdomain` gesetzt werden.

Die Kontaktadresse wird auf Basis des Hostnamens als `info@<hostname>` gebildet.
