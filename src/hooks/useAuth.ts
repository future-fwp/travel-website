import { useState, useCallback } from 'react';
import type { User } from '../types/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    try {
      // Simulate API call
      if (email && password.length >= 6) {
        const user: User = {
          id: '1',
          username: email.split('@')[0],
          email
        };
        setUser(user);
        setError(null);
        return true;
      }
      throw new Error('Invalid credentials');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, error, login, logout };
}