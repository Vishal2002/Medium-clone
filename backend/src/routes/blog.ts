import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { S3Client } from "@aws-sdk/client-s3";
import { HonoS3Storage } from "@hono-storage/s3";

const client = (accessKeyId: string, secretAccessKey: string) =>
  new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
 
const upload =new HonoS3Storage({

  key: (_, file) =>
    `uploads/thumbnails/${file.name}-${new Date().getTime()}.${file.type}`,
  bucket:'photoapp123',
  client: (c) => client(c.env.AWS_ACCESS_KEY_ID, c.env.AWS_SECRET_ACCESS_KEY),
});


type Variables= {
  userId?: number,
}

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
    BUCKET:string,
  },
  Variables: Variables

}>();


blogRouter.use("/*", async (c, next) => {
  
  const authorization = c.req.header('Authorization');

  if (!authorization) {
    c.status(401);
    return c.json({ error: "Missing Authorization header" });
  }

  const token = authorization.split(' ')[1];

  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    c.set('userId',payload.id as number);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "Invalid token" });
  }
})

blogRouter.post('/blogs', upload.single('file'), async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const userId = c.get('userId');
    const form = await c.req.parseBody();
    const file = form['file'];

   const body = await c.req.parseBody();
  
      let thumbnailUrl = null
      if (file) {
  
        thumbnailUrl = `https://${c.env.BUCKET}.s3.amazonaws.com/uploads/thumbnails/${file.name}`;
      }
  
      const newBlog = await prisma.blog.create({
        data: {
          title: body.title as string,
          content: body.content as string,
          authorId: userId as number,
          thumbnail: thumbnailUrl as string,
        }
      })
  
      return c.json(newBlog)
  
  } catch (error) {
    console.error(error);
    return c.json({error:"Internal Server Error"});
  }
 

})

blogRouter.put('/blogs/:id', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId');
    const blogId = c.req.param('id')
    const body = await c.req.parseBody();

    const updatedBlog = await prisma.blog.update({
      where: {
        id: Number(blogId),
        authorId: userId,
      },
      data: {
        title: body.title as string,
        content: body.content as string,
        authorId: userId
      },
    })

    if (!updatedBlog) {
      return c.json({ message: 'Blog not found or you do not have permission to update it' }, 404)
    }

    return c.json(updatedBlog)
  } catch (error) {
    console.error('Error updating blog:', error);
    return c.json({ message: 'An error occurred while updating the blog' }, 500);
  }
})

blogRouter.get('/blogs', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
      where:{
       published:true,
      },
      include: {
        author: true,
      },
    })

    return c.json(blogs)
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return c.json({ message: 'An error occurred while fetching the blogs' }, 500);
  }
})

blogRouter.get('/blogs/:blogid', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogId = c.req.param('blogid')
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(blogId),
        published:true,
      },
      include: {
        author: true,
      },
    })

    if (!blog) {
      return c.json({ message: 'Blog not found' }, 404)
    }

    return c.json(blog)
  } catch (error) {
    console.error('Error fetching blog:', error);
    return c.json({ message: 'An error occurred while fetching the blog' }, 500);
  }
})

blogRouter.put('/publish/:blogid',async(c)=>{
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId');
    const blogId = c.req.param('blogid')
    const body = await c.req.parseBody();

    const updatedBlog = await prisma.blog.update({
      where: {
        id: Number(blogId),
        authorId: userId, 
      },
      data: {
        published: true,
      },
    });

    if (!updatedBlog) {
      return c.json({ message: 'Blog not found or you do not have permission to publish it' }, 404)
    }

    return c.json(updatedBlog)
    
  } catch (error) {
    console.error('Error updating blog:', error);
    return c.json({ message: 'Failed to Publish please try again' }, 500);
  }
})


