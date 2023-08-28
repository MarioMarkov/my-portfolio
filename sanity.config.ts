import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId:"p74v4yzp",
  dataset:"production",
  title: "My Portfolio",
  apiVersion:"2023-08-18",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config