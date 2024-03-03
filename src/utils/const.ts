export interface Post {
  title: string;
  user: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Post {
  title: string;
  user: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

export const posts = [
  {
    title: "Post Title 1",
    user: "User1",
    date: "January 1, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag1", "#tag2"],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "Post Title 2",
    user: "User2",
    date: "February 15, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag3", "#tag4"],
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Post Title 3",
    user: "User3",
    date: "March 30, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag5", "#tag6"],
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Post Title 4",
    user: "User4",
    date: "April 10, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag7", "#tag8"],
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Post Title 5",
    user: "User5",
    date: "May 20, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag9", "#tag10"],
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Post Title 6",
    user: "User6",
    date: "June 5, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag11", "#tag12"],
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    title: "Post Title 7",
    user: "User7",
    date: "July 15, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag13", "#tag14"],
    content: "On the other hand, we denounce with righteous indignation and",
  },
  {
    title: "Post Title 8",
    user: "User8",
    date: "August 25, 2024",
    image: "https://via.placeholder.com/150",
    tags: ["#tag15", "#tag16"],
    content:
      "On the other hand, we denounce with  et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];
