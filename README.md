# LIMS Tech App

A modern, scalable Laboratory Information Management System (LIMS) built with **Angular 21** and **TypeScript**. This application provides high-performance backend solutions for managing laboratory operations, data collection, and sample tracking.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern Angular Framework** - Built with Angular 21 for a responsive and dynamic user interface
- **TypeScript Support** - Full TypeScript implementation for type safety and better developer experience
- **Server-Side Rendering** - SSR support for improved performance and SEO
- **Bootstrap Integration** - Professional UI components with Bootstrap 5
- **Responsive Design** - Mobile-friendly interface that works across all devices
- **Reactive Forms** - Robust form handling with Angular Forms
- **Routing** - Advanced routing capabilities with Angular Router
- **Express Backend** - Node.js/Express server for SSR support
- **Development Tools** - Integrated with Vitest for testing and Prettier for code formatting

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend Framework** | Angular 21.1.0 |
| **Language** | TypeScript 5.9.2 |
| **UI Framework** | Bootstrap 5.3.8 |
| **State Management** | RxJS 7.8.0 |
| **Build Tool** | Angular CLI 21.1.4 |
| **Server** | Express 5.1.0 |
| **Testing** | Vitest 4.0.8 |
| **Code Formatter** | Prettier |
| **Runtime** | Node.js |
| **Package Manager** | npm 11.8.0 |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.x or higher)
- **npm** (v11.8.0 or higher)
- **Angular CLI** (v21.1.4)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaydeepchavda/lims-tech-app.git
   cd lims-tech-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   ng version
   ```

## 💻 Usage

### Development Server

Start the development server with hot-reload capabilities:

```bash
npm start
```

or

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload whenever you modify source files.

### Watch Mode

Build the project in watch mode for continuous development:

```bash
npm run watch
```

## 📁 Project Structure

```
lims-tech-app/
├── src/
│   ├── app/                 # Angular application root
│   │   ├── components/      # Reusable components
│   │   ├── services/        # Business logic & API services
│   │   ├── models/          # TypeScript interfaces & models
│   │   ├── routing/         # Routing configuration
│   │   └── app.component.*  # Root component
│   ├── assets/              # Static assets (images, icons, etc.)
│   ├── styles.css           # Global styles
│   ├── index.html           # HTML entry point
│   ├── main.ts              # Application bootstrap
│   ├── main.server.ts       # Server entry point
│   └── server.ts            # Express server configuration
├── angular.json             # Angular CLI configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies & scripts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `ng serve` | Serve the application locally |
| `npm run build` | Build the project for production |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Karma |
| `npm run serve:ssr:limstech` | Serve production SSR build |

## 🏗️ Building for Production

Build the application for production deployment:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. The build is optimized for performance with:
- Minification
- Tree-shaking
- Dead code elimination
- Bundle optimization

### Production Build with SSR

For server-side rendering:

```bash
npm run build
npm run serve:ssr:limstech
```

## 🧪 Testing

Run unit tests with Vitest:

```bash
npm test
```

## 🌐 Server-Side Rendering (SSR)

This project includes Angular Universal SSR support for improved performance and SEO. The server configuration is in `src/server.ts` and `src/main.server.ts`.

**Benefits of SSR:**
- Faster initial page load
- Better SEO optimization
- Improved performance for low-bandwidth users
- Server-side data fetching capabilities

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Standards
- Follow Angular style guide and best practices
- Use TypeScript strict mode
- Ensure all tests pass
- Format code with Prettier (`prettier --write .`)
- Keep components modular and reusable
- Add meaningful comments where necessary

### Before Submitting PR
- Run tests: `npm test`
- Build the project: `npm run build`
- Check for linting errors
- Update documentation if needed

## 📝 License

This project is private and maintained by [jaydeepchavda](https://github.com/jaydeepchavda).

## 📧 Contact & Support

For questions, issues, or feature requests, please open an issue on the [GitHub Issues](https://github.com/jaydeepchavda/lims-tech-app/issues) page.

---

**Last Updated:** March 2026
**Maintained by:** Jaydeep Chavda