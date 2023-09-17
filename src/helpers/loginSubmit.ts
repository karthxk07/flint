import axios from "axios";

export async function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  let formData = new FormData(e.target as HTMLFormElement);
  let data = new URLSearchParams(formData as any).toString();
  let auth = await axios({
    method: "post",
    url: "http://localhost:8000/login",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  });
  return auth.data;
}