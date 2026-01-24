import type { UserAdmin } from "@/type";
import supabase from "@/utils/supabase";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: UserAdmin | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserAdmin | null>(null);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) return false;
    setUser({ email: data?.user?.email });
    console.log(data);
    console.log(error);
    return true;
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within the AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider };
