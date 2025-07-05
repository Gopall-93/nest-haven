Nest Haven 🏡

A full-stack property listing and booking platform built with React (Frontend) and Express.js + MongoDB (Backend).

🚀 Tech Stack

Frontend: React, TailwindCSS, Axios, React Icons

Backend: Node.js, Express, MongoDB, Mongoose, Cloudinary (for image uploads)


📁 Project Structure

nest-haven/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
├── .gitignore
├── README.md

⚙️ Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/nest-haven.git
cd nest-haven

2. Backend Setup (backend/)

cd backend
npm install

✅ Create a .env file inside backend:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

npm run dev

The backend will run on:http://localhost:5000

3. Frontend Setup (frontend/)

cd frontend
npm install
npm run dev

The frontend will run on:http://localhost:5173 (default Vite port)

📦 Environment Variables

Folder

Variable

Description

backend

MONGODB_URI

Your MongoDB database URL

backend

CLOUDINARY_*

Your Cloudinary credentials

frontend

VITE_API_BASE_URL

Your backend base URL (e.g. http://localhost:5000)

📤 Image Upload

Uses Cloudinary for image hosting.

Upload images from the frontend and receive back secure URLs + public IDs for storage in MongoDB.

📌 Features

Host property listings with images, prices, and availability.

Guests can browse and book properties.

Discounts and policies can be added by hosts.

Status management (active/pending) based on listing completion.

🔗 Future Improvements

User authentication (JWT)

Stripe payment integration

Booking calendar

Admin panel

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

📄 License

MIT

