let store_data = {
  products: [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "audio",
      image:
        "https://images.unsplash.com/photo-1684703147716-014da6a31aa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZWxlc3MlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
      description: "Noise-cancelling over-ear headphones with deep bass.",
      price: {
        old: 59.99,
        sale: 53.99,
      },
      status: "in-stock",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "wearables",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.8,
      description: "Waterproof smartwatch with heart-rate monitor.",
      price: {
        old: null,
        sale: 129.99,
      },
      status: "out-of-stock",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      category: "gaming",
      image:
        "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      rating: 4.2,
      description: "Ergonomic mouse with customizable RGB lighting.",
      price: {
        old: 39.99,
        sale: 31.99,
      },
      status: "in-stock",
    },
    {
      id: 4,
      name: "Smart Lamp",
      category: "home",
      image:
        "https://images.unsplash.com/photo-1688771364064-9c6471ca608e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNtYXJ0JTIwTGFtcHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.4,
      description: "Voice-controlled LED lamp with color-changing modes.",
      price: {
        old: null,
        sale: 45.0,
      },
      status: "in-stock",
    },
    {
      id: 5,
      name: "Blender Pro 3000",
      category: "kitchen",
      image:
        "https://images.unsplash.com/photo-1520433259178-0a6b180165fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsZW5kZXIlMjBQcm8lMjAzMDAwfGVufDB8fDB8fHww",
      rating: 5.0,
      description: "High-speed blender for smoothies, soups, and more.",
      price: {
        old: 89.99,
        sale: 79.99,
      },
      status: "in-stock",
    },
    {
      id: 6,
      name: "Yoga Mat Deluxe",
      category: "fitness",
      image:
        "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WW9nYSUyME1hdCUyMERlbHV4ZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.6,
      description: "Extra thick and non-slip surface for maximum comfort.",
      price: {
        old: null,
        sale: 29.99,
      },
      status: "in-stock",
    },
    {
      id: 7,
      name: "Wireless Earbuds",
      category: "audio",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww",
      rating: 4.3,
      description: "Compact Bluetooth earbuds with long battery life.",
      price: {
        old: 49.99,
        sale: 44.99,
      },
      status: "in-stock",
    },
    {
      id: 8,
      name: "Fitness Tracker",
      category: "wearables",
      image:
        "https://images.unsplash.com/photo-1654195131868-cac1d8429d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpdG5lc3MlMjBUcmFja2VyfGVufDB8fDB8fHww",
      rating: 4.1,
      description: "Track steps, sleep, and calories with style.",
      price: {
        old: null,
        sale: 59.99,
      },
      status: "in-stock",
    },
    {
      id: 9,
      name: "Gaming Keyboard",
      category: "gaming",
      image:
        "https://images.unsplash.com/photo-1626155399627-86488538895d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2FtaW5nJTIwS2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      rating: 4.9,
      description: "Mechanical keyboard with customizable RGB keys.",
      price: {
        old: 99.99,
        sale: 84.99,
      },
      status: "in-stock",
    },
    {
      id: 10,
      name: "Web Development Mastery",
      category: "books",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdlYiUyMERldmVsb3BtZW50JTIwTWFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5.0,
      description: "Learn HTML, CSS, and JS with hands-on projects.",
      price: {
        old: null,
        sale: 24.99,
      },
      status: "in-stock",
    },
  ],
};
export { store_data };
