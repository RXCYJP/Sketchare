import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collcetionName: string) {
  const snapshot = await getDocs(collection(firestore, collcetionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collcetionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collcetionName, id));
  const data = snapshot.data();
  return data;
}

export async function addData(
  collcetionName: string,
  data: any,
  callBack: Function
) {
  await addDoc(collection(firestore, collcetionName), data)
    .then((response) => {
      callBack(true, response.id);
      console.log(response.id);
    })
    .catch((error) => {
      callBack(false);
      console.log(error);
    });
}

export async function retrieveDataByFeild(
  collcetionName: string,
  field: string,
  value: string
) {
  const q = query(
    collection(firestore, collcetionName),
    where(field, "==", value)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function login(data: { username: string }) {
  const q = query(
    collection(firestore, "user"),
    where("username", "==", data.username)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

export async function addDataId(
  collcetionName: string,
  data: any,
  callBack: Function
) {
  await setDoc(doc(firestore, collcetionName, data.id), data)
    .then(() => {
      const id = (data.id = data.id);
      callBack(true, id);
      console.log(data.id);
    })
    .catch((error) => {
      callBack(false);
      console.log(error);
    });
}

export async function updateData(
  collcetionName: string,
  id: string,
  data: any,
  callback: Function
) {
  const docRef = doc(firestore, collcetionName, id);
  await updateDoc(docRef, data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
}

export async function deleteData(
  collcetionName: string,
  id: string,
  callBack: Function
) {
  const docRef = doc(firestore, collcetionName, id);
  await deleteDoc(docRef)
    .then(() => {
      callBack(true);
    })
    .catch(() => {
      callBack(false);
    });
}

export async function updateSiswa(
  collcetionName: string,
  score: number,
  id: string
) {
  const userDocRef = doc(firestore, collcetionName, id);
  const userSnap = await getDoc(userDocRef);

  if (!userSnap.exists()) {
    throw new Error("User not found");
  }

  const userData = userSnap.data();

  await updateDoc(userDocRef, {
    scores: score, // Menambahkan skor ke array
    updatedAt: new Date().toISOString(), // Perbarui timestamp
  });

  return { ...userData, scores: score };
}
