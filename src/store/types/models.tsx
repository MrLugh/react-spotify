export interface Image {
  heigth: number;
  width: number;
  url: string;
}

export interface UserLogged {
  country: string;
  display_name: string;
  email: string;
  explicit_content: any;
  external_urls: any;
  followers: any;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
