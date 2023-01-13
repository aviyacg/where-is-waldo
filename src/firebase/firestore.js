import app from "./app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const db = getFirestore(app);
const COL_ID = "leaderboard";

export async function submitScore(name, time, levelId) {
  // try {
  // validate name
  if (name === undefined || name === null) {
    throw new Error("name must be specified");
  }
  if (typeof name !== "string") {
    throw new Error("name must be a string");
  }
  if (name.length === 0) {
    throw new Error("name is empty");
  }
  if (time === undefined || time === null) {
    // validate time
    throw new Error("time must be specified");
  }
  if (typeof time !== "number" || time <= 0) {
    throw new Error("time must be a positive number");
  }

  // validate levelId
  if (levelId === undefined || levelId === null) {
    throw new Error("levelId must be specified");
  }
  if (typeof levelId !== "number" || levelId <= 0) {
    throw new Error("levelId must be a positive number");
  }

  // get level doc
  const docRef = doc(db, COL_ID, levelId.toString());
  const docSnap = await getDoc(docRef);

  // check if the level exists
  if (!docSnap.exists()) {
    throw new Error("Level " + levelId + " does not exist");
  }

  // get docs data
  const docData = docSnap.data();

  // check if name already exists in the level document
  if (docData[name]) {
    throw new Error("name already exists on the leaderboard");
  }

  // add score to the level document
  updateDoc(docRef, { [name]: time });
  return { name, time, levelId };
  // } catch (e) {
  //   console.log("submitScore Error: ", e);
  //   if (e.message === "name already exists on the leaderboard") {
  //     return e;
  //   }
  // }
}

export async function getLeaderboard(levelId) {
  // validate levelId
  try {
    if (levelId === null || levelId === undefined) {
      throw new Error("levelId must be specified");
    }
    if (typeof levelId !== "number" || levelId <= 0) {
      throw new Error("levelId must be a positive number");
    }

    // get the level document
    const docRef = doc(db, COL_ID, levelId);
    const docSnap = await getDoc(docRef);

    // check if the level exists
    if (!docSnap.exists()) {
      throw new Error("Level " + levelId + " does not exist");
    }

    // get docs data
    const docData = docSnap.data();
    return docData;
  } catch (e) {
    console.log("getLeaderboard Error: " + e);
  }
}
