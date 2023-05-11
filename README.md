# sanity 를 이용한 블로그 사이트 백엔드 만들기

[배포](https://nextjs-myblog-proj.vercel.app/)

## Schema

```ts
interface IPost {
  title: string;
  description: string;
  name: string;
  image: string;
  tags: string[]
  postId: string;
  createdAt: string;
  updatedAt: string;
  comments: IComment[];
}

interface IPostData {
  author: IUser;
  title: string;
  image: string;
  content: string;
  tags: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
  comments: IComment[];
}

type IPosts = IPost[];

interface IComment {
  name: string;
  email: string;
  password: string;
  content: string;
  createdAt: string;
}



interface IUser {
  name: string;
  email: string;
  image: string;
  posts: IPost[]
}
```