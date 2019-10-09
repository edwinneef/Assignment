type MenuItem = {
  title: string;
  url: string;
  id: number;
};

interface CaseProps {
  id: number;
  name: string;
  title: string;
  image_url?: string;
  industry?: string;
  category?: string;
  type: undefined | "default" | "featured" | "side";
}
interface CasesResponse {
  items: CaseProps[];
}

interface CaseFilter {
  category: string | null;
  industry: string | null;
}

interface AppState {
  cases: CaseProps[];
  menu_items: MenuItem[];
  filter: CaseFilter;
}
