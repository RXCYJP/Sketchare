import { retrieveDataByFeild } from "@/lib/firebase/service";

export default async function logIn(username: string, password: string) {
  const data = await retrieveDataByFeild("user", "name", username);
  if (data) {
    return data[0];
  } else {
    return null;
  }
}
