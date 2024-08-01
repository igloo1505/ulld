import { MetadataRoute } from 'next'
import staticContent from "staticContent"


const getRoute = (subPath: string) => {
    return `${staticContent.links.home}${Boolean(subPath.startsWith("/") || subPath.length === 0) ? "" : "/"}${subPath}`
        
    }
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getRoute(""),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: getRoute("/aboutMe"),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: getRoute("/blog"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    {
      url: getRoute("/community"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: getRoute("/configure"),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: getRoute("/contactMe"),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: getRoute("/corePlugins"),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
{
      url: getRoute("/demos"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: getRoute("/docs"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: getRoute("/featureRequest"),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: getRoute("/imageGallery"),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: getRoute("/myWork"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: getRoute("/source"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3,
    },
    {
      url: getRoute("/sponsor"),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: getRoute("/story"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: getRoute("/withSource"),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3,
    },
  ]
}
