interface CaseProps {
  id: number;
  name: string;
  title: string;
  image_url: string;
  industry?: string;
  platforms?: string[];
  type: undefined | "default" | "featured" | "side";
}

interface CasesResponse {
  cases: CaseProps[];
}
