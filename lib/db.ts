import { type SQLiteDatabase } from "expo-sqlite";

const createExercise = async (db: SQLiteDatabase, text: string) => {};
const updateExercise = async (db: SQLiteDatabase, id: number) => {};
const deleteExercise = async (db: SQLiteDatabase, id: number) => {};

const createSet = async (db: SQLiteDatabase, text: string) => {};
const updateSet = async (db: SQLiteDatabase, id: number) => {};
const deleteSet = async (db: SQLiteDatabase, id: number) => {};

const createRep = async (db: SQLiteDatabase, text: string) => {};
const updateRep = async (db: SQLiteDatabase, id: number) => {};
const deleteRep = async (db: SQLiteDatabase, id: number) => {};

export { createExercise, createRep, createSet, deleteExercise, deleteRep, deleteSet, updateExercise, updateRep, updateSet };
