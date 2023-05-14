# sanity 를 이용한 블로그 사이트 백엔드 만들기

[배포](https://nextjs-myblog-proj.vercel.app/)

## Schema

```ts
export interface IPost {
  title: string;
  slug: string;
  thumbnail: string | null;
  description: string;
  tags: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
  commentsLength: number;
}

type IPosts = IPost[];

export interface IPostDetail {
  author: {
    name: string;
    email: string;
    image: string;
  };
  title: string;
  slug: string;
  thumbnail: string;
  tags: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
  comments: IComment[];
  content: string;
}

export interface IComment {
  name: string;
  email: string;
  password: string;
  content: string;
  _key: string;
  createdAt: string;
}

interface IUser {
  name: string;
  email: string;
  image: string;
}
```