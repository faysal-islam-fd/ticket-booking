
export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
  }
  
  export interface Ticket {
    id: string;
    type: 'bus' | 'train' | 'flight';
    from: string;
    to: string;
    date: string;
    price: number;
    status: 'active' | 'completed' | 'cancelled';
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
  }