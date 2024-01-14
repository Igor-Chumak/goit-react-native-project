import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "./config";

export const uploadFileToStorage = async ({ collection, name, fileUri }) => {
  // console.log("FS collection :>> ", collection);
  // console.log("FS name :>> ", name);
  // console.log("FS fileUri :>> ", fileUri);
  try {
    if (!fileUri) return;

    let ext = fileUri.split(".").reverse()[0].split("?")[0];
    const storagePath = `${collection}/${name}.${ext}`;
    const fileRef = ref(storage, storagePath);

    const response = await fetch(fileUri);
    const blob = await response.blob();

    await uploadBytes(fileRef, blob);
    blob.close();

    return await getDownloadURL(fileRef);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default { uploadFileToStorage };
