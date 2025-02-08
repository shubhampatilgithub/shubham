export const login = async (email: string, password: string) => {
    if (email === "doctor@example.com") return "doctor";
    if (email === "patient@example.com") return "patient";
    if (email === "admin@example.com") return "admin";
    return null;
  };
  