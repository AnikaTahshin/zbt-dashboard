export interface Post {
  id: number;
  title: string;
  body: string;
}


interface ParamsProps {
  params: {
    id: number;
  };
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
     street: string;
  suite: string;
  city: string;
  zipcode: string;
  };
  phone: string;
  website: string;
  company?: {
    name: string;
  };
}

export type Users = User[];