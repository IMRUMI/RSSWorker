// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/show/popular/v1/popular.proto (package bilibili.app.show.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Card } from "../../../card/v1/card_pb.js";
import { PlayerArgs } from "../../../archive/middleware/v1/preload_pb.js";

/**
 * 气泡信息
 *
 * @generated from message bilibili.app.show.v1.Bubble
 */
export const Bubble = proto3.makeMessageType(
  "bilibili.app.show.v1.Bubble",
  () => [
    { no: 1, name: "bubble_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "stime", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * 配置信息
 *
 * @generated from message bilibili.app.show.v1.Config
 */
export const Config = proto3.makeMessageType(
  "bilibili.app.show.v1.Config",
  () => [
    { no: 1, name: "item_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bottom_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bottom_text_cover", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "bottom_text_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "top_items", kind: "message", T: EntranceShow, repeated: true },
    { no: 6, name: "head_image", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "page_items", kind: "message", T: EntranceShow, repeated: true },
    { no: 8, name: "hit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 按钮信息
 *
 * @generated from message bilibili.app.show.v1.EntranceShow
 */
export const EntranceShow = proto3.makeMessageType(
  "bilibili.app.show.v1.EntranceShow",
  () => [
    { no: 1, name: "icon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "module_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "bubble", kind: "message", T: Bubble },
    { no: 6, name: "entrance_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "top_photo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "entrance_type", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * 热门列表-响应
 *
 * @generated from message bilibili.app.show.v1.PopularReply
 */
export const PopularReply = proto3.makeMessageType(
  "bilibili.app.show.v1.PopularReply",
  () => [
    { no: 1, name: "items", kind: "message", T: Card, repeated: true },
    { no: 2, name: "config", kind: "message", T: Config },
    { no: 3, name: "ver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * 热门列表-请求
 *
 * @generated from message bilibili.app.show.v1.PopularResultReq
 */
export const PopularResultReq = proto3.makeMessageType(
  "bilibili.app.show.v1.PopularResultReq",
  () => [
    { no: 1, name: "idx", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "login_event", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "qn", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "fnver", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "fnval", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "force_host", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "fourk", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "spmid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "last_param", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "ver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "entrance_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "location_ids", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "source_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 14, name: "flush", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "player_args", kind: "message", T: PlayerArgs },
  ],
);
