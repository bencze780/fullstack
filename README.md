# Felhasználókezelő (Full-Stack CRUD Alkalmazás)

Ez egy egyszerű, teljes veremű (full-stack) webalkalmazás, amely bemutatja a CRUD (Create, Read, Update, Delete) műveletek megvalósítását. A projekt egy React alapú frontendből és egy Node.js/Express alapú backendből áll, amely MySQL adatbázissal kommunikál.

## Felhasznált technológiák

### Backend
-   **Node.js**: JavaScript futtatókörnyezet.
-   **Express.js**: Webalkalmazás keretrendszer Node.js-hez.
-   **MySQL2**: MySQL adatbázis-illesztőprogram Node.js-hez.
-   **dotenv**: Környezeti változók kezelésére `.env` fájlból.
-   **CORS**: Cross-Origin Resource Sharing kezelésére.

### Frontend
-   **React**: Felhasználói felületek készítésére szolgáló JavaScript könyvtár.
-   **Axios**: HTTP kérések kezelésére.
-   **CSS**: A komponensek stílusozására.

## Projektstruktúra

```
fullstack-compones/
├── backend/
│   ├── .env                # Adatbázis konfiguráció (NEM verziókövetett)
│   ├── .env.example        # .env fájl sablon
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js           # Express szerver és API végpontok
│
└── frontend/
    ├── public/
    └── src/
        ├── components/     # Újrafelhasználható React komponensek
        ├── css/            # CSS stíluslapok
        ├── App.jsx         # Fő alkalmazás komponens
        └── ...
```

---

## Telepítés és futtatás

### Előfeltételek
-   Node.js (LTS verzió ajánlott)
-   MySQL adatbázis-szerver

### 1. Backend beállítása

1.  **Navigálj a `backend` mappába:**
    ```bash
    cd backend
    ```

2.  **Telepítsd a függőségeket:**
    ```bash
    npm install
    ```

3.  **Adatbázis létrehozása:**
    Hozd létre a `users` nevű adatbázist a MySQL szervereden.

4.  **Tábla létrehozása:**
    Futtasd az alábbi SQL parancsot a `users` adatbázisban a szükséges tábla létrehozásához:
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

5.  **Környezeti változók beállítása:**
    Másold le a `backend` mappában található `.env.example` fájlt, és nevezd át `.env`-re. Nyisd meg a `.env` fájlt, és add meg a saját MySQL adatbázisod kapcsolódási adatait.
    ```
    # .env fájl tartalma
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=jelszavad_ide
    DB_NAME=users
    DB_PORT=3306
    ```

6.  **Backend szerver indítása:**
    ```bash
    npm start
    ```
    A szerver alapértelmezetten a `http://localhost:3001` címen fog futni.

### 2. Frontend beállítása

1.  **Nyiss egy új terminált, és navigálj a `frontend` mappába:**
    ```bash
    cd frontend
    ```

2.  **Telepítsd a függőségeket:**
    ```bash
    npm install
    ```

3.  **Frontend alkalmazás indítása:**
    ```bash
    npm start
    ```
    Az alkalmazás megnyílik a böngésződben a `http://localhost:3000` címen.

---

## API Végpontok

A backend az alábbi REST API végpontokat biztosítja:

-   `GET /api/users`
    -   Visszaadja az összes felhasználót.
-   `POST /api/users`
    -   Létrehoz egy új felhasználót. A kérés törzsében `name` és `email` szükséges.
-   `PATCH /api/users/:id`
    -   Módosítja a megadott `id`-jű felhasználó adatait. A kérés törzsében `name` és `email` szükséges.
-   `DELETE /api/users/:id`
    -   Törli a megadott `id`-jű felhasználót.
