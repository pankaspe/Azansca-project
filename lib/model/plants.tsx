import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const plantsDirectory: string = path.join(process.cwd(), 'content/plants');

export function getSortedPlantsData() {

   // Get file names under /plants
   const fileNames = fs.readdirSync(plantsDirectory);
   const allPlants = fileNames.map((fileName) => {
     // Remove ".md" from file name to get id
     const id = fileName.replace(/\.md$/, '');
 
     // Read markdown file as string
     const fullPath = path.join(plantsDirectory, fileName);
     const fileContents = fs.readFileSync(fullPath, 'utf8');
 
     // Use gray-matter to parse the post metadata section
     const matterResult = matter(fileContents);
 
     // Combine the data with the id
     return {
       id,
       ...(matterResult.data as { 
          title: string, 
          summary: string,
          hero: string
          toxic: string,
          protected: string,
        })
      };
   });

   // return data
   return allPlants
 }


 export function getAllPlantIds() {
  const fileNames = fs.readdirSync(plantsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}


export async function getPlantData(id: string) {
  const fullPath = path.join(plantsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}