import { generateMockItems, type Item } from "@/data/generate";

const mockItems = generateMockItems(50);

/**
 * Returns a list of items.
 * @returns Item[]
 */
export async function getData(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.3) {
        reject(new Error("Failed to fetch data."));
      } else {
        resolve(mockItems);
      }
    }, 200 + Math.random() * 800);
  });
}
