export type JsonPrimitive = string | number | boolean | null;
//@ts-ignore
export type JsonMap = Record<string, JsonPrimitive | JsonArray | JsonMap>;
export type JsonArray = Array<JsonPrimitive | JsonArray | JsonMap>;
export type Json = JsonPrimitive | JsonMap | JsonArray;
