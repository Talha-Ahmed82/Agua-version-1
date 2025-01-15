// // A mock function to mimic making an async request for data

export function fetchLoggedInUserOrders() {
    return new Promise(async (resolve) => {
      const response = await fetch("/orders/own/");
      const data = await response.json();
      resolve({ data });
    });
  }
  
  export function fetchLoggedInUser(id) {
    return new Promise(async (resolve) => {
      const response = await fetch(`http://localhost:8000/api/user/${id}`);
      const data = await response.json();
       console.log("this is user data", data)
      resolve({ data });
    });
  }
  // export function fetchLoggedInUser() {
  //   // if (!userId) {
  //   //   throw new Error("userId is required to fetch user data.");
  //   // }
  
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/api/user/${userId.id}`);
       
  //       const data = await response.json();
  //         resolve({ data });

  //       console.log("This is User Data",data)
  //     } catch (error) {
  //       console.error("Error fetching user data:", error.message);
  //       reject(error.message);
  //     }
  //   });
  // }
  
  export async function updateUser(update) {
    try {
      const response = await fetch(`/users/${update.id}`, {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error("Update user failed:", error);
      throw error; // Re-throw the error to be handled by the calling function
    }
  }