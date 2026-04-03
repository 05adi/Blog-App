# BlogApp Backend 🚀

A robust and modular backend API for a blogging platform built using the **MERN Stack** (MongoDB, Express.js, Node.js). This project implements a relational-style data architecture using **Mongoose ODM** to manage posts, comments, and likes.

## 🛠️ Features

- **Post Management**: Create blog posts and retrieve them with nested data.
- **Commenting System**: Users can add comments to any existing post.
- **Like/Unlike Logic**: Toggle likes on posts with automatic updates to the post's record.
- **Data Population**: Leverages Mongoose `.populate()` to efficiently fetch related comments and likes in a single query.
- **Environment Safety**: Uses `dotenv` for secure configuration of database credentials and server ports.

## 📂 Project Structure

The project follows the **MVC (Model-View-Controller)** pattern for scalability:

- **Models**: Defines schemas for `Post`, `Comment`, and `Like`.
- **Controllers**: Contains the business logic for handling requests and database operations.
- **Routes**: Maps API endpoints to their respective controllers.
- **Config**: Centralized database connection logic.

## 🚦 API Endpoints

### Posts
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/posts/create` | Create a new blog post |
| GET | `/api/v1/posts` | Get all posts with populated likes/comments |

### Comments & Likes
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/comments/create` | Add a comment to a post |
| POST | `/api/v1/likes/like` | Like a post |
| POST | `/api/v1/likes/unlike` | Remove a like from a post |

## ⚙️ Tech Stack

- **Server**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone (https://github.com/05adi/Blog-App)
