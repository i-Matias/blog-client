export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Image {
  alt: string;
  filename: string;
}

export interface Post {
  postId: number;
  createdBy: string;
  createdAt: string;
  title: string;
  content: string;
  image: {
    fileName: string;
    alt: string;
  }[];
  tagsName: string[];
}

export const filterPost = (post: any): Post[] => {
  return post.map((p: any) => {
    const { title, content, images, created, users } = p;
    return {
      title,
      content,
      tags: "music",
      image: images,
      date: created,
      user: users,
    };
  });
};
