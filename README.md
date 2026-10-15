# FamTask Landingpage

Eigenständige Ablage der öffentlichen FamTask-Landingpage aus dem Hauptrepository.

## Inhalt

- `index.html` – Landingpage mit responsivem Layout und integrierter Seitenlogik
- `i18n.js` und `lang/` – eigenständige Übersetzungslogik und Sprachdateien mit ausschließlich Landingpage-Texten
- `install-config.js` – Zielkonfiguration für den Link zur FamTask-App

## Bereitstellung

Die Seite ist statisches HTML und kann auf einem Webserver oder über GitHub Pages bereitgestellt werden. Sie benötigt keine Dateien aus dem FamTask-App-Ordner. Für die App- und Rechtstext-Links muss die FamTask-Installation unter dem in `install-config.js` festgelegten Pfad verfügbar sein. Die Standardkonfiguration erwartet die Installation unter `/my`; für eine App auf einer Subdomain kann `type` auf `subdomain` gesetzt werden.

Die Kontaktadresse wird auf Basis des Hostnamens als `info@<hostname>` gebildet.

## Bezug zur App

Diese Landingpage beschreibt die App in den Texten von `lang/` und ist von deren
Versionsstand unabhängig. Der aktuelle Anwendungsstand ist **1.5.0** und umfasst
gegenüber 1.4.0 unter anderem:

- Taschengeld in CHF mit Sparkonto, Wochenvergütung und Kauf von Medienzeit
- Jukebox, personalisiert pro Kind, mit Favoriten
- Externe Musikquellen über WebDAV, FTP/FTPS, HTTPS/S3 und gemountete Laufwerke

Die Inhalte der Landingpage wurden bei dieser Aktualisierung **nicht** an den
neuen Funktionsumfang angepasst. Wenn die Seite die neuen Funktionen nennen
soll, sind die entsprechenden Texte in `index.html` und `lang/` zu ergänzen.

## Verwandte Repositories

- **famtask** – Hauptanwendung
- **famtask_docs** – ausführliche Dokumentation
- **famtask_installer** – Web-Installer für Shared Hosting
- **famtask_docker** – Docker Compose Setup
- **famtask_proxmox** – Proxmox Installer Scripts
