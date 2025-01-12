import Blog from "../app/models/blog.js";

/**
 * Seeding Data for MongoDB
 *
 * Each entry should have a model and seeding
 * data for that model.
 */
export default [
  {
    model: Blog,
    seed: [
      {
        _id: "a00000000000000000000001",
        title: "My trip to Barcelona",
        author: "Jane",
        content:
          "Last summer I went to Barcelona and had an amazing time. I went to Las Ramblas, and got some great food, and to La Sagrada Familia to see some crazy architecture by Gaudi.",
      },
      {
        _id: "b00000000000000000000002",
        title: "Living in Boston",
        author: "Alyssa",
        content:
          "My first weeks in Boston have been very informative. The weather outside is often very fickle, and I can't manage to adjust my attire accordingly.",
      },
      {
        _id: "c00000000000000000000003",
        title: "A review of Brave New World by Huxley",
        author: "Renona",
        content:
          "This book was a great commentary on society today, despite it's publishing in 1932. The writing is timeless, and the lessons are applicable in so many ways.",
      },
    ],
  },
];
