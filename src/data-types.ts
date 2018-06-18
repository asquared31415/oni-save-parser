import {
  ParseIterator,
  UnparseIterator,
  readSingle,
  writeSingle,
  readInt32,
  writeInt32
} from "./parser";

export interface Vector2 {
  x: number;
  y: number;
}
export function* parseVector2(): ParseIterator<Vector2> {
  return {
    x: yield readSingle(),
    y: yield readSingle()
  };
}
export function* unparseVector2(value: Vector2): UnparseIterator {
  yield writeSingle(value.x);
  yield writeSingle(value.y);
}

export interface Vector2I {
  x: number;
  y: number;
}
export function* parseVector2I(): ParseIterator<Vector2I> {
  return {
    x: yield readInt32(),
    y: yield readInt32()
  };
}
export function* unparseVector2I(value: Vector2I): UnparseIterator {
  yield writeInt32(value.x);
  yield writeInt32(value.y);
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}
export function* parseVector3(): ParseIterator<Vector3> {
  return {
    x: yield readSingle(),
    y: yield readSingle(),
    z: yield readSingle()
  };
}
export function* unparseVector3(value: Vector3): UnparseIterator {
  yield writeSingle(value.x);
  yield writeSingle(value.y);
  yield writeSingle(value.z);
}

export interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}
export function* parseQuaternion(): ParseIterator<Quaternion> {
  return {
    x: yield readSingle(),
    y: yield readSingle(),
    z: yield readSingle(),
    w: yield readSingle()
  };
}
export function* unparseQuaternion(value: Quaternion): UnparseIterator {
  yield writeSingle(value.x);
  yield writeSingle(value.y);
  yield writeSingle(value.z);
  yield writeSingle(value.w);
}
