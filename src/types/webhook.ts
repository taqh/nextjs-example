export type PostEventData = {
  event: MarblePostEvents;
  data: {
    id: string;
    slug: string;
    title: string;
    userId: string;
  };
};

export type TagEventData = {
  event: MarbleTagEvents;
  data: {
    id: string;
    slug: string;
  };
};

export type CategoryEventData = {
  event: MarbleCategoryEvents;
  data: {
    id: string;
    slug: string;
  };
};
export type MediaEventData = {
  event: MarbleMediaEvents;
  data: {
    id: string;
    name: string;
  };
};

export type MarblePostEvents =
  | "post.published"
  | "post.updated"
  | "post.deleted";
export type MarbleTagEvents = "tag.created" | "tag.updated" | "tag.deleted";
export type MarbleCategoryEvents =
  | "category.created"
  | "category.updated"
  | "category.deleted";
export type MarbleMediaEvents = "media.deleted";
export type MarbleEvents =
  | MarblePostEvents
  | MarbleTagEvents
  | MarbleCategoryEvents
  | MarbleMediaEvents;
export type MarbleEventData =
  | PostEventData
  | TagEventData
  | CategoryEventData
  | MediaEventData;
