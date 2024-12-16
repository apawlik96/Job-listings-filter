export interface JobDataInterface {
  id: number;
  logo: string;
  newStatus: boolean;
  featured: boolean;
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: Array<string>;
  tools: Array<string> | [];
}

export default JobDataInterface;
