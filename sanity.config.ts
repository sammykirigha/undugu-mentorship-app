import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./src/components/StudioNavBar";
import Logo from "./src/components/Logo";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Undugu_Content_studio",
  title: "Undugu Mentorship Website Studio",
  projectId: "4cu9frce",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
});
