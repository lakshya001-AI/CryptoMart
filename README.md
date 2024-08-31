CryptoMart

Buy luxury products using cryptocurrency.

Table of Contents
Overview
Features
Technologies Used
Setup
Usage
Contributing
License
Overview
CryptoMart is a full-stack application that allows users to purchase luxury products using cryptocurrency. The platform integrates with a coin payment wallet to securely perform transactions. Whether you're interested in watches, cars, or high-end electronics, CryptoMart provides a seamless experience for crypto enthusiasts.

Features
Luxury Products Listing: Browse a wide range of luxury products.
Cryptocurrency Payments: Integrated with a coin payment wallet for secure transactions.
User Authentication: Secure login and signup functionalities.
Responsive Design: Fully responsive UI for mobile and desktop users.
Admin Dashboard: Manage products, view transactions, and oversee user activities.
Technologies Used
Frontend: React.js, HTML5, CSS3, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB
Payment Integration: Coin Payment Wallet API
Authentication: JWT (JSON Web Tokens)
Deployment: Docker, AWS
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/cryptomart.git
cd cryptomart
Install dependencies:

bash
Copy code
npm install
cd client
npm install
Setup environment variables: Create a .env file in the root directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
COINPAYMENT_API_KEY=your_coinpayment_api_key
Run the application:

bash
Copy code
npm run dev
Usage
Sign up for an account.
Browse the luxury products available.
Add items to your cart.
Checkout using cryptocurrency via the integrated coin payment wallet.
View order history and track purchases.

Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.
