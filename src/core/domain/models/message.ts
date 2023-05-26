type BaseMessage = {
  id: string;
  sender: Sender;
  timestamp: Date;
  type: MessageType;
};

type TextMessage = BaseMessage & {
  text: string;
};

type ImageMessage = BaseMessage & {
  base64Url: string;
};

type VideoMessage = BaseMessage & {
  base64Url: string;
};

type LocationMessage = BaseMessage & {
  latitude: number;
  longitude: number;
};

type MessageType = "text" | "image" | "video" | "location";

export type { TextMessage, ImageMessage, VideoMessage, LocationMessage };
