import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const AuthContext = createContext();

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth context provider component
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Mock sign-in process for demonstration purposes
  useEffect(() => {
    // Simulate fetching user data from storage (AsyncStorage, secure store, etc.)
    const fetchUserData = async () => {
      const savedUserRole = await AsyncStorage.getItem('userRole'); // Replace with your actual logic
      if (savedUserRole) {
        setIsSignedIn(true);
        setUserRole(savedUserRole);
      }
    };

    fetchUserData();
  }, []);

  const signIn = async (role) => {
    setIsSignedIn(true);
    setUserRole(role);
    await AsyncStorage.setItem('userRole', role); // Save role in storage
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUserRole(null);
    await AsyncStorage.removeItem('userRole'); // Remove role from storage
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, userRole, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
