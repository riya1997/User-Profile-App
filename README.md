# UserProfileApp

Dies ist ein einfaches Angular-Projekt mit einer Anmeldeseite und einer Benutzerprofilseite. Dieses Projekt umfasst:

- Eine Anmeldeseite
- Eine Benutzerprofilseite
- JWT-Authentifizierung
- Grundlegendes Routing

## Anmeldeseite

Der Benutzer muss den Benutzernamen und das Passwort eingeben.
Die Anmeldeschaltfläche wird erst aktiviert, wenn der Benutzer Benutzername und Passwort eingegeben hat.
Die Anmeldeanfrage wird an die API gesendet
– wenn die Anmeldedaten gültig sind, werden accessToken und refreshToken zurückgegeben. Beide Tokens werden in localStorage gespeichert.
Der Benutzer wird zur Profilseite weitergeleitet
– wenn die Anmeldedaten ungültig sind, wird eine Fehlermeldung angezeigt.

## Benutzerprofilseite

Die Profilseite ist nur zugänglich, wenn der Benutzer authentifiziert ist.
Lädt die Benutzerprofilinformationen.

## JWT-Authentifizierung

when user logs in, it will return 2 Tokens:

- Access Token
  Wird verwendet, um auf geschützte API-Endpunkte zuzugreifen.
- Refresh Token
  Wird verwendet, um ein neues Access Token anzufordern, wenn das aktuelle abläuft.

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) Version 15.2.11 erstellt.

## Entwicklungsserver

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Build

Führe `ng build` aus, um das Projekt zu bauen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.
