const API =
  "https://zazuadventures.com/wp-json/wp/v2/comments?post=760&per_page=100";

export const getTestimonials = async () => {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to load testimonials");
  }

  return response.json();
};
