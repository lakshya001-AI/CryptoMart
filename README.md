# CryptoMart

![CryptoMart Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXkgPBcthNp29WrpcSoLm42-jcT6uPnwZBA&s)  
*Buy luxury products using cryptocurrency.*

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
CryptoMart is a full-stack application that allows users to purchase luxury products using cryptocurrency. The platform integrates with a coin payment wallet to securely perform transactions. Whether you're interested in watches, cars, or high-end electronics, CryptoMart provides a seamless experience for crypto enthusiasts.

## Features
- **Luxury Products Listing**: Browse a wide range of luxury products.
- **Cryptocurrency Payments**: Integrated with a coin payment wallet for secure transactions.
- **User Authentication**: Secure login and signup functionalities.
- **Responsive Design**: Fully responsive UI for mobile and desktop users.
- **Admin Dashboard**: Manage products, view transactions, and oversee user activities.

## Technologies Used
- **Frontend**: React.js, HTML5, CSS3, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Coin Payment Wallet API
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker, AWS

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cryptomart.git
    cd cryptomart
    ```

2. **Install dependencies:**
    ```bash
    npm install
    cd client
    npm install
    ```

3. **Setup environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    COINPAYMENT_API_KEY=your_coinpayment_api_key
    ```

4. **Run the application:**
    ```bash
    npm run dev
    ```

## Usage

1. **Sign up** for an account.
2. **Browse** the luxury products available.
3. **Add items** to your cart.
4. **Checkout** using cryptocurrency via the integrated coin payment wallet.
5. **View order history** and track purchases.


## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

