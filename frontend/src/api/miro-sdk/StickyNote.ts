import type { StickyNote } from "@mirohq/websdk-types";

export const fetchStickyNotes = async (): Promise<StickyNote[]> => {
  try {
    const responseSDK = await miro.board.getSelection();
    const selectedNotes = responseSDK.filter(
      (item) => item.type === "sticky_note",
    ) as StickyNote[];
    return selectedNotes;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
