import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client'

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const prisma = new PrismaClient()

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {

  fastify.get('/', async (req, res) => {
    const posts = await prisma.person.findMany({
      where: { firstName: "Marie" }
    })
    res.send(posts)
  })

  // Do not touch the following lines
  
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })

  void fastify.register(require("point-of-view"), {
    engine: {
      pug: require("pug"),
    }
  })

};

export default app;
export { app }
