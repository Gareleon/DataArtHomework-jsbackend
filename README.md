# 🃏 Random Joke App Backend

This is the backend for the Random Joke App, built using Express.js and MongoDB. It provides API endpoints for fetching random jokes, voting on them using emojis, and performing full CRUD operations on jokes.

## ⚙️ Features

1. **Data Storage**

   - Uses MongoDB for storing jokes and their vote counts.
   - Stores jokes with question, answer, votes, and available emoji reactions.
   - 🌟 Bonus: Configured with Express and CORS for secure API requests.

2. **API Endpoints**

- `GET /api/joke` → Fetches a random joke.
- `POST /api/joke/:id` → Submits a vote for a joke.
- 🌟 Bonus: Additional CRUD operations:
  - `DELETE /api/joke/:id` → Deletes a joke.
  - `PUT /api/joke/:id` → Updates the content of a specific joke.

3. **Data Structure**

```json
{
  "id": "unique_joke_id",
  "question": "Why did the developer go broke?",
  "answer": "Because he used up all his cache!",
  "votes": [
    { "value": 10, "label": "😂" },
    { "value": 5, "label": "👍" },
    { "value": 3, "label": "❤️" }
  ],
  "availableVotes": ["😂", "👍", "❤️"]
}
```

4. **Key Features**
   - Tracks votes per joke with support for multiple emoji reactions.
   - Validates incoming votes to prevent duplicate entries.
   - Ensures jokes are unique by checking for existing question and answer pairs.

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing jokes and votes
- **Mongoose**: ODM for MongoDB
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## 📁 Project Structure

```
src/
│
├── config/
│   └── db.js            # MongoDB connection setup
│
├── controllers/
│   └── jokeController.js # Logic for joke CRUD and voting
│
├── models/
│   └── Joke.js          # Mongoose schema for jokes
│
├── routes/
│   └── jokeRoutes.js    # Routes for joke endpoints
│
└── index.js             # Main server file
```

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/random-joke-backend.git
cd random-joke-backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your MongoDB URL:

```
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

4. Start the development server:

```bash
npm run start:dev
```

The server will run on `http://localhost:5000`.

## 🔄 API Endpoints

- `GET /api/joke` → Fetch a random joke.
- `POST /api/joke/:id` → Submit a vote for a joke.
- `PUT /api/joke/:id` → Update a joke.
- `DELETE /api/joke/:id` → Delete a joke.

## 📦 Deployment

To deploy the backend on platforms like Heroku or Render:

- Push the repository to your GitHub account.
- Connect your repository to the hosting platform.
- Set environment variables in the deployment dashboard:

```
MONGO_URI=your_mongo_db_connection_string
PORT=5000
```

- Deploy!

## 👨‍💻 Author

Dragan Ignjatovic

## 📜 License

This project is licensed under the ISC License.

## 📌 Acknowledgments

Inspired by DataArt's homework challenge.
Special thanks to the maintainers of Express, MongoDB, and Mongoose for providing great tools!

🚀 Happy Coding!
