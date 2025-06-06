

<body>
  <h1>🍽️ Restaurant React App</h1>
  <p>A simple and modern restaurant-themed React application that showcases pages like Home, About, Items, and Categories with responsive design using Tailwind CSS.</p>

  <hr />
  <h2>🚀 Features</h2>
  <ul>
    <li>Stylish Home Page with featured dishes</li>
    <li>Items page with recipes fetched from <a href="https://dummyjson.com/recipes" target="_blank">DummyJSON API</a></li>
    <li>Routing with <code>react-router</code></li>
    <li>Responsive layout using Tailwind CSS</li>
    <li>Components: Header, Footer, Home, About, Items, Layout</li>
    <li>Dynamic page titles and loading/error states</li>
  </ul>

  <hr />
  <h2>🧑‍💻 Tech Stack</h2>
  <ul>
    <li><strong>React</strong> (Vite-based project)</li>
    <li><strong>React Router DOM</strong></li>
    <li><strong>Tailwind CSS</strong></li>
    <li><strong>Fetch API</strong></li>
  </ul>

  <hr />
  <h2>📂 Folder Structure</h2>
  <pre><code>restaurant/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── layout/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Items.jsx
│   ├── routes/
│   │   └── routes.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── README.md</code></pre>

  <hr />
  <h2>⚙️ Setup Instructions</h2>
  <ol>
    <li><strong>Clone the repository</strong>
      <pre><code>git clone https://github.com/hussnain-143/restaurant.git
cd restaurant</code></pre>
    </li>
    <li><strong>Install dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the development server</strong>
      <pre><code>npm run dev</code></pre>
    </li>
    <li><strong>Build for production</strong>
      <pre><code>npm run build</code></pre>
    </li>
  </ol>

  <hr />
  <h2>🌐 Pages Overview</h2>
  <h3>🏠 Home Page</h3>
  <ul>
    <li>Welcome banner</li>
    <li>Featured dishes with hover effects</li>
    <li>Call to action button</li>
  </ul>

  <h3>🍲 Items Page</h3>
  <ul>
    <li>Recipes fetched from DummyJSON</li>
    <li>Responsive card display</li>
    <li>Loading & error handling</li>
  </ul>

  <h3>ℹ️ About Page</h3>
  <ul>
    <li>Brief introduction and background of the restaurant</li>
  </ul>

  <h3>🔗 Header & Footer</h3>
  <ul>
    <li>Navigation links using <code>&lt;Link&gt;</code> from <code>react-router</code></li>
    <li>Sticky header</li>
    <li>Simple footer</li>
  </ul>

  <hr />
  <h2>📎 Notes</h2>
  <ul>
    <li>Ensure your internet connection is active to fetch data from the external API.</li>
    <li>Customize styles or content as needed to match your restaurant branding.</li>
  </ul>

  <hr />
  <h2>👨‍🎓 Author</h2>
  <p><strong>Hussnain Ahmed</strong></p>

  <hr />
  <h2>📃 License</h2>
  <p>This project is open-source and free to use.</p>
</body>
</html>
