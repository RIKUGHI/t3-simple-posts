import { z } from "zod"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc"

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      include: {
        User: true,
      },
    })
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findUniqueOrThrow({
        where: {
          id: input.id,
        },
      })
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          userId: "b1",
        },
      })
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          content: input.content,
        },
      })
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.delete({
        where: {
          id: input.id,
        },
      })
    }),
})
