# AI Image Generator

Welcome to the AI Image Generator project! This application leverages artificial intelligence to create stunning, high-quality images based on user-provided prompts. It's a versatile tool for artists, designers, and anyone looking to bring their imagination to life.

## Features

- **Text-to-Image Generation**: Generate images by simply providing a descriptive text prompt.
- **Customizable Styles**: Choose from various artistic styles to tailor the generated images to your needs.
- **High-Resolution Outputs**: Get outputs suitable for personal and professional use.
- **User-Friendly Interface**: Intuitive design for easy navigation and interaction.

## Technologies Used

- **Frontend**: React.js (for an interactive and dynamic user interface)
- **Backend**: Node.js with Express.js (for server-side logic)
- **AI Model**: OpenAI/DALL·E, Stable Diffusion, or similar AI image generation models
- **Database**: MongoDB (for user data and prompt history management)
- **Styling**: Tailwind CSS

## Installation

To get started with the AI Image Generator, follow these steps:

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- API Key for the AI Model (e.g., OpenAI API)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
   ```

2. **Install Dependencies**
   ```bash
   npm create vite@latest
   cd client
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   AI_API_KEY=your_api_key
   ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     nodemon app.js
     ```
   - Start the frontend client:
     ```bash
     cd client
     npm run dev
     ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter a descriptive prompt in the text box (e.g., "a futuristic cityscape at sunset").
2. Select an artistic style (optional).
3. Click the **Generate** button.
4. View or download the generated image.


## Acknowledgements
- [Tailwind CSS](https://tailwindcss.com/) for the sleek styling framework.

---

Feel free to report issues or suggest features by creating an issue on the [GitHub repository](https://github.com/yourusername/ai-image-generator/issues). Happy generating!
