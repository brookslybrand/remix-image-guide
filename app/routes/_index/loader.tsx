import { getGuides } from "~/lib/guides.server";

export const loader = async () => {
  const guides = await getGuides();

  return { guides };
};
