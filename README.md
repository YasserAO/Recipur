# Preview : https://recipur.onrender.com/
 
 # Recipur

Recipur is a simple web application that allows users to search for recipes using keywords. This project was developed to practice backend fundamentals and organize files efficiently.

## Features

- **Recipe Search**: Users can search for recipes using the Edamam Recipe API.
- **Recipe Details**: View detailed information about each recipe.
- **Favorites List**: Add recipes to a favorites list for easy access later.
- **Manage Favorites**: View and remove recipes from the favorites list.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YasserAO/Recipur.git
    cd Recipur
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    - Go to the [Edamam Developer Portal](https://developer.edamam.com/).
    - Sign up or log in.
    - Create a new app to get your `App ID` and `API Key`.

4. **Create a `.env` File**:
    - In the root directory, create a file named `.env`.
    - Add your Edamam API credentials as follows:
      ```plaintext
      APP_ID=your_app_id
      APP_KEY=your_api_key
      ```

5. **Start the Server**:
    - For production:
      ```bash
      npm start
      ```
    - For development with automatic restarts:
      ```bash
      npm run dev
      ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the **search bar** to find recipes by entering a keyword.
3. View **recipe details** or **add recipes** to your favorites list.
4. Go to the **favorites page** to see and manage your saved recipes.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: Edamam Recipe API

## Purpose

This project aims to enhance backend development skills, including:
- API integration
- File organization

## Screenshots

Below are some screenshots related to the Recipur application:


Home Page:
![Homepage](/screenshots/homePage.PNG)

Browse Page:
![Browse Page](/screenshots/Browse.PNG)

Favorite List:
![Favorites List](/screenshots/Favorite.PNG)



