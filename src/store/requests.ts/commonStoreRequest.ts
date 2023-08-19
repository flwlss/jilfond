export const getUsersRequest = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    mode: "cors",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("getUsersRequest result", res.status);
    if (res.status === 200) {
      return res.json();
    }
    return null;
  });
};

export const getUsersByIdRequest = async (id: number) => {
  return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("getUsersByIdRequest result", res.status);
    if (res.status === 200) {
      return res.json();
    }
    return null;
  });
};
