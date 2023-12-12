// a global notification function. Usage example: notification({ status: "success", message: "Successfully logged in" })

import toast from 'react-hot-toast';

export default ({
  status,
  message,
  autoClose,
}: {
  status?: "success" | "error" | "info" | "warning";
  message: string;
  autoClose?: number;
}) => {
  if (status === "error") {
    toast.error(message, {
      position: "top-center",
      duration: autoClose || 5000,
    });
  }
  else {
    toast.success(message, {
      position: "top-center",
      duration: autoClose || 5000,
    });
  }
}
