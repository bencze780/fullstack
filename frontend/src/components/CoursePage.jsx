import React from 'react';
import ReactMarkdown from 'react-markdown';

const contents = {
  USED_MODULES: `# 📦 Használt Modulok (Függőségek)

Ez a dokumentum bemutatja a projekt során felhasznált legfontosabb külső csomagokat (modulokat), azok célját és működését.

## 🖥️ Frontend Modulok

### 1. React (\`react\`, \`react-dom\`)
- **Hol használtuk?** A teljes frontend felület felépítésére.
- **Miért használtuk?** Komponens-alapú architektúrát biztosít.
- **Hogyan működik?** A Virtuális DOM segítségével hatékonyan frissíti a felületelemeket.

### 2. React Router (\`react-router-dom\`)
- **Hol használtuk?** Az \`App.jsx\`-ben és a \`Navbar.jsx\`-ben.
- **Miért használtuk?** Single Page Application (SPA) navigáció megvalósítására az oldal újratöltése nélkül.
- **Hogyan működik?** Figyeli az URL sávot, és a megfelelő komponenst rendereli.

### 3. Axios (\`axios\`)
- **Hol használtuk?** A \`HomePage.jsx\` komponensben.
- **Miért használtuk?** HTTP kérések (GET, POST, PATCH, DELETE) küldésére a backend szerver felé.
- **Hogyan működik?** Aszinkron kéréseket indít, automatikusan JSON-ná alakítja az adatokat és a választ.

### 4. React Markdown (\`react-markdown\`)
- **Hol használtuk?** A \`CoursePage.jsx\` komponensben.
- **Miért használtuk?** A Markdown dokumentációk szép megjelenítésére.
- **Hogyan működik?** Beolvassa a nyers Markdown szöveget és HTML elemekké fordítja azt.

### 5. Bootstrap (\`bootstrap\`)
- **Hol használtuk?** A teljes alkalmazás stílusozásához.
- **Miért használtuk?** Gyors és reszponzív UI kialakítását teszi lehetővé egyedi CSS írása nélkül.
- **Hogyan működik?** Kész CSS osztályokat biztosít elrendezéshez és tipográfiához.

---

## ⚙️ Backend Modulok

### 1. Express (\`express\`)
- **Hol használtuk?** A \`server.js\` fájlban.
- **Miért használtuk?** Webszerver és API végpontok egyszerű kezelésére és létrehozására.
- **Hogyan működik?** Hallgat a megadott porton, fogadja a bejövő HTTP kéréseket és válaszol rájuk.

### 2. MySQL2 (\`mysql2/promise\`)
- **Hol használtuk?** A \`server.js\` fájlban az adatbázis kapcsolathoz.
- **Miért használtuk?** A Node.js és a MySQL kommunikációjához.
- **Hogyan működik?** SQL parancsokat küld a Promise API használatával, modern, aszinkron módon (\`async/await\`).

### 3. Dotenv (\`dotenv\`)
- **Hol használtuk?** A \`server.js\` fájl legelején.
- **Miért használtuk?** Érzékeny adatok (jelszavak, portok) biztonságos tárolására külön fájlban, a kódoktól mentesen.
- **Hogyan működik?** Beolvassa a \`.env\` fájlt és betölti a változókat a rendszerkörnyezetbe (\`process.env\`).

### 4. CORS (\`cors\`)
- **Hol használtuk?** A \`server.js\` fájlban middleware-ként.
- **Miért használtuk?** Hogy a frontendünk (\`localhost:5173\`) biztonságosan elérhesse a backendünket (\`localhost:3001\`).
- **Hogyan működik?** Megfelelő HTTP fejléceket (\`Access-Control-Allow-Origin\`) illeszt a backend válaszaihoz.

### 5. Jest és Supertest (\`jest\`, \`supertest\`)
- **Hol használtuk?** A \`tests/\` könyvtár fájljaiban (\`server.test.js\`).
- **Miért használtuk?** A kód automatizált tesztelésére.
- **Hogyan működik?** A Jest adja a teszt futtatót és ellenőrző (\`expect\`) rendszert, a Supertest pedig hamisított HTTP kéréseket küld.`,
  TANULOI_UTMUTATO: `# Tanulói Útmutató: Full-Stack CRUD Alkalmazás Készítése

Üdvözlünk ebben a tananyagban! A célunk, hogy közösen felépítsünk egy teljes (full-stack) webalkalmazást az alapoktól. Megtanuljuk, hogyan működik együtt egy böngészőben futó frontend (amit a felhasználó lát) és egy szerveren futó backend (ami az adatokat kezeli).

A projekt egy egyszerű felhasználókezelő rendszer lesz, ahol létrehozhatunk, lekérdezhetünk, módosíthatunk és törölhetünk felhasználókat (ezt nevezik CRUD műveleteknek).

## Mit fogunk tanulni?

-   **Backend fejlesztés**: Hogyan készítsünk egy API-t Node.js és Express segítségével, ami adatokat szolgáltat.
-   **Adatbázis-kezelés**: Hogyan kapcsolódjunk egy MySQL adatbázishoz és hajtsunk végre SQL parancsokat.
-   **Frontend fejlesztés**: Hogyan építsünk egy interaktív felhasználói felületet React segítségével.
-   **Kommunikáció**: Hogyan kommunikál a frontend a backenddel HTTP kéréseken keresztül.
-   **Jó gyakorlatok**: Hogyan írjunk tiszta, moduláris és biztonságos kódot.

## Előfeltételek

-   JavaScript alapok (változók, függvények, ciklusok, aszinkron műveletek).
-   HTML és CSS alapismeretek.
-   Telepített **Node.js**.
-   Telepített **MySQL** adatbázis-szerver (pl. XAMPP, WAMP, vagy külön telepítve).
-   Egy kódszerkesztő (pl. Visual Studio Code).

---

## 1. Rész: A Backend – Az Alkalmazás Agya

A backend felel az adatok tárolásáért, kezeléséért és a "logikáért". Olyan, mint egy étterem konyhája: a vendég (frontend) leadja a rendelést, a konyha (backend) pedig elkészíti és kiadja az ételt.

### 1.1. A projekt és a függőségek beállítása

1.  Hozz létre egy \`backend\` mappát.
2.  Nyiss egy terminált a mappában, és indítsd el a projektet:
    \`\`\`bash
    npm init -y
    \`\`\`
    Ez létrehoz egy \`package.json\` fájlt, ami leírja a projektünket.

3.  Telepítsük a szükséges csomagokat:
    \`\`\`bash
    npm install express mysql2 dotenv cors
    \`\`\`
    -   \`express\`: A legnépszerűbb keretrendszer Node.js-hez, ami megkönnyíti a szerver és az API végpontok létrehozását.
    -   \`mysql2\`: Egy modern driver, amivel a Node.js alkalmazásunk "beszélgetni" tud a MySQL adatbázissal.
    -   \`dotenv\`: Segítségével érzékeny adatokat (pl. jelszavakat) egy \`.env\` fájlban tárolhatunk, nem pedig a kódban. Ez biztonsági szempontból kulcsfontosságú!
    -   \`cors\`: Lehetővé teszi, hogy a böngészőből (más "eredetről", pl. \`localhost:3000\`-ről) biztonságosan tudjunk kéréseket küldeni a szerverünknek (\`localhost:3001\`).

### 1.2. Az adatbázis előkészítése

Mielőtt kódot írnánk, kell egy hely, ahol tároljuk a felhasználókat.

1.  Hozz létre egy \`users\` nevű adatbázist a MySQL szervereden.
2.  Futtasd le benne az alábbi SQL parancsot a \`users\` tábla létrehozásához:
    \`\`\`sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    \`\`\`
    Ez egy egyszerű tábla \`id\`, \`name\`, \`email\` és \`created_at\` oszlopokkal.

### 1.3. Az Express szerver felépítése (\`server.js\`)

Hozz létre egy \`server.js\` fájlt a \`backend\` mappában.

**1. Lépés: Alapok és adatbázis-kapcsolat**

\`\`\`javascript
// Függőségek importálása
const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config(); // .env fájl betöltése
const cors = require('cors');

// Express alkalmazás és port beállítása
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware-ek használata
app.use(cors()); // CORS engedélyezése
app.use(express.json()); // Bejövő JSON kérések feldolgozása

// Adatbázis kapcsolat létrehozása (Connection Pool)
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(\`A szerver fut a http://localhost:\${PORT} címen\`);
});
\`\`\`

**Fontos:** Hozz létre egy \`.env\` fájlt, és töltsd ki az adatbázisod adataival! (Lásd a \`README.md\`-t.) A \`dbPool\` egy "kapcsolatgyűjtemény", ami hatékonyabban kezeli a kéréseket, mintha minden kérésnél új kapcsolatot építenénk fel.`,
  MVC_MAGYARAZAT: `# Magyarázat: Az MVC Minta a Full-stack és CRUD Projektünkben

Ez a dokumentum bemutatja az **MVC (Model-View-Controller)** szoftverarchitektúra-mintát, és megmutatja, hogyan kapcsolódik a már megismert **Full-stack** és **CRUD** fogalmakhoz a mi konkrét projektünkben.

---

## 1. Mi az az MVC (Model-View-Controller)?

Az MVC egy tervezési minta, amely segít szétválasztani egy alkalmazás logikáját három, egymással összekapcsolt részre. A cél a kód szervezettségének javítása, a könnyebb karbantarthatóság és az újrafelhasználhatóság növelése.

1.  **Model (Modell)**: Az adatokért és az üzleti logikáért felel. Ez a réteg kezeli az adatok tárolását, lekérdezését és módosítását. Nem tudja, és nem is érdekli, hogyan lesznek ezek az adatok megjelenítve.
    -   **Fő feladata**: Kommunikáció az adatbázissal.

2.  **View (Nézet)**: A felhasználói felület. Ez az, amit a felhasználó lát és amivel interakcióba lép. A View feladata az adatok megjelenítése. Nem tartalmaz üzleti logikát.
    -   **Fő feladata**: Adatok megjelenítése a felhasználó számára.

3.  **Controller (Vezérlő)**: Az összekötő kapocs a Modell és a Nézet között. Fogadja a felhasználói kéréseket a Nézettől, feldolgozza azokat, és utasítja a Modellt az adatok frissítésére, majd frissíti a Nézetet az új adatokkal.
    -   **Fő feladata**: Kérések fogadása, feldolgozása és a Modell-Nézet kommunikáció koordinálása.

---

## 2. Hogyan jelenik meg az MVC a mi Full-stack projektünkben?

A Full-stack architektúra (Frontend, Backend, Adatbázis) nagyon szépen leképezhető az MVC mintára.

### **View (Nézet) = Frontend**

A teljes \`frontend\` mappa a mi **Nézetünk**. A React komponensek (\`App.jsx\`, \`UserForm.jsx\`, \`UserTable.jsx\`) felelősek azért, hogy a felhasználó lássa az adatokat és interakcióba tudjon lépni velük (gombok, űrlapok).

> **Példa a kódban**: A \`UserTable.jsx\` megkapja a felhasználók listáját és egy táblázat formájában megjeleníti azt. Ez egy tiszta Nézet-feladat.

### **Controller (Vezérlő) = Backend API Végpontok**

A \`backend/server.js\` fájlban lévő Express API végpontok (\`app.get\`, \`app.post\`, stb.) töltik be a **Vezérlő** szerepét. Ezek a végpontok fogadják a HTTP kéréseket a Nézettől (frontendtől).

> **Példa a kódban**: Amikor a frontend \`axios.post('/api/users', ...)\` kérést küld, a \`server.js\`-ben lévő \`app.post('/api/users', ...)\` végpont fogadja azt. Ez a Vezérlő.

### **Model (Modell) = Backend Adatbázis Logika**

A **Modell** a mi projektünkben az a kódrészlet, amely közvetlenül az adatbázissal kommunikál. A Vezérlő (az API végpont) hívja meg a Modell logikáját, hogy adatokat kérjen le vagy módosítson.

> **Példa a kódban**: A \`server.js\`-ben, az \`app.post\` végponton belül futtatott \`dbPool.query("INSERT INTO users ...")\` SQL parancs a Modell. Ez a kódrészlet felelős az adatbázis-műveletért.

**Összefoglalva a leképezést:**

| MVC Komponens | Full-stack Réteg | Projektünkben |
| :--- | :--- | :--- |
| **View** | Frontend | A \`frontend\` mappa React komponensei |
| **Controller** | Backend (API réteg) | Az Express végpontok a \`server.js\`-ben |
| **Model** | Backend (Adatlogika) + Adatbázis | Az SQL parancsokat futtató részek a \`server.js\`-ben és maga a MySQL adatbázis |

---

## 3. Az MVC és a CRUD Műveletek Összekapcsolása

Nézzük meg egy **CREATE** (létrehozás) művelet teljes életciklusát az MVC mintán keresztül:

1.  **Felhasználói interakció (View)**
    -   A felhasználó a böngészőben kitölti az űrlapot a \`UserForm.jsx\` komponensben (Nézet), majd a "Hozzáadás" gombra kattint.
    -   A \`UserForm\` meghívja a \`handleAddUser\` függvényt, ami egy \`axios.post\` kérést indít a \`/api/users\` végpont felé.

2.  **Kérés feldolgozása (Controller)**
    -   A \`backend/server.js\`-ben lévő \`app.post('/api/users', ...)\` végpont (Vezérlő) fogadja a kérést.
    -   A Vezérlő kiolvassa a kérés törzséből a nevet és az e-mail címet (\`const { name, email } = req.body;\`).

3.  **Adatkezelés (Model)**
    -   A Vezérlő meghívja a Modell logikáját, hogy hajtsa végre az adatbázis-műveletet.
    -   A \`dbPool.query("INSERT INTO users ...")\` parancs (Modell) lefut, és beilleszti az új felhasználót az adatbázisba.

4.  **Válasz a Vezérlőtől a Nézetnek**
    -   A Modell jelzi a sikeres beszúrást a Vezérlőnek.
    -   A Vezérlő egy \`201\`-es (Created) HTTP státuszkóddal és egy sikerüzenettel válaszol a Nézetnek (frontendnek).

5.  **Felület frissítése (View)**
    -   A frontend \`axios\` hívása sikeresen lezárul.
    -   Az \`App.jsx\` komponensben a \`handleAddUser\` függvény \`catch\` blokkja nem fut le, és a \`fetchData()\` újra lefut, hogy frissítse a felhasználói listát a legújabb adatokkal.
    -   A React újrarendereli a \`UserTable\` komponenst, és a felhasználó látja az új sort a táblázatban.

Minden más CRUD művelet (Read, Update, Delete) pontosan ugyanezen a **View -> Controller -> Model -> Controller -> View** cikluson megy keresztül, csak más HTTP metódusokkal (\`GET\`, \`PATCH\`, \`DELETE\`) és más SQL parancsokkal.

## Konklúzió

Az **MVC** egy erőteljes koncepció, ami segít logikailag szétválasztani az alkalmazásunk részeit. A **Full-stack** fejlesztés során természetes módon alkalmazzuk ezt a mintát: a **frontend** a **View**, a **backend API** a **Controller**, az **adatbázis-kezelő logika** pedig a **Model**. A **CRUD** műveletek pedig azok az akciók, amelyek végigmennek ezen a teljes MVC cikluson.`,
  FOGALMAK_CRUD_FULLSTACK: `# Magyarázat: Full-stack és CRUD a projektünkben

Ez a dokumentum segít megérteni a két legfontosabb alapfogalmat, amelyre a projektünk épül: a **Full-stack fejlesztést** és a **CRUD műveleteket**. A magyarázatok a saját kódunkból vett példákat használják.

---

## 1. Mit jelent a Full-stack fejlesztés?

A "Full-stack" (vagy teljes verem) fejlesztés azt jelenti, hogy az alkalmazás minden rétegével dolgozunk, az elejétől a végéig. Egy tipikus webalkalmazás három fő részből áll:

1.  **Frontend (Kliensoldal)**: Ez az, amit a felhasználó a böngészőjében lát és amivel interakcióba lép. A mi projektünkben ez a \`frontend\` mappa.
    -   **Technológia**: React (\`.jsx\` fájlok).
    -   **Feladata**: Megjeleníti a felhasználói felületet (űrlapok, táblázatok, gombok), és elküldi a felhasználó kéréseit a backendnek.
    -   **Példa a kódban**: Amikor kitöltöd az űrlapot a \`UserForm.jsx\` komponensben, a frontend kódot használod.

2.  **Backend (Szerveroldal)**: Ez az alkalmazás "agya", ami a háttérben fut egy szerveren. A felhasználó közvetlenül nem látja. A mi projektünkben ez a \`backend\` mappa.
    -   **Technológia**: Node.js és Express (\`server.js\`).
    -   **Feladata**: Fogadja a frontend kéréseit, feldolgozza azokat (pl. ellenőrzi az adatokat), kommunikál az adatbázissal, és választ küld vissza a frontendnek.
    -   **Példa a kódban**: A \`backend/server.js\` fájlban definiált API végpontok (pl. \`app.get('/api/users', ...)\`).

3.  **Adatbázis**: Itt tároljuk az adatokat tartósan.
    -   **Technológia**: MySQL.
    -   **Feladata**: A felhasználók adatainak (név, email stb.) biztonságos tárolása.
    -   **Példa a kódban**: A \`server.js\`-ben lévő SQL parancsok (pl. \`SELECT * FROM users\`) az adatbázissal kommunikálnak.

**A három réteg kommunikációja a mi projektünkben:**

A \`frontend\` és a \`backend\` egy **API**-n (Application Programming Interface) keresztül "beszélgetnek". A frontend HTTP kéréseket küld a backend által biztosított végpontokra.

> **Példa**: Amikor az \`App.jsx\` komponens betöltődik, a \`fetchData\` függvény egy \`axios.get('http://localhost:3001/api/users')\` kérést küld. A \`server.js\`-ben lévő \`app.get('/api/users', ...)\` végpont fogadja ezt, lekérdezi az adatokat a MySQL adatbázisból, majd visszaküldi azokat a frontendnek, ami megjeleníti őket a táblázatban.

---

## 2. Mik azok a CRUD műveletek?

A **CRUD** egy mozaikszó, amely az adatbázis-kezelés négy alapvető műveletét jelöli. A mi alkalmazásunk is ezekre a műveletekre épül a felhasználók kezelése során.

### **C** - Create (Létrehozás)

Új adat hozzáadása az adatbázishoz.

-   **Felhasználói művelet**: Kitöltöd az "Új felhasználó hozzáadása" űrlapot és a "Hozzáadás" gombra kattintasz.
-   **Frontend (\`App.jsx\`)**: A \`handleAddUser\` függvény lefut, ami egy \`axios.post('/api/users', ...)\` kérést küld a backendnek a névvel és az e-mail címmel.
-   **Backend (\`server.js\`)**: Az \`app.post('/api/users', ...)\` végpont fogadja a kérést.
-   **Adatbázis**: A backend egy \`INSERT INTO users ...\` SQL parancsot futtat, amivel beírja az új felhasználót a táblába.

### **R** - Read (Olvasás)

Meglévő adatok lekérdezése az adatbázisból.

-   **Felhasználói művelet**: Az oldal betöltésekor megjelenik a felhasználók listája.
-   **Frontend (\`App.jsx\`)**: A \`fetchData\` függvény lefut, ami egy \`axios.get('/api/users')\` kérést küld.
-   **Backend (\`server.js\`)**: Az \`app.get('/api/users', ...)\` végpont fogadja a kérést.
-   **Adatbázis**: A backend egy \`SELECT id, name, ... FROM users\` SQL parancsot futtat, hogy lekérje az összes felhasználót.
-   **Válasz**: A backend visszaküldi a felhasználók listáját a frontendnek, ami a \`UserTable\` komponens segítségével megjeleníti azt.

### **U** - Update (Módosítás)

Meglévő adat frissítése az adatbázisban.

-   **Felhasználói művelet**: Rákattintasz a "Szerkesztés" gombra, átírod a nevet vagy az e-mail címet, majd a "Mentés" gombra kattintasz.
-   **Frontend (\`App.jsx\`)**: A \`handleUpdate\` függvény lefut, ami egy \`axios.patch('/api/users/:id', ...)\` kérést küld a backendnek a felhasználó ID-jával és a módosított adatokkal.
-   **Backend (\`server.js\`)**: Az \`app.patch('/api/users/:id', ...)\` végpont fogadja a kérést.
-   **Adatbázis**: A backend egy \`UPDATE users SET name = ?, email = ? WHERE id = ?\` SQL parancsot futtat, amivel frissíti a felhasználó adatait.

### **D** - Delete (Törlés)

Meglévő adat eltávolítása az adatbázisból.

-   **Felhasználói művelet**: Rákattintasz a "Törlés" gombra egy felhasználó sorában.
-   **Frontend (\`App.jsx\`)**: A \`handleDelete\` függvény lefut, ami egy \`axios.delete('/api/users/:id')\` kérést küld a backendnek a törlendő felhasználó ID-jával.
-   **Backend (\`server.js\`)**: Az \`app.delete('/api/users/:id', ...)\` végpont fogadja a kérést.
-   **Adatbázis**: A backend egy \`DELETE FROM users WHERE id = ?\` SQL parancsot futtat, amivel eltávolítja a felhasználót az adatbázisból.

## Összefoglalás

A projektünk egy **Full-stack** alkalmazás, mert tartalmaz egy **frontend** (React) és egy **backend** (Node.js/Express) részt, amelyek egy **adatbázissal** (MySQL) dolgoznak együtt. Az alkalmazás a **CRUD** alapelveket valósítja meg, lehetővé téve a felhasználók létrehozását, olvasását, frissítését és törlését.`,
  TESTING_GENERAL: `# 🧪 Tesztelés Teljes Útmutatója - Fullstack Projekt

## Bevezetés

A tesztelés a szoftverfejlesztés egyik legfontosabb része. Ez az útmutató segít megérteni, hogyan működik a tesztelés ebben a fullstack projektben.

## 📚 Tesztelés Szintjei

A projektben **3 fő tesztelési szintet** használunk:

### 1️⃣ **Unit Tesztek** (Egység Tesztek)
- **Mit tesztelnek?** Egyedi függvények és komponensek működését
- **Hogyan?** Mockolt adatbázissal, izolált környezetben
- **Miért?** Gyors, megbízható, könnyen debuggolható
- **Fájl:** \`backend/tests/unit/server.test.js\`
- **Futtatás:** \`npm run test:unit\`

### 2️⃣ **Integrációs Tesztek** (Integration Tests)
- **Mit tesztelnek?** Több komponens közötti kommunikációt, valódi adatbázissal
- **Hogyan?** Valós adatbázis kapcsolattal
- **Miért?** Ellenőrzi, hogy az összes rész együtt működik
- **Fájl:** \`backend/tests/integration/server.integration.test.js\`
- **Futtatás:** \`npm run test:integration\`

### 3️⃣ **Egyszerű Unit Tesztek** (Simple Unit Tests)
- **Mit tesztelnek?** Alapvető logikát
- **Hogyan?** Jest keretrendszerrel
- **Miért?** Tanulási célra, egyszerű teszteléshez
- **Fájl:** \`backend/sum.test.js\`
- **Futtatás:** \`npm run test:sum\`

---

## 🚀 Gyors Startolás

### Összes teszt futtatása
\`\`\`bash
cd backend
npm run test
\`\`\`

### Specifikus teszt futtatása
\`\`\`bash
# Csak az egyszerű tesztek
npm run test:sum

# Csak a unit tesztek
npm run test:unit

# Csak az integrációs tesztek
npm run test:integration
\`\`\`

### Tesztek figyelése (Watch mód)
Automatikusan újrafuttatja a teszteket, amikor módosítasz egy fájlt:
\`\`\`bash
npm run test:watch
\`\`\`

### Debug módban
Ha bűnös hibákat szeretnél debuggolni:
\`\`\`bash
npm run test:debug
\`\`\`

---

## 📦 Szükséges Eszközök

| Eszköz | Szerepe |
|--------|---------|
| **Jest** | Tesztelési keretrendszer |
| **Supertest** | HTTP kérések szimulálása |
| **mysql2/promise** | Adatbázis driver |
| **Nodemon** | Automatikus szerver újraindítás |

---

## 🎯 Mikor Melyik Tesztet Használd?

### ✅ Unit Tesztet (Mockolt)
- Amikor egy **specifikus végpontot** szeretnél tesztelni
- Amikor **nincs szükséged valós adatbázisra**
- Amikor **gyors visszajelzésre** vár (másodpercek)
- **Előnye:** Gyors, izolált, megbízható

### ✅ Integrációs Tesztet
- Amikor **az egész folyamatot** szeretnél tesztelni
- Amikor **valódi adatbázis-műveletet** szeretnél ellenőrizni
- Amikor **a komponensek közötti kommunikációt** kell vizsgálni
- **Előnye:** Valódi körülmények, konkretos hibakeresés

### ✅ Egyszerű Unit Tesztet
- **Tanulási célra** a tesztelés kezdetén
- **Tiszta logika tesztelésére** (pl. matematikai függvények)
- **Kezdőknek** az első lépésekhez

---

## 🔍 Teszt Struktúra Megértése`,
  TESTING_UNIT: `# 🧪 Unit Tesztek Részletes Útmutatója

## Bevezetés

Ez az útmutató a **unit tesztekről** szól részletesen. A unit tesztek a szoftverfejlesztés alapjai közé tartoznak, és segítenek biztosítani, hogy az egyes kódrészek helyesen működjenek.

## 🎯 Mit Tesztelünk Unit Tesztekkel?

A unit tesztek **egyes függvényeket, metódusokat vagy komponenseket** tesztelnek izoláltan. A mi projektünkben ez azt jelenti, hogy:

- **API végpontokat** tesztelünk mockolt adatbázissal
- **Egyedi logikát** vizsgálunk különállóan
- **Hibakezelést** ellenőrizzük különböző inputokkal

## 🛠️ Technikai Háttér

### Mockolás Miért Szükséges?

A unit tesztekben **nem használunk valódi adatbázist**, mert:
- **Gyorsabb**: Nincs hálózati késleltetés
- **Megbízhatóbb**: Nem függ külső tényezőktől
- **Izolált**: Csak a tesztelt kódot vizsgáljuk

### Eszközök

| Eszköz | Szerepe |
|--------|---------|
| **Jest** | Teszt keretrendszer |
| **Supertest** | HTTP kérések szimulálása |
| **mysql2** | Adatbázis driver (mockolt) |

## 📝 Teszt Példák

### 1. Egyszerű Függvény Teszt

\`\`\`javascript
const sum = (a, b) => a + b;

test('összeadás helyes', () => {
  expect(sum(2, 3)).toBe(5);
});
\`\`\`

### 2. API Végpont Teszt (Mockolt)

\`\`\`javascript
const request = require('supertest');
const app = require('../server'); // Mockolt app

describe('GET /api/users', () => {
  it('visszaadja a felhasználók listáját', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });
});
\`\`\`

## 🚀 Futtatás

\`\`\`bash
cd backend
npm run test:unit
\`\`\`

## 📊 Eredmény Értelmezése

A teszt eredmények segítenek megérteni:
- **Mely függvények működnek helyesen**
- **Hol vannak a hibák**
- **Milyen inputokkal kell számolni**

## 💡 Tippek

- **AAA Pattern**: Arrange, Act, Assert
- **Egy teszt = Egy ellenőrzés**
- **Leíró nevek** használata
- **Edge case-ek** tesztelése`,
  TESTING_INTEGRATION: `# 🔗 Integrációs Tesztek Részletes Útmutatója

## Bevezetés

Az integrációs tesztek ellenőrzik, hogy **a különböző komponensek hogyan működnek együtt**. Ellentétben a unit tesztekkel, itt **valódi adatbázist** használunk.

## 🎯 Mit Tesztelünk?

- **Teljes API hívások** (frontend -> backend -> adatbázis)
- **Adatbázis műveletek** valós környezetben
- **Hibakezelés** teljes folyamatokban

## 🛠️ Technikai Háttér

### Valós Adatbázis Használata

Az integrációs tesztek **valós MySQL adatbázist** használnak:
- **Pontosabb eredmények**
- **Valódi körülmények szimulálása**
- **Komplexebb hibák felderítése**

### Eszközök

| Eszköz | Szerepe |
|--------|---------|
| **Jest** | Teszt keretrendszer |
| **Supertest** | HTTP kérések |
| **MySQL2** | Valós adatbázis kapcsolat |

## 📝 Teszt Példák

### CRUD Műveletek Tesztelése

\`\`\`javascript
describe('Felhasználók CRUD', () => {
  it('létrehoz, módosít és töröl felhasználót', async () => {
    // Create
    const createResponse = await request(app)
      .post('/api/users')
      .send({ name: 'Test User', email: 'test@example.com' })
      .expect(201);
    
    const userId = createResponse.body.id;
    
    // Read
    await request(app)
      .get('/api/users')
      .expect(200);
    
    // Update
    await request(app)
      .patch(\`/api/users/\${userId}\`)
      .send({ name: 'Updated User' })
      .expect(200);
    
    // Delete
    await request(app)
      .delete(\`/api/users/\${userId}\`)
      .expect(200);
  });
});
\`\`\`

## 🚀 Futtatás

\`\`\`bash
cd backend
npm run test:integration
\`\`\`

## 📊 Eredmény Értelmezése

Az integrációs tesztek eredményei mutatják:
- **Az egész rendszer működését**
- **Adatbázis integritást**
- **API kommunikációt**

## 💡 Tippek

- **Tiszta adatbázis** minden teszt előtt
- **Realisztikus adatok** használata
- **Teljes folyamatok** tesztelése`,
  DOCS_App_component: `# App Komponens Dokumentáció

## Áttekintés

Az \`App\` komponens a fő alkalmazás komponens, amely koordinálja a felhasználói felületet és az adatkezelést.

## Funkciók

- **Felhasználók listázása**
- **Új felhasználó hozzáadása**
- **Felhasználók szerkesztése**
- **Felhasználók törlése**

## Használat

\`\`\`jsx
import App from './App';

function Root() {
  return <App />;
}
\`\`\`

## API Integráció

Az App komponens \`axios\` segítségével kommunikál a backend API-val.`,
  DOCS_UserForm_component: `# UserForm Komponens Dokumentáció

## Áttekintés

A \`UserForm\` komponens új felhasználók hozzáadására szolgál.

## Props

- \`onAddUser\`: Függvény, amely új felhasználó hozzáadásakor hívódik meg

## Használat

\`\`\`jsx
<UserForm onAddUser={handleAddUser} />
\`\`\``,
  DOCS_UserTable_component: `# UserTable Komponens Dokumentáció

## Áttekintés

A \`UserTable\` komponens megjeleníti a felhasználók listáját táblázatos formában.

## Props

- \`users\`: Felhasználók tömbje
- \`onEditStart\`: Szerkesztés indítása
- \`onUpdate\`: Frissítés mentése
- \`onDelete\`: Törlés

## Használat

\`\`\`jsx
<UserTable 
  users={users}
  onEditStart={handleEditStart}
  onUpdate={handleUpdate}
  onDelete={handleDelete}
/>
\`\`\``,
  DOCS_UserTableRow_component: `# UserTableRow Komponens Dokumentáció

## Áttekintés

A \`UserTableRow\` komponens egy táblázatsor a felhasználók számára.

## Props

- \`user\`: Felhasználó objektum
- \`isEditing\`: Szerkesztési mód
- \`onEditStart\`: Szerkesztés indítása
- \`onUpdate\`: Frissítés
- \`onDelete\`: Törlés

## Használat

\`\`\`jsx
<UserTableRow 
  user={user}
  isEditing={editingId === user.id}
  onEditStart={handleEditStart}
  onUpdate={handleUpdate}
  onDelete={handleDelete}
/>
\`\`\``,
};

const CoursePage = ({ fileName }) => {
  const content = contents[fileName];

  if (!content) {
    return <div>Hiba: Tartalom nem található</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CoursePage;