// // "use client";
// // import React, { useState } from "react";
// // import { Alert, Button, Spinner, TextInput } from "flowbite-react";
// // import { useRouter } from "next/navigation";
// // import axios from "axios";

// // const ResetPassword = () => {
// //   const [email, setEmail] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setSuccess("");

// //     try {
// //       const response = await axios.post("http://localhost:8000/api/auth/reset-password", { email });
// //       setSuccess(response.data.message);
// //       setEmail("");
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.message || "Something went wrong. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
// //       <h2>Reset Password</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <TextInput
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value.trim())}
// //             placeholder="name@gmail.com"
// //             required
// //             style={{ width: "100%", margin: "10px 0" }}
// //           />
// //         </div>
// //         <Button
// //           type="submit"
// //           disabled={loading}
// //           style={{
// //             width: "100%",
// //             padding: "10px",
// //             backgroundColor: "#007BFF",
// //             color: "white",
// //             border: "none",
// //             cursor: "pointer",
// //           }}
// //         >
// //           {loading ? (
// //             <>
// //               <Spinner size="sm" />
// //               <span className="pl-3">Loading...</span>
// //             </>
// //           ) : (
// //             "Send Reset Link"
// //           )}
// //         </Button>
// //       </form>
// //       {error && (
// //         <Alert className="mt-5" color="failure">
// //           {error}
// //         </Alert>
// //       )}
// //       {success && (
// //         <Alert className="mt-5" color="success">
// //           {success}
// //         </Alert>
// //       )}
// //     </div>
// //   );
// // };

// // export default ResetPassword;

// // pages/resetPassword/[token].jsx
// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const ResetPassword = ({ params }) => {
//   const { token } = params;
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const response = await axios.post(`http://localhost:8000/api/auth/reset-password/${token}`, { newPassword });
//       setMessage(response.data.message);
//       setTimeout(() => router.push("/auth/signin"), 3000); // Redirect after success
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
//       <h2>Reset Password</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px", margin: "10px 0" }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Reset Password
//         </button>
//       </form>
//       {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
//       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//     </div>
//   );
// };

// export default ResetPassword;

// pages/resetPassword.jsx
"use client";

import React, { useState } from "react";
import axios from "axios";

const ResetPasswordRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/auth/reset-password", { email });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "10px 0" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default ResetPasswordRequest;
