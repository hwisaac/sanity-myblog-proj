# sanity 를 이용한 블로그 사이트 백엔드 만들기

[배포](https://nextjs-myblog-proj.vercel.app/)

## Schema

```ts
interface IPost = {
  title: string;
  description: string;
  name: string;
  createdAt: string;
  image: string;
  comments: number;
  tags: string[]
  postId: string;
}

type IPosts = IPost[];

interface IComment {
  name: string;
  email: string;
  password: string;
  content: string;
  createdAt: string;
}

interface IPostData {
  author: IUser;
  title: string;
  createdAt: string;
  content: string;
  tags: string[];
  comments: IComment[];
  description: string;
}

interface IUser {
  name: string;
  email: string;
  image: string;
  posts: IPost[]
}
```